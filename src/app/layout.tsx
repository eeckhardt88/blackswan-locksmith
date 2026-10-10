import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Blackswan Locksmith Co. | 24/7 Mobile Locksmith Tucson, AZ',
  description:
    'Need a locksmith in Tucson? Master technician John Fiore provides non-destructive car lockouts, home rekeying, and safe opening across Catalina Foothills, Oro Valley & Pima County.',
  keywords: [
    'Locksmith Tucson AZ',
    'Emergency car lockout Tucson',
    'Catalina Foothills locksmith',
    'Oro Valley locksmith',
    'Safe opening Tucson',
    'Blackswan Locksmith Co',
    'John Fiore locksmith',
  ],
  authors: [{ name: 'John Fiore' }],
  creator: 'Blackswan Locksmith Co.',
  openGraph: {
    title: 'Blackswan Locksmith Co. | Tucson Master Locksmith',
    description:
      'Direct-to-technician emergency mobile locksmith in Tucson, AZ. Upfront flat rates, damage-free vehicle entry & safe diagnostics.',
    url: 'https://blackswanlocksmith.com',
    siteName: 'Blackswan Locksmith Co.',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'geo.region': 'US-AZ',
    'geo.placename': 'Tucson',
    'geo.position': '32.2359;-110.8770',
    'ICBM': '32.2359, -110.8770',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Locksmith',
    name: 'Blackswan Locksmith Co.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Catalinas_5750.jpg',
    '@id': 'https://blackswanlocksmith.com',
    url: 'https://blackswanlocksmith.com',
    telephone: '+1-520-312-1534',
    priceRange: '$$',
    founder: {
      '@type': 'Person',
      name: 'John Fiore',
      jobTitle: 'Master Locksmith',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '5421 E Fairmount Pl',
      addressLocality: 'Tucson',
      addressRegion: 'AZ',
      postalCode: '85712',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 32.2359,
      longitude: -110.877,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Tucson' },
      { '@type': 'AdministrativeArea', name: 'Catalina Foothills' },
      { '@type': 'AdministrativeArea', name: 'Oro Valley' },
      { '@type': 'AdministrativeArea', name: 'Midtown Tucson' },
      { '@type': 'AdministrativeArea', name: 'Downtown Tucson' },
      { '@type': 'AdministrativeArea', name: 'Marana' },
      { '@type': 'AdministrativeArea', name: 'Tanque Verde' },
      { '@type': 'AdministrativeArea', name: 'Vail' },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '150',
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}