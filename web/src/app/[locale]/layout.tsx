import "../globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'de' },
    { locale: 'ru' },
    { locale: 'it' },
    { locale: 'pl' },
  ];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  return (
    <>
      <SiteHeader />
      {children}
      <SiteFooter />
    </>
  );
}
