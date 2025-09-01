import type { Metadata } from 'next';
import './globals.css';
import { ConsentProvider } from '@/contexts/ConsentContext';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import AnalyticsRouteTracker from '@/components/AnalyticsRouteTracker';

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
        <ConsentProvider>
          <GoogleAnalytics />
          <AnalyticsRouteTracker />
          {children}
        </ConsentProvider>
      </body>
    </html>
  );
}
