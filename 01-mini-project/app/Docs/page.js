export default function Docs() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 bg-white text-black min-h-[80vh]">
      <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-12 border-b-8 border-black pb-4">
        Documentation.
      </h1>
      
      <div className="space-y-16">
        <section>
          <h2 className="text-3xl font-bold uppercase mb-6">1.0 Specifications</h2>
          <ul className="text-lg space-y-4 border-l-4 border-black pl-6">
            <li><span className="font-bold">Cultivar:</span> Citrullus lanatus (Engineered minimal seed variant).</li>
            <li><span className="font-bold">Optimal Weight:</span> 8.5kg - 9.2kg.</li>
            <li><span className="font-bold">Brix Level:</span> 11% minimum (Guaranteed sweetness).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold uppercase mb-6">2.0 Handling & Storage</h2>
          <div className="text-lg space-y-4">
            <p>
              Maintain a continuous ambient temperature of 12°C - 15°C (55°F - 60°F) prior to consumption. 
            </p>
            <p>
              Do not refrigerate whole. Refrigeration below 10°C compromises cellular integrity and diminishes flavor profile. 
              Once cut, apply a hermetic seal to exposed surfaces and refrigerate immediately.
            </p>
          </div>
        </section>
        
        <section>
          <h2 className="text-3xl font-bold uppercase mb-6">3.0 Consumption Protocol</h2>
          <div className="text-lg space-y-4">
            <p>
              Slice geometrically. Discard the rind. Consume immediately.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
