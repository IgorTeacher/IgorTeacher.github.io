"use client";
import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-neutral-200">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg text-neutral-900">
          <span className="font-bold">Igor</span> — English & German
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#offer" className="text-neutral-600 hover:text-neutral-900 hover:underline">
            Offer
          </a>
          <a href="#pricing" className="text-neutral-600 hover:text-neutral-900 hover:underline">
            Pricing
          </a>
          <a href="#faq" className="text-neutral-600 hover:text-neutral-900 hover:underline">
            FAQ
          </a>
          <a href="/legacy-al-folio" className="text-neutral-600 hover:text-neutral-900 hover:underline">
            CV
          </a>
          <a
            href="mailto:igorteacher@icloud.com"
            className="rounded-xl px-4 py-2 bg-emerald-600 text-white font-medium hover:bg-emerald-700 transform hover:scale-105"
          >
            Book free trial
          </a>
        </nav>
        {/* Mobile menu button */}
        <button className="md:hidden p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
