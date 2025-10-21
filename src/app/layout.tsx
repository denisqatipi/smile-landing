import type { ReactNode } from 'react';

import type { Metadata } from 'next';
import localFont from 'next/font/local';

import { ThemeProvider } from 'next-themes';

import WhatsAppButton from '@/components/WhatsAppButton';

import '@/app/globals.css';

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900'
});
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900'
});

export const metadata: Metadata = {
    metadataBase: new URL('https://smiledentalalba.com'),
    title: {
        default: 'SmileProvider - Premium Dental Tourism Albania | Save up to 70%',
        template: '%s | SmileProvider'
    },
    description:
        'Transform your smile at half the price with premium dental care in Albania. European standards, experienced multilingual dentists, Mediterranean location. 1000+ international patients trust us.',
    keywords: [
        'dental tourism Albania',
        'affordable dental implants',
        'dental veneers Albania',
        'teeth whitening Tirana',
        'dental clinic Albania',
        'European dental standards',
        'dental holiday Albania',
        'cheap dental treatments Europe',
        'dental tourism Mediterranean',
        'full mouth restoration Albania'
    ],
    authors: [{ name: 'SmileProvider' }],
    openGraph: {
        title: 'SmileProvider - Premium Dental Tourism Albania | Save up to 70%',
        description:
            'Transform your smile at half the price with premium dental care in Albania. European standards, experienced multilingual dentists, Mediterranean location.',
        url: 'https://smiledentalalba.com',
        siteName: 'SmileProvider',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'SmileProvider - Premium Dental Tourism Albania'
            }
        ],
        locale: 'en_US',
        type: 'website'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'SmileProvider - Premium Dental Tourism Albania | Save up to 70%',
        description:
            'Transform your smile at half the price with premium dental care in Albania. European standards, experienced multilingual dentists.',
        images: ['/og-image.jpg']
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1
        }
    },
    verification: {
        google: 'your-google-verification-code'
    }
};

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Dentist',
        name: 'Smile Provider Dental Clinic',
        image: 'https://smiledentalalba.com/clinic-front.jpg',
        '@id': 'https://smiledentalalba.com',
        url: 'https://smiledentalalba.com',
        telephone: '+355-69-808-2222',
        email: 'infosmileprovider@gmail.com',
        priceRange: '€€',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Rruga Martin Camaj 113',
            addressLocality: 'Tirane',
            addressCountry: 'AL'
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 41.3275,
            longitude: 19.8187
        },
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '09:00',
                closes: '18:00'
            }
        ],
        sameAs: [
            'https://www.facebook.com/smileproviderdentistiinalbania/',
            'https://www.instagram.com/smile_provider_dental_clinic/',
            'https://wa.me/355698082222'
        ],
        medicalSpecialty: ['Dentistry', 'Dental Implants', 'Cosmetic Dentistry', 'Orthodontics']
    };

    return (
        // ? https://github.com/pacocoursey/next-themes?tab=readme-ov-file#with-app
        // ? https://react.dev/reference/react-dom/client/hydrateRoot#suppressing-unavoidable-hydration-mismatch-errors
        <html suppressHydrationWarning lang='en'>
            <head>
                <script
                    type='application/ld+json'
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className={`${geistSans.variable} ${geistMono.variable} bg-white text-gray-900 antialiased`}>
                <ThemeProvider attribute='class'>{children}</ThemeProvider>
                <WhatsAppButton />
            </body>
        </html>
    );
};

export default Layout;
