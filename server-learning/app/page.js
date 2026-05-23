import Form from "@/components/Form";
import Image from "next/image";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-linear-to-b from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-zinc-900 text-zinc-800 dark:text-zinc-200">
      <div className="max-w-2xl w-full space-y-8 bg-white dark:bg-zinc-900/60 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-zinc-200/50 dark:border-zinc-800/50 transition-all duration-300">
        
        {/* Top Header Section */}
        <div className="flex justify-between items-center border-b border-zinc-100 dark:border-zinc-800/80 pb-6">
          <div className="space-y-1">
            <h2 className={`${plusJakartaSans.className} text-xs font-bold tracking-widest uppercase text-indigo-600 dark:text-indigo-400`}>
              Next.js Server Actions
            </h2>
            <p className={`${plusJakartaSans.className} text-xs text-zinc-400 dark:text-zinc-500`}>
              Course Learning Project
            </p>
          </div>
          <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" title="Server Active" />
        </div>

        {/* Form Container */}
        <div className="p-6 bg-zinc-50 dark:bg-zinc-900/40 rounded-2xl border border-zinc-100 dark:border-zinc-800/30">
          <Form />
        </div>

        {/* Content Section showcasing Typography */}
        <div className="space-y-6 pt-4">
          <h1 className={`${playfair.className} text-4xl md:text-5xl font-medium tracking-tight text-zinc-900 dark:text-white leading-tight`}>
            ram ram bhai sariyane ki hal chal
          </h1>
          
          <p className={`${plusJakartaSans.className} text-zinc-650 dark:text-zinc-405 leading-relaxed text-base font-light`}>
            The rain had just started when the last train pulled into the quiet station. 
            A few people hurried across the platform while the city lights reflected off the wet streets outside. 
            In a small café nearby, someone sat by the window sketching strangers as they passed, 
            turning ordinary moments into stories without anyone noticing. The air smelled of coffee 
            and damp earth, and for a brief moment, the entire evening felt calm, as if time had 
            slowed down just enough to let everyone breathe.
          </p>
        </div>
        
      </div>
    </main>
  );
}

