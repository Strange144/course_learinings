import { NextResponse } from "next/server";
import { user } from "../users/route";

export async function PUT(request) {
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

        const exisitnguser = user.findIndex((use) => use.rollno === rollno)
        if (exisitnguser === -1) {

            return NextResponse.json({
                success: false,
                msg: "enter valid rollno"
            }, { status: 400 })

        }

        user[exisitnguser] = {
            name: name,
            rollno: rollno,
            classname: classname
        }
        return NextResponse.json({
            success: true,
            data: user[exisitnguser],
            msg: "data is updated",
        }, { status: 200 })



    } catch (error) {
        return NextResponse.json({
            msg: `gala ho gaya ${error.message || error}`,
        }, { status: 400 })

    }
}