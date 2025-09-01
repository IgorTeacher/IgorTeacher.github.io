import type { Metadata } from 'next';
import './globals.css';
import GoogleAnalytics from '@/components/GoogleAnalytics';

export const metadata: Metadata = {
  title: 'Ihar Teacher - Language Learning',
  description: 'CELTA-certified teacher offering personalized English and German lessons',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
