export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs font-black tracking-widest uppercase text-gray-500">
          © {new Date().getFullYear()} Ansul Joshi
        </p>
        <p className="text-xs font-bold tracking-widest uppercase text-gray-600">
          Full-Stack Web Developer
        </p>
        <div className="flex gap-6">
          <a
            href="https://linkedin.com/in/ansuljoshi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold tracking-widest uppercase text-gray-500 hover:text-[#E30613] transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Ansul-Joshi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold tracking-widest uppercase text-gray-500 hover:text-[#E30613] transition-colors duration-200"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
