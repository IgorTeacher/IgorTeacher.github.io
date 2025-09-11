"use client";

interface LanguageFlagsProps {
  languages: string[];
  className?: string;
}

export default function LanguageFlags({ languages, className = "" }: LanguageFlagsProps) {
  if (!languages || languages.length === 0) return null;

  const getLanguageInfo = (lang: string) => {
    switch (lang) {
      case "de":
        return { flag: "🇩🇪", name: "German" };
      case "en":
        return { flag: "🇬🇧", name: "English" };
      default:
        return { flag: "🌐", name: lang.toUpperCase() };
    }
  };

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {languages.map((lang, index) => {
        const { flag, name } = getLanguageInfo(lang);
        return (
          <span
            key={lang}
            className="text-sm"
            title={name}
            aria-label={`Learning ${name}`}
          >
            {flag}
          </span>
        );
      })}
    </div>
  );
}
