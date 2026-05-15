export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 bg-white text-black min-h-[80vh] flex flex-col justify-center">
      <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-12">
        Get in Touch.
      </h1>
      <p className="text-xl md:text-2xl font-medium mb-12">
        We do not use forms. We prefer direct communication. Reach out to us below.
      </p>
      <div className="space-y-8 text-2xl md:text-4xl font-bold uppercase tracking-wide">
        <div>
          <span className="block text-sm font-bold tracking-widest text-gray-400 mb-2">EMAIL</span>
          <a href="mailto:hello@watermelon.co" className="hover:underline underline-offset-8">
            hello@watermelon.co
          </a>
        </div>
        <div>
          <span className="block text-sm font-bold tracking-widest text-gray-400 mb-2">PHONE</span>
          <a href="tel:+1800MELON" className="hover:underline underline-offset-8">
            1-800-MELON
          </a>
        </div>
      </div>
    </div>
  );
}
