import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://omerfarukyilmaz.com'),

  title: {
    default: 'Ömer Faruk Yılmaz | Full Stack Developer (.NET & React)',
    template: '%s | Ömer Faruk Yılmaz',
  },

  description:
    'Ömer Faruk Yılmaz kişisel web sitesi. Full Stack Developer, .NET, C#, MSSQL, React, Next.js projeleri, deneyimleri ve GitHub çalışmaları.',

  keywords: [
    'Ömer Faruk Yılmaz',
    'Omer Faruk Yilmaz',
    'Full Stack Developer',
    '.NET Developer',
    'C# Developer',
    'React Developer',
    'Next.js Portfolio',
  ],

  authors: [{ name: 'Ömer Faruk Yılmaz' }],
  creator: 'Ömer Faruk Yılmaz',
  publisher: 'Ömer Faruk Yılmaz',

  alternates: {
    canonical: 'https://omerfarukyilmaz.com',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },

  openGraph: {
    title: 'Ömer Faruk Yılmaz | Full Stack Developer',
    description:
      'Full Stack Developer (.NET, C#, MSSQL, React, Next.js). Projeler, deneyimler ve GitHub çalışmaları.',
    url: 'https://omerfarukyilmaz.com',
    siteName: 'Ömer Faruk Yılmaz',
    locale: 'tr_TR',
    type: 'profile',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Ömer Faruk Yılmaz | Full Stack Developer',
    description:
      'Full Stack Developer (.NET, React, Next.js). Kişisel portfolio sitesi.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <head>
        {/* Structured Data – Google beni “KİŞİ” olarak tanısın */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Ömer Faruk Yılmaz',
              url: 'https://omerfarukyilmaz.com',
              jobTitle: 'Full Stack Developer',
              sameAs: [
                'https://github.com/omerr0542',
                'https://linkedin.com/in/omerr589/',
              ],
            }),
          }}
        />
      </head>

      <body
        className={`${inter.variable} font-sans antialiased bg-white text-black`}
      >
        {children}
      </body>
    </html>
  )
}
