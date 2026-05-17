import { NextResponse } from "next/server";
import { user } from "../../users/route";

export async function DELETE(request, { params }) {
    try {
        const resolvedParams = await params;
        const rollno = Number(resolvedParams.rollno);

        const existingUserIndex = user.findIndex((use) => use.rollno === rollno);
        if (existingUserIndex === -1) {
            return NextResponse.json(
                {
                    success: false,
                    msg: "User not found"
                },
                { status: 404 }
            );
        }

        // Delete user from array
        const deletedUser = user.splice(existingUserIndex, 1)[0];

        return NextResponse.json(
            {
                success: true,
                deletedUser,
                data: user,
                msg: "User deleted successfully"
            },
            { status: 200 }
        );

    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                msg: `gala ho gaya: ${error.message || error}`
            },
            { status: 500 }
        );
    }
}
