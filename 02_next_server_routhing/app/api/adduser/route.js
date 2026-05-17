import { NextResponse } from "next/server";
import { user } from "../users/route";

export async function POST(request) {
    try {
        const { name, rollno, classname } = await request.json();
        if (!name || !rollno || !classname) {
            return NextResponse.json(
                {
                    success: false,
                    msg: "enter name rollno and classname"
                }, { status: 400 }
            )
        }

        const exisitnguser = user.find((use) => use.rollno === rollno)
        if (exisitnguser) {
            return NextResponse.json({
                success: false,
                msg: "rollno already exist"
            }, { status: 400 })

        }

        const newuser = {
            name,
            rollno,
            classname
        }

        user.push(newuser)
        return NextResponse.json({
            success: true,
            data: user,
            msg: "new user created"
        }, { status: 201 })

    } catch (error) {

    }
}