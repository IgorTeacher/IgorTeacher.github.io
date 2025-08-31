export default function FinalCTA() {
  return (
    <section className="mt-24 bg-igor-blue py-20">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-xl font-semibold text-white mb-6">
          Ready to Start Your Language Journey?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join students worldwide who are achieving their language goals through 
          personalized, engaging instruction. Your journey to fluency starts with 
          one conversation.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a 
            href="mailto:igorteacher@icloud.com"
            className="bg-white text-igor-blue px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-neutral-50 transition-colors transform hover:scale-105"
          >
            Book free trial
          </a>
          <a 
            href="https://zrzutka.pl/en/ghr8d9"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-white hover:text-igor-blue transition-colors"
          >
            Support My Teaching
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6 text-center text-blue-100">
          <div>
            <div className="text-2xl font-bold text-white mb-2">Free</div>
            <div className="text-sm">Trial Lesson</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white mb-2">Flexible</div>
            <div className="text-sm">Scheduling</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white mb-2">Certified</div>
            <div className="text-sm">Expert Teacher</div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-blue-500">
          <p className="text-blue-100 text-sm">
            ✨ No commitment required • Available worldwide via Zoom • Satisfaction guaranteed
          </p>
        </div>
      </div>
    </section>
  );
}
