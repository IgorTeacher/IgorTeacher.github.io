export default function SiteFooter() {
  return (
    <footer className="border-t border-neutral-200 mt-16">
      <div className="mx-auto max-w-6xl px-4 py-12 text-sm text-neutral-600">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Igor Ausiany. All rights reserved.</p>
          <div className="flex gap-6">
            <a 
              href="mailto:igorteacher@icloud.com" 
              className="hover:text-neutral-900 hover:underline"
            >
              Email
            </a>
            <a 
              href="https://www.linkedin.com/in/ihar-ausiany" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-900 hover:underline"
            >
              LinkedIn
            </a>
            <a 
              href="https://zrzutka.pl/en/ghr8d9" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-900 hover:underline"
            >
              Support
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-neutral-100 text-center text-xs text-neutral-500">
          <p>"Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less." — Marie Curie</p>
        </div>
      </div>
    </footer>
  );
}
