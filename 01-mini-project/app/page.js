import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center bg-white text-black">
      <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase mb-6">
        Watermelon.
      </h1>
      <p className="text-lg md:text-2xl font-medium tracking-wide max-w-2xl mb-12">
        Pure. Refreshing. Essential. We cultivate the finest watermelons with an absolute obsession for quality. No compromises.
      </p>
      <div className="flex gap-4">
        <Link 
          href="/Contact" 
          className="px-8 py-4 bg-black text-white text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors"
        >
          Order Now
        </Link>
        <Link 
          href="/about" 
          className="px-8 py-4 bg-white text-black border-2 border-black text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors"
        >
          Our Story
        </Link>
      </div>
    </div>
  );
}
