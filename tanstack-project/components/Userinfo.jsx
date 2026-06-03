"use client"
import { useState } from "react"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"

async function getinfo(){
    const responce = await fetch("/api/users")
    return responce.json()
}

async function addUser(newUser){
    const response = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
    })
    return response.json()
}

export default function Userinfo(){
    const queryClient = useQueryClient()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const { data } = useQuery({
        queryKey: ["users"],
        queryFn: getinfo,
    })

    const mutation = useMutation({
        mutationFn: addUser,
        onSuccess: () => {
            // refetch the users list after adding
            queryClient.invalidateQueries({ queryKey: ["users"] })
            setName("")
            setEmail("")
        },
    })

    function handleSubmit(e){
        e.preventDefault()
        if (!name || !email) return
        mutation.mutate({ name, email })
    }

    return (
        <div>
            <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" disabled={mutation.isPending}>
                    {mutation.isPending ? "Adding..." : "Add User"}
                </button>
                {mutation.isError && <p>Error adding user</p>}
            </form>

            {data?.map((dat) => (
                <div key={dat.id}>
                    <p>{dat.name}</p>
                    <p>{dat.email}</p>
                </div>
            ))}
        </div>
    )
}