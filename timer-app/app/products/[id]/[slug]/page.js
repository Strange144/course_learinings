"use client"
import { useParams } from "next/navigation"

export default function Productpage() {
    const params = useParams()
    console.log(params)
    return (
        <div>Product id : {params.id} and slug {params.slug}</div>

    )
}