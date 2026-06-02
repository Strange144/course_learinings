interface HeroProps {
  name: string;
  tagline: string;
  quote: string;
}

export default function Hero({ name, tagline, quote }: HeroProps) {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 pb-16 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        {/* Eyebrow label */}
        <p className="text-xs font-bold tracking-[0.3em] uppercase text-gray-400 mb-6">
          Portfolio — 2025
        </p>

        {/* Massive name */}
        <h1
          className="font-black uppercase leading-none tracking-tight text-[#E30613] select-none"
          style={{ fontSize: "clamp(4rem, 15vw, 14rem)", lineHeight: 0.9 }}
        >
          {name.split(" ").map((word, i) => (
            <span key={i} className="block">
              {word}
            </span>
          ))}
        </h1>

        {/* Red accent line */}
        <div className="w-24 h-1.5 bg-[#E30613] mt-8 mb-8" />

        {/* Tagline + Quote row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-xl md:text-2xl font-bold text-black tracking-wide uppercase">
              {tagline}
            </p>
            <p className="mt-2 text-base md:text-lg text-gray-500 max-w-xl font-medium">
              {quote}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 shrink-0">
            <a
              href="#projects"
              className="inline-block bg-[#E30613] text-white text-xs font-black tracking-widest uppercase px-8 py-4 hover:bg-black transition-colors duration-300"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-block border-2 border-black text-black text-xs font-black tracking-widest uppercase px-8 py-4 hover:bg-black hover:text-white transition-colors duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex items-center gap-3">
          <div className="w-8 h-px bg-gray-300" />
          <span className="text-xs tracking-widest uppercase text-gray-400">
            Scroll to explore
          </span>
        </div>
      </div>
    </section>
  );
}
