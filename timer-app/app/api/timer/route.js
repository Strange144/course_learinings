import { NextResponse } from "next/server"

export async function GET() {
    const currentTime = new Date()

    return NextResponse.json({
        timeStamp: currentTime.toISOString(),
        readable: currentTime.toLocaleTimeString(),
        unix: currentTime.getTime(),
        msg: "timer api called successfully",
        requestID: Math.random().toString(32).substring(2, 15)
    })

}