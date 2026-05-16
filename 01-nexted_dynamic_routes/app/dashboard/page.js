import Link from "next/link";

export default function dashboardpage() {
    return (
        <div><h1>Dashboard page</h1>
            <Link href="/dashboard/report">Go to reports</Link>
            <Link href="/profile">Go to profile</Link>
            </div>


    )
}