import { NextResponse } from "next/server"

export async function GET(request) {
    const requestheader = new Headers(request.headers)
    const authheader = requestheader.get("Authorization")
    console.log(authheader)
    // return new Response("<h1>Profile Api Data</h1>", {
    //     headers: {
    //         "Content-Type": "text/html",
    //         "X-Custom-Header": "Next.js Tutorial",
    //     },
    // });


    const responce = NextResponse.json({ msg: "ram ram bhai" })

    responce.headers.set("x-powered-by-Ansul", "Next.js 15")
    return responce
}