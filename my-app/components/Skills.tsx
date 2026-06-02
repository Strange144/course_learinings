import { SkillCategory } from "@/lib/data";

interface SkillsProps {
  skills: SkillCategory[];
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#E30613] mb-12">
          02 — Skills
        </p>

        <h2
          className="font-black uppercase leading-none text-black mb-16"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
        >
          What I
          <br />
          <span className="text-[#E30613]">Know.</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
          {skills.map((group) => (
            <div
              key={group.category}
              className="bg-white p-8 hover:bg-gray-50 transition-colors duration-200 group"
            >
              {/* Category name */}
              <p className="text-xs font-black tracking-[0.25em] uppercase text-[#E30613] mb-4 group-hover:text-black transition-colors duration-200">
                {group.category}
              </p>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs font-bold tracking-wide uppercase bg-black text-white px-3 py-1.5"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
