import { NextResponse } from "next/server"

export const user = [
    {
        name: "Ansul",
        rollno: 9130,
        classname: "tycsA"
    },
    {
        name: "joel",
        rollno: 9129,
        classname: "tycsB"
    }
]
export async function GET(responce) {
    try {
        return NextResponse.json({
            Success: true,
            data: user,
            records: user.length
        })
    } catch (error) {
        return NextResponse.json({
            Success: false,
            data: `there is something wrong :- ${error} `,
        })

    }
}