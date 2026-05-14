import Displayqueue from "./components/Displayqueue"
import Queueform from "./components/Queueform"
import { useState } from "react"
export default function App() {
  const [Queue, setQueue] = useState([])
  const addToQueue = (nameandservice) => {
    setQueue([
      ...Queue,
      {
        ...nameandservice,
        id: crypto.randomUUID(), // unique id
        status: "pending"
      }
    ]);
    console.log(Queue)
  }
  const updateStatus = (id, newStatus) => {
    setQueue(
      Queue.map((customer) =>
        customer.id === id
          ? { ...customer, status: newStatus }
          : customer
      )
    );
  };
  const removeFromQueue = (id) => {
    setQueue(
      Queue.filter((customer) => customer.id !== id)
    );
  };
  return (
    <>
      <h1>Queue</h1>
      <div style={{
        display: "flex", gap: 20
      }}>
        <Queueform addingfunction={addToQueue} />
        <Displayqueue details={Queue} removeFromQueue={removeFromQueue} updateStatus={updateStatus} />
      </div>
    </>
  )
}