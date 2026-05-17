import { NextResponse } from "next/server";
import { user } from "../../users/route.js";

export async function GET(request, { params }) {
    try {
        const resolvedParams = await params;
        const rollno = Number(resolvedParams.rollno);
        const existingUser = user.findIndex(
            (use) => use.rollno === rollno
        );

        if (existingUser === -1) {
            return NextResponse.json(
                {
                    success: false,
                    msg: "User not found"
                },
                { status: 404 }
            );
        }

        return NextResponse.json(
            {
                success: true,
                data: user[existingUser]
            },
            { status: 200 }
        );

    } catch (error) {

        return NextResponse.json(
            {
                success: false,
                msg: `Error: ${error}`
            },
            { status: 500 }
        );

    }
}