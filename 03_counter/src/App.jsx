import { useState } from "react"

export default function App() {
  const [Count, setCount] = useState(0)
  const [entered, setEntered] = useState(0)
  function decreaseCount() {
    if (Count === 0) {
      setCount(0)
    } else {
      setCount(Count - 1)
    }
  }
  return (
    <>
      <h1>Counter</h1>
      <p>Counter no is {Count}</p>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <button style={{
          width: 80,
          margin: 10,
          padding: 5
        }} onClick={() => { setCount(Count + 1) }}>Increase</button>

        <button style={{
          width: 80,
          margin: 10,
          padding: 5
        }} onClick={() => decreaseCount()}>Decrease</button>

        <button style={{
          width: 80,
          margin: 10,
          padding: 5
        }} onClick={() => { setCount(0) }}>Reset</button>

      </div>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <input value={entered} onChange={(e) => { Number(setEntered(e.target.value)) }} type="text" />
        <button style={{
          width: 80,
          margin: 10,
          padding: 5
        }} onClick={() => {
          setCount(entered)
          setEntered(0)
        }}>Set to {entered}</button>
      </div>
    </>
  )
}