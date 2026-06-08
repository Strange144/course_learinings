"use server"

import { db } from "@/lib/db"
import { usersTable } from "@/schema/index.js"
import { eq } from "drizzle-orm"
import { revalidatePath } from "next/cache"

export const getUsers = async () => {
  const users = await db.select().from(usersTable).orderBy(usersTable.id)
  return users
}

export const createUser = async (formData) => {
  const name = formData.get("name")
  const age = parseInt(formData.get("age"))
  const email = formData.get("email")

  await db.insert(usersTable).values({ name, age, email })

  revalidatePath("/")
}

export const deleteUser = async (formData) => {
  const id = parseInt(formData.get("id"))
  await db.delete(usersTable).where(eq(usersTable.id, id))
  revalidatePath("/")
}
