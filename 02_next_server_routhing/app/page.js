"use client";
import Image from "next/image";
import Postuser from "@/app/_compoents/Postuser"
import { useEffect, useState } from "react";
export default function Home() {
  const [data, setdata] = useState([])
  const [databyid, setdatabyid] = useState(null)
  const [rollno, setrollno] = useState("")

  const [newname, setnewname] = useState("")
  const [newrollno, setnewrollno] = useState("")
  const [newclassname, setnewclassname] = useState("")


  async function fetchdata() {
    const res = await fetch("http://localhost:3000/api/users")
    const result = await res.json()
    setdata(result.data)
  }

  async function fetchdatabyid(rollno) {
    const resbyid = await fetch(`http://localhost:3000/api/getuserbyid/${rollno}`)
    const resultbyid = await resbyid.json()
    if (resultbyid.success) {
      setdatabyid(resultbyid.data)
      setnewname(resultbyid.data.name)
      setnewrollno(resultbyid.data.rollno)
      setnewclassname(resultbyid.data.classname)
    } else {
      setdatabyid(null)
    }
  }

  async function updatenewuser() {
    const res = await fetch("http://localhost:3000/api/updateuser", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: newname,
        rollno: Number(newrollno),
        classname: newclassname,
      }),
    })
    const result = await res.json()
    console.log(result)
    if (result.success) {
      // Re-fetch users and reset selection
      fetchdata()
      setdatabyid(null)
      setnewname("")
      setnewrollno("")
      setnewclassname("")
    }
  }

  async function deleteuser(rollno) {
    const res = await fetch(`http://localhost:3000/api/deleteuser/${rollno}`, {
      method: "DELETE",
    })
    const result = await res.json()
    if (result.success) {
      fetchdata()
      if (databyid && databyid.rollno === rollno) {
        setdatabyid(null)
      }
    }
  }
  // useEffect(() => {


  //   fetchdata()
  // }, [])
  return (
    <div>
      <div>
        <button onClick={fetchdata}>Get data</button>
        {data.map((dat, index) => (
          <div key={index}>
            <h2>Name: {dat.name}</h2>
            <p>Roll No: {dat.rollno}</p>
            <p>Class: {dat.classname}</p>
            <button type="button" onClick={() => deleteuser(dat.rollno)}>Delete User</button>
            <hr />
          </div>
        ))}
      </div>
      <Postuser />

      <form>
        <input
          type="text"
          placeholder="Enter Rollno"
          value={rollno}
          onChange={(e) => setrollno(e.target.value)}
        />
        <button type="button" onClick={() => { fetchdatabyid(rollno) }}>Get data by rollno</button>
      </form>
      <div>

        {databyid && (
          <div>
            <input
              type="text"
              value={newname}
              onChange={(e) => setnewname(e.target.value)}
            />
            <input
              type="number"
              placeholder="Enter Rollno"
              value={newrollno}
              onChange={(e) => setnewrollno(e.target.value)}
            />

            <input
              type="text"
              value={newclassname}
              onChange={(e) => setnewclassname(e.target.value)}
            />

            <button type="button" onClick={updatenewuser}>click to update user</button>
          </div>
        )}
      </div>


    </div>
  );
}
