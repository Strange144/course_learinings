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

        const { searchParams } = new URL(responce.url);
        const name = searchParams.get("name")
        const rollno = searchParams.get("rollno")

        let filteredUsers = user

        if (rollno) {
            filteredUsers = filteredUsers.filter((u) => u.rollno == Number(rollno))
        }

        if (name) {
            filteredUsers = filteredUsers.filter((u) => u.name.toLowerCase().includes(name.toLowerCase()))
        }

        return NextResponse.json({
            Success: true,
            data: filteredUsers,
            records: user.length
        })
    } catch (error) {
        return NextResponse.json({
            Success: false,
            data: `there is something wrong :- ${error.message || error} `,
        })

    }
}