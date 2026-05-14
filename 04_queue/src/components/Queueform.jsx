import { useState } from "react"

export default function Queueform({ addingfunction }) {
    const [name, setName] = useState("")
    const [service, setService] = useState("")
    function submithandler(name, service) {
        addingfunction({ name, service })
        setName("")
        setService("")
    }
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            gap: 20
        }}>
            <p>Insert Details</p>
            <input placeholder="enter your name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <select value={service} onChange={(e) => setService(e.target.value)} >
                <option>select</option>
                <option>Consulting</option>
                <option>planning</option>
                <option>testing</option>
            </select>
            <button onClick={(e) => {
                e.preventDefault()
                submithandler(name, service)
            }}>Submit</button>
        </div>
    )
}