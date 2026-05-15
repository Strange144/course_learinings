export default function Footer() {
    return (
        <footer className="w-full bg-white border-t border-black text-black py-8 mt-auto">
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-widest">
                <p>&copy; {new Date().getFullYear()} Watermelon Inc. All rights reserved.</p>
                <div className="mt-4 md:mt-0 flex gap-6">
                    <a href="#" className="hover:underline underline-offset-4">Privacy</a>
                    <a href="#" className="hover:underline underline-offset-4">Terms</a>
                </div>
            </div>
        </footer>
    );
}