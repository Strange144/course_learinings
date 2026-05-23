import Contectlist from "@/components/Contectlist";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function constactlist() {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
            <div>
                <Link href={"/"}>
                    <Button variant="outline">Go Back</Button>
                </Link>
            </div>
            <Contectlist />
        </div>
    )
}