import type { Metadata } from 'next';
import './globals.css';
import { ConsentProvider } from '@/contexts/ConsentContext';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import AnalyticsRouteTracker from '@/components/AnalyticsRouteTracker';

export const metadata: Metadata = {
  title: 'Ihar Teacher - Language Learning',
  description: 'CELTA-certified teacher offering personalized English and German lessons',
  icons: {
    icon: '/logos/favicon.png',
    shortcut: '/logos/favicon.png',
    apple: '/logos/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Consent Mode default (deny analytics until user accepts) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              // Set default consent mode for GDPR compliance
              // You can restrict to EEA only with 'region' if you like
              // Example: gtag('consent','default',{'analytics_storage':'denied', 'region':['AT','BE','BG','HR','CY','CZ','DK','EE','FI','FR','DE','GR','HU','IE','IT','LV','LT','LU','MT','NL','PL','PT','RO','SK','SI','ES','SE','IS','LI','NO']});
              gtag('consent','default', {
                ad_storage: 'denied',
                analytics_storage: 'denied',
                // Keep security/functionality allowed (cookies for basic site features)
                security_storage: 'granted',
                functionality_storage: 'granted'
              });
            `,
          }}
        />
      </head>
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
