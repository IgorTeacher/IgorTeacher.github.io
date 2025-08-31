import Image from "next/image";

export default function About() {
  return (
    <section className="section-spacing bg-gradient-to-b from-neutral-50 to-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-neutral-900 mb-6">
              Meet Your Teacher
            </h2>
            <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
              <p>
                Hi, I'm <strong className="text-neutral-900">Igor Ausiany</strong>, and I'm passionate about 
                transforming education through innovative and engaging methods. I believe learning 
                should be inspiring, not intimidating.
              </p>
              <p>
                With multiple certifications including <strong className="text-neutral-900">TESOL</strong>, 
                <strong className="text-neutral-900"> TKT</strong>, and an ongoing 
                <strong className="text-neutral-900"> CELTA</strong>, plus an M.Sc. in Philosophy, 
                I bring both academic rigor and practical experience to every lesson.
              </p>
              <p>
                Currently, I work with over <strong className="text-neutral-900">10 regular students</strong> from 
                around the world, helping them achieve their language goals through personalized, 
                engaging online instruction.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="bg-emerald-50 p-4 rounded-xl">
                <div className="text-2xl font-bold text-emerald-600 mb-1">4+</div>
                <div className="text-sm text-neutral-600">Years Teaching</div>
              </div>
              <div className="bg-emerald-50 p-4 rounded-xl">
                <div className="text-2xl font-bold text-emerald-600 mb-1">500+</div>
                <div className="text-sm text-neutral-600">Lessons Delivered</div>
              </div>
            </div>
          </div>
          
          <div className="text-center lg:text-right">
            <Image
              src="/igor-teaching.png"
              alt="Igor teaching online"
              width={500}
              height={400}
              className="rounded-2xl shadow-xl mx-auto lg:mx-0"
            />
            
            <div className="mt-8 bg-white p-6 rounded-xl shadow-lg border max-w-md mx-auto lg:mx-0">
              <h3 className="font-semibold text-neutral-900 mb-4">My Teaching Philosophy</h3>
              <blockquote className="text-neutral-600 italic">
                "I seek the most effective ways to inspire and teach students, 
                making challenging subjects like grammar come alive through 
                innovative methods."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
