import { NextResponse } from "next/server";
import { user } from "../users/route";

export async function PATCH(request) {
    try {
        const body = await request.json();
        const { rollno, name, classname } = body;

        if (!rollno) {
            return NextResponse.json(
                {
                    success: false,
                    msg: "Please provide a rollno"
                }, { status: 400 }
            )
        }

        const existingUserIndex = user.findIndex((use) => use.rollno === Number(rollno));
        if (existingUserIndex === -1) {
            return NextResponse.json({
                success: false,
                msg: "enter valid rollno"
            }, { status: 404 })
        }

        // Partial update: Only update fields that are actually passed in the request body
        if (name !== undefined) {
            user[existingUserIndex].name = name;
        }
        if (classname !== undefined) {
            user[existingUserIndex].classname = classname;
        }

        return NextResponse.json({
            success: true,
            data: user[existingUserIndex],
            msg: "User partially updated successfully",
        }, { status: 200 })

    } catch (error) {
        return NextResponse.json({
            success: false,
            msg: `gala ho gaya: ${error.message || error}`
        }, { status: 500 })
    }
}
