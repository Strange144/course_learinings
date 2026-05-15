import Link from "next/link";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full bg-white border-b border-black text-black">
            <div className="flex mx-auto max-w-7xl items-center justify-between py-6 px-6 md:px-12">
                <div>
                    <Link href="/" className="text-xl font-bold tracking-tighter uppercase hover:opacity-70 transition-opacity">
                        Watermelon.
                    </Link>
                </div>
                <nav className="flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
                    <Link href="/about" className="hover:underline underline-offset-4">About</Link>
                    <Link href="/Contact" className="hover:underline underline-offset-4">Contact</Link>
                    <Link href="/Docs" className="hover:underline underline-offset-4">Docs</Link>
                </nav>
            </div>
        </header>
    );
}