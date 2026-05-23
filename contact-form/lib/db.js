import mongoose from "mongoose";

const MONGODB_URL = process.env.MOGODB_URL
let isconnected = false
export async function dbConnection() {
    if (isconnected) {
        console.log("already connected to db")
        return
    }

    try {
        const db = await mongoose.connect(MONGODB_URL)
        isconnected = db.connections[0].readyState === 1
        console.log("connected to db")
    } catch (error) {
        console.log("there is an error", error)
    }


}