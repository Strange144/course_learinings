interface ContactProps {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  location: string;
}

export default function Contact({ email, phone, linkedin, github, location }: ContactProps) {
  const links = [
    {
      label: "Email",
      value: email,
      href: `mailto:${email}`,
      external: false,
    },
    {
      label: "Phone",
      value: phone,
      href: `tel:${phone.replace(/\s/g, "")}`,
      external: false,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/ansuljoshi",
      href: linkedin,
      external: true,
    },
    {
      label: "GitHub",
      value: "github.com/Ansul-Joshi",
      href: github,
      external: true,
    },
    {
      label: "Location",
      value: location,
      href: null,
      external: false,
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#E30613] mb-12">
          06 — Contact
        </p>

        {/* Big heading */}
        <h2
          className="font-black uppercase leading-none text-black mb-16"
          style={{ fontSize: "clamp(2.5rem, 8vw, 8rem)" }}
        >
          Let&apos;s
          <br />
          <span className="text-[#E30613]">Work.</span>
        </h2>

        {/* Email as hero link */}
        <a
          href={`mailto:${email}`}
          className="block text-xl md:text-3xl font-black text-black hover:text-[#E30613] transition-colors duration-300 border-b-2 border-black hover:border-[#E30613] pb-4 mb-16 break-all"
        >
          {email}
        </a>

        {/* Contact links grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-gray-200">
          {links.map((link) => (
            <div key={link.label} className="bg-white p-6 group">
              <p className="text-xs font-black tracking-[0.25em] uppercase text-gray-400 mb-2">
                {link.label}
              </p>
              {link.href ? (
                <a
                  href={link.href}
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="text-sm font-bold text-black hover:text-[#E30613] transition-colors duration-200 break-all"
                >
                  {link.value}
                </a>
              ) : (
                <p className="text-sm font-bold text-black">{link.value}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
