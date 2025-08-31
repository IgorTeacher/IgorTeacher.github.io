export default function Offer() {
  const levels = [
    {
      level: "A1",
      title: "Complete Beginners",
      description: "Start your language journey from scratch",
      features: [
        "Essential vocabulary building",
        "Basic grammar foundations", 
        "Greetings and introductions",
        "Everyday conversation skills"
      ],
      color: "blue"
    },
    {
      level: "A2-B1", 
      title: "Intermediate",
      description: "Build confidence and expand your skills",
      features: [
        "Extended vocabulary range",
        "Complex sentence structures",
        "Reading comprehension",
        "Written communication skills"
      ],
      color: "emerald"
    },
    {
      level: "B2-C1",
      title: "Advanced",
      description: "Achieve fluency and cultural understanding", 
      features: [
        "Natural conversation flow",
        "Cultural nuances and idioms",
        "Business/academic language",
        "Exam preparation (if needed)"
      ],
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "border-blue-200 bg-blue-50",
      emerald: "border-emerald-200 bg-emerald-50 ring-2 ring-emerald-500 ring-opacity-20",
      purple: "border-purple-200 bg-purple-50"
    };
    return colors[color as keyof typeof colors];
  };

  const getBadgeClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-600 text-white",
      emerald: "bg-emerald-600 text-white",
      purple: "bg-purple-600 text-white"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="section-spacing bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 mb-6">
            Find Your Perfect Level
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Whether you're starting from scratch or looking to perfect your skills, 
            I offer personalized instruction for every proficiency level.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {levels.map((level, index) => (
            <div 
              key={index} 
              className={`p-8 rounded-2xl border-2 relative ${getColorClasses(level.color)}`}
            >
              <div className={`inline-block px-4 py-2 rounded-full text-sm font-bold mb-4 ${getBadgeClasses(level.color)}`}>
                {level.level}
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                {level.title}
              </h3>
              <p className="text-neutral-600 mb-6">
                {level.description}
              </p>
              <ul className="space-y-3">
                {level.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3 text-neutral-700">
                    <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-neutral-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-neutral-900 mb-4">
            What Makes My Teaching Different?
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-semibold text-neutral-900 mb-2">Interactive Methods</h4>
              <p className="text-sm text-neutral-600">Dynamic activities and real-life simulations</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h4 className="font-semibold text-neutral-900 mb-2">Corporate Experience</h4>
              <p className="text-sm text-neutral-600">IT industry background for professional language</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-neutral-900 mb-2">Flexible Scheduling</h4>
              <p className="text-sm text-neutral-600">Learn at your convenience, anywhere in the world</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
