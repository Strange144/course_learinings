import dbConnection from "@/lib/db";
import note from "@/model/note";
import { NextResponse } from "next/server";


export async function GET() {
    try {
        await dbConnection()
        const notes = await note.find({}).sort({ createdAt: -1 })
        return NextResponse.json(
            {
                success: true,
                data: notes,
                msg: "successful"
            }, { status: 200 }
        )
    } catch (error) {
        return NextResponse.json({
            success: false,
            msg: `falid to create note ${error}`
        })
    }
}

export async function POST(request) {
    try {
        await dbConnection()
        const body = await request.json()
        const notes = await note.create(body)
        return NextResponse.json(
            {
                success: true,
                data: notes
            }, { status: 201 }
        )
    } catch (error) {
        return NextResponse.json({
            success: false,
            msg: `falid to create note ${error}`
        })
    }
}