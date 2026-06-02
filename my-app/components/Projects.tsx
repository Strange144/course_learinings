import { Project } from "@/lib/data";

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#E30613] mb-12">
          04 — Projects
        </p>

        <h2
          className="font-black uppercase leading-none text-black mb-16"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
        >
          What I&apos;ve
          <br />
          <span className="text-[#E30613]">Built.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className="bg-white p-8 flex flex-col group hover:bg-[#E30613] transition-colors duration-300 cursor-default"
            >
              {/* Project number */}
              <span className="text-6xl font-black text-gray-100 group-hover:text-white/20 leading-none transition-colors duration-300">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Project name */}
              <h3 className="text-2xl font-black uppercase text-black group-hover:text-white mt-4 leading-tight transition-colors duration-300">
                {project.name}
              </h3>

              {/* Description */}
              <p className="mt-4 text-sm text-gray-500 group-hover:text-white/80 leading-relaxed flex-1 transition-colors duration-300">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-bold tracking-wide uppercase border border-gray-200 group-hover:border-white/30 text-gray-600 group-hover:text-white px-2.5 py-1 transition-colors duration-300"
                  >
                    {t}
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
