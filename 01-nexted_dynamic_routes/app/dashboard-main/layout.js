import Link from "next/link";

export default function mainlayout({ feed, message }) {
    return (


        <div>
            <Link href={"/dashboard-main/feed"}>Go to feed</Link>
            <Link href={"/dashboard-main/message"}>Go to message</Link>
            {feed} {message}
        </div>
    )
}