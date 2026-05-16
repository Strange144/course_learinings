
import Image from "next/image";

export default async function Home() {
  const res = await fetch("https://api.github.com/users/Strange144")
  const data = await res.json()
  return (
    <p>{JSON.stringify(data)}</p>
  );
}
