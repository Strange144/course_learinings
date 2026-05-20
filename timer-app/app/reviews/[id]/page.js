import { notFound } from "next/navigation";

export default async function Mypage({ params }) {
    const { id } = await params;

    if (parseInt(id) > 10) {
        return notFound()

    }
    return (
        <div>reviews {id}</div>
    )
}