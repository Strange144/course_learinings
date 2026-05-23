"use server"

import { dbConnection } from "@/lib/db"
import { Contact } from "@/models/contact"
import { revalidatePath } from "next/cache"

export async function createContact(formData) {
    try {
        await dbConnection()
        const name = formData.get("name")
        const email = formData.get("email")
        const subject = formData.get("subject")
        const message = formData.get("message")

        if (!name || !email || !subject || !message) {
            return ({
                success: false,
                error: "please enter all the fields"
            })

        }
        const contact = await Contact.create({
            name: name.trim(),
            email: email.trim().toLowerCase(),
            subject: subject.trim(),
            message: message.trim()
        })

        return ({
            success: true,
            message: "contact added successfully",
            contactId: contact._id.toString()
        })
    } catch (error) {
        console.log("there is something wrong ", error)
        return ({
            success: false,
            error: `there is something wrong , ${error}`
        })
    }
}

export async function getContact() {
    try {
        await dbConnection()
        const contacts = await Contact.find({}).sort({ createAt: -1 }).lean()
        return contacts.map((contact) => ({
            ...contact,
            _id: contact._id.toString(),
            createdAt: contact.createdAt,
            updatedAt: contact.updatedAt
        }))
    } catch (error) {
        console.log("there is something wrong", error)
        return []
    }
}

export async function updateContact(contactId, status) {
    try {
        await dbConnection()
        await Contact.findByIdAndUpdate(contactId, { status })
        revalidatePath("/contacts")
        return { success: true }
    } catch (error) {
        console.log("falid to update status", error)
        return { success: false, error: "failed to update status" }
    }
}