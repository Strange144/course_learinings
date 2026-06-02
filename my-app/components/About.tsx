interface AboutProps {
  summary: string;
  location: string;
}

export default function About({ summary, location }: AboutProps) {
  return (
    <section id="about" className="py-24 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#E30613] mb-12">
          01 — About
        </p>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Large heading */}
          <div>
            <h2
              className="font-black uppercase leading-none text-white"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              Who I
              <br />
              <span className="text-[#E30613]">Am.</span>
            </h2>

            {/* Location badge */}
            <div className="mt-8 inline-flex items-center gap-2 border border-gray-700 px-4 py-2">
              <span className="w-2 h-2 rounded-full bg-[#E30613] inline-block" />
              <span className="text-xs font-bold tracking-widest uppercase text-gray-400">
                {location}
              </span>
            </div>
          </div>

          {/* Summary text */}
          <div>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-medium">
              {summary}
            </p>

            {/* Stat row */}
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-gray-800 pt-8">
              {[
                { value: "2+", label: "Years Experience" },
                { value: "3+", label: "Projects Built" },
                { value: "6+", label: "Tech Stacks" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-black text-[#E30613]">{stat.value}</p>
                  <p className="text-xs font-bold tracking-widest uppercase text-gray-500 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
