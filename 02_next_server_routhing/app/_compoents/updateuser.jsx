"use client";

import { useState } from "react";

export default function Updateuser() {
    const [name, setName] = useState("");
    const [rollno, setRollno] = useState("");
    const [classname, setClassname] = useState("");

    async function updateuser() {
        const res = await fetch("http://localhost:3000/api/updateuser", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                rollno: Number(rollno),
                classname,
            }),
        });

        const data = await res.json();

        console.log(data);
    }

    return (
        <div>
            <h2>Update User</h2>
            <input
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <br />

            <input
                type="number"
                placeholder="Enter Roll No"
                value={rollno}
                onChange={(e) => setRollno(e.target.value)}
            />

            <br />

            <input
                type="text"
                placeholder="Enter Class"
                value={classname}
                onChange={(e) => setClassname(e.target.value)}
            />

            <br />

            <button onClick={updateuser}>Update User</button>
        </div>
    );
}