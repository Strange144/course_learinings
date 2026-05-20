import Image from "next/image";

export default async function Home() {
  const responce = await fetch("http://localhost:3000/api/timer",
    { cache: "force-cache" }
  )

  const responce2 = await fetch("http://localhost:3000/api/timer",
    { next: { revalidate: 10 } }
  )
  const data = await responce.json()
  const data2 = await responce2.json()
  return (
    <div>
      <p>default timer </p>
      <p>Timing : {data.readable}</p>
      <p>Requestid : {data.requestID}</p>
      <br></br>
      <p>default timer </p>
      <p>Timing : {data2.readable}</p>
      <p>Requestid : {data2.requestID}</p>
    </div>
  );
}
