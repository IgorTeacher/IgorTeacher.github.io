import Image from "next/image";

export default function Hero() {
  return (
    <section className="section-spacing bg-gradient-to-b from-neutral-50 to-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
              Master <span className="text-emerald-600">English</span> & <span className="text-emerald-600">German</span> with a Certified Expert
            </h1>
            <p className="text-xl text-neutral-600 mb-8 leading-relaxed max-w-lg">
              Join 10+ students achieving fluency through personalized online lessons. From A1 to C1 levels, tailored to your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="mailto:igorteacher@icloud.com"
                className="bg-emerald-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-emerald-700 text-center transform hover:scale-105"
              >
                Start Your Free Trial
              </a>
              <a 
                href="#offer"
                className="border-2 border-neutral-300 text-neutral-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-emerald-600 hover:text-emerald-600 text-center"
              >
                See How It Works
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2 text-center">
            <div className="relative">
              <Image
                src="/igor-profile.jpeg"
                alt="Igor Ausiany - Professional Language Teacher"
                width={450}
                height={450}
                className="rounded-2xl shadow-2xl mx-auto"
                priority
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg border">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">Available for lessons</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
