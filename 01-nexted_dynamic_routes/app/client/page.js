"use client";

import { useCallback, useEffect, useState } from "react";
export default function datapage() {
    const [data, usedata] = useState(null)
    useEffect(() => {
        async function fetchdata() {
            const res = await fetch("https://api.github.com/users/Strange144")
            usedata(await res.json())
        }

        fetchdata()
    }, [])

    return (
        <div>
            <p>{JSON.stringify(data)}</p>
        </div>
    )

}