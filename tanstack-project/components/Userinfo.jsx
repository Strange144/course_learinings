"use client"
import {useQuery} from "@tanstack/react-query"
async function getinfo(){
    const responce = await fetch("/api/users")
    return responce.json()
}
export default function Userinfo(){
    const {data} = useQuery({
        queryKey:["users"],
        queryFn:getinfo
    })
    return(
       <div>
            {data?.map((dat) => (
                <div key={dat.id}>
                    <p>{dat.name}</p>
                    <p>{dat.email}</p>
                </div>
            ))}
        </div>
    )
}