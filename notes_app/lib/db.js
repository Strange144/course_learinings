import mongoose from "mongoose";
const MONGODB_URL = process.env.MONGODB_URL

export default async function dbConnection() {
    // Check the ACTUAL connection state, not a stale boolean flag
    // readyState: 0 = disconnected, 1 = connected, 2 = connecting, 3 = disconnecting
    const currentState = mongoose.connection.readyState

    if (currentState === 1) {
        console.log("already connected")
        return
    }

    // If there's a stale/broken connection, disconnect first before reconnecting
    if (currentState === 3 || currentState === 0) {
        try {
            await mongoose.disconnect()
        } catch (e) {
            // Ignore disconnect errors
        }
    }

    try {
        await mongoose.connect(MONGODB_URL, {
            serverSelectionTimeoutMS: 5000,
            bufferCommands: false, // Fail immediately if not connected instead of buffering for 10s
        })
        console.log("connected to db successfully")
    } catch (error) {
        console.log("not connected to db:", error.message || error)
    }
}