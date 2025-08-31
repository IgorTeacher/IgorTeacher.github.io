"use client";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What levels do you teach?",
      answer: "I teach all levels from complete beginners (A1) to advanced learners (C1). Each lesson is tailored to your current proficiency and learning goals."
    },
    {
      question: "How are lessons conducted?",
      answer: "All lessons are conducted online via Zoom, making it convenient for students worldwide. You'll receive a meeting link before each session."
    },
    {
      question: "What languages do you teach?",
      answer: "I specialize in teaching English and German. I also speak some French, which helps when working with French-speaking students."
    },
    {
      question: "How long are the lessons?",
      answer: "Regular lessons are 60 minutes long. The free trial lesson is 20 minutes, perfect for getting to know my teaching style and assessing your needs."
    },
    {
      question: "Do you provide learning materials?",
      answer: "Yes! I provide all necessary learning materials tailored to your level and goals. This includes worksheets, exercises, and recommended resources."
    },
    {
      question: "Can you help with exam preparation?",
      answer: "Absolutely! I offer specialized preparation for various English and German proficiency exams, drawing from my extensive certification background."
    },
    {
      question: "What makes your teaching different?",
      answer: "I focus on making challenging subjects like grammar engaging through innovative methods. My corporate IT background also helps with business language needs."
    },
    {
      question: "How flexible is the scheduling?",
      answer: "Very flexible! I work with students across different time zones and can accommodate various schedules. We'll find times that work for both of us."
    }
  ];

  return (
    <section id="faq" className="section-spacing bg-neutral-50">
      <div className="mx-auto max-w-4xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-neutral-600">
            Everything you need to know about learning with Igor Teacher School
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-neutral-900">{faq.question}</span>
                <svg 
                  className={`w-5 h-5 text-neutral-500 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-neutral-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-neutral-600 mb-4">
            Still have questions?
          </p>
          <a 
            href="mailto:igorteacher@icloud.com"
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold"
          >
            Contact me directly
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
