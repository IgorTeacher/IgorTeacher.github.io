export default function SocialProof() {
  const credentials = [
    { name: "TESOL Certified", org: "Arizona State University", year: "2021" },
    { name: "TKT Modules 1-3", org: "University of Cambridge", year: "2020" },
    { name: "CELTA", org: "University of Cambridge", year: "Ongoing" },
    { name: "M.Sc. Philosophy", org: "Saint-Petersburg State University", year: "2021" }
  ];

  return (
    <section className="section-spacing bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">
            Trusted by Students Worldwide
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            With multiple certifications and years of experience, I help students achieve their language goals effectively.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {credentials.map((credential, index) => (
            <div key={index} className="text-center p-6 bg-neutral-50 rounded-xl border border-neutral-200">
              <div className="text-emerald-600 font-semibold text-sm mb-2">{credential.year}</div>
              <h3 className="font-semibold text-neutral-900 mb-2">{credential.name}</h3>
              <p className="text-sm text-neutral-600">{credential.org}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-emerald-600 mb-2">10+</div>
            <div className="text-neutral-600">Regular Students</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-emerald-600 mb-2">A1-C1</div>
            <div className="text-neutral-600">All Levels Covered</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-emerald-600 mb-2">100%</div>
            <div className="text-neutral-600">Online via Zoom</div>
          </div>
        </div>
      </div>
    </section>
  );
}
