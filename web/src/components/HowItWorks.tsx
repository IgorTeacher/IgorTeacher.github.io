export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Free Consultation",
      description: "We discuss your goals, assess your current level, and create a personalized learning plan.",
      icon: "💬"
    },
    {
      step: "02", 
      title: "Tailored Lessons",
      description: "Engage in interactive lessons designed for your learning style, pace, and objectives.",
      icon: "🎯"
    },
    {
      step: "03",
      title: "Track Progress",
      description: "Regular assessments and feedback help you see improvement and stay motivated.",
      icon: "📈"
    },
    {
      step: "04",
      title: "Achieve Fluency",
      description: "Reach your language goals through consistent practice and expert guidance.",
      icon: "🎉"
    }
  ];

  return (
    <section id="offer" className="section-spacing bg-gradient-to-b from-emerald-50 to-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            A proven approach that has helped students achieve fluency in English and German, 
            from complete beginners to advanced learners.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {step.step}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                {step.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="mailto:igorteacher@icloud.com"
            className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-emerald-700 transform hover:scale-105"
          >
            Book Your Free Consultation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
