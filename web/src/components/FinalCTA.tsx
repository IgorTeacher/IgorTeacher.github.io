import { content, ctas } from "@/lib/site-data";

export default function FinalCTA() {
  return (
    <section className="mt-24 bg-igor-blue py-20">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-xl font-semibold text-white mb-6">
          {content.finalCTA.heading}
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          {content.finalCTA.subheading}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a 
            href={ctas.primary.href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-igor-blue px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-neutral-50 transition-colors transform hover:scale-105"
          >
            {ctas.primary.text}
          </a>
          <a 
            href={ctas.support.href}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-white hover:text-igor-blue transition-colors"
          >
            {ctas.support.text}
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6 text-center text-blue-100">
          {content.finalCTA.highlights.map((highlight, index) => (
            <div key={index}>
              <div className="text-2xl font-bold text-white mb-2">{highlight.value}</div>
              <div className="text-sm">{highlight.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t border-blue-500">
          <p className="text-blue-100 text-sm">
            ✨ No commitment required • Available worldwide via Zoom • {content.finalCTA.noObligationText}
          </p>
        </div>
      </div>
    </section>
  );
}
