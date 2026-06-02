import { ExperienceItem } from "@/lib/data";

interface ExperienceProps {
  items: ExperienceItem[];
}

export default function Experience({ items }: ExperienceProps) {
  return (
    <section id="experience" className="py-24 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#E30613] mb-12">
          03 — Experience
        </p>

        <h2
          className="font-black uppercase leading-none text-white mb-16"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
        >
          Where I&apos;ve
          <br />
          <span className="text-[#E30613]">Worked.</span>
        </h2>

        <div className="space-y-0">
          {items.map((item, index) => (
            <div
              key={index}
              className="border-t border-gray-800 py-12 grid md:grid-cols-3 gap-8 group hover:border-[#E30613] transition-colors duration-300"
            >
              {/* Left: index + period */}
              <div className="flex flex-col justify-between">
                <span className="text-6xl font-black text-gray-800 group-hover:text-[#E30613] transition-colors duration-300 leading-none">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-xs font-bold tracking-widest uppercase text-gray-500 mt-4">
                  {item.period}
                </span>
              </div>

              {/* Middle: Role + Company */}
              <div>
                <h3 className="text-2xl md:text-3xl font-black uppercase text-white leading-tight">
                  {item.role}
                </h3>
                <p className="text-lg font-bold text-[#E30613] mt-1 uppercase tracking-wide">
                  {item.company}
                </p>
              </div>

              {/* Right: Bullets */}
              <ul className="space-y-3">
                {item.bullets.map((bullet, bi) => (
                  <li key={bi} className="flex gap-3 text-gray-400 text-sm leading-relaxed">
                    <span className="text-[#E30613] font-black shrink-0 mt-0.5">—</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Bottom border */}
          <div className="border-t border-gray-800" />
        </div>
      </div>
    </section>
  );
}
