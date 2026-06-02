import { EducationItem, Certification } from "@/lib/data";

interface EducationProps {
  education: EducationItem[];
  certifications: Certification[];
}

export default function Education({ education, certifications }: EducationProps) {
  return (
    <section id="education" className="py-24 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#E30613] mb-12">
          05 — Education
        </p>

        <h2
          className="font-black uppercase leading-none text-white mb-16"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
        >
          How I
          <br />
          <span className="text-[#E30613]">Learned.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Degree */}
          <div>
            <p className="text-xs font-black tracking-[0.25em] uppercase text-gray-500 mb-6">
              Degree
            </p>
            {education.map((edu, i) => (
              <div key={i} className="border-l-4 border-[#E30613] pl-6">
                <h3 className="text-xl font-black uppercase text-white leading-tight">
                  {edu.degree}
                </h3>
                <p className="text-[#E30613] font-bold mt-1 text-sm uppercase tracking-wide">
                  {edu.institution}
                </p>
                <p className="text-gray-500 text-xs font-bold tracking-widest uppercase mt-2">
                  {edu.period}
                </p>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <p className="text-xs font-black tracking-[0.25em] uppercase text-gray-500 mb-6">
              Certifications
            </p>
            <div className="space-y-6">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className="border border-gray-800 p-6 hover:border-[#E30613] transition-colors duration-300"
                >
                  <p className="text-sm font-bold text-white leading-snug">{cert.title}</p>
                  <p className="text-xs font-bold tracking-widest uppercase text-[#E30613] mt-2">
                    {cert.provider}
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
