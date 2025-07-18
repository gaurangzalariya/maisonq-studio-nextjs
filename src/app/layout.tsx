import "./globals.css";
import { Inter } from 'next/font/google';
import dynamic from 'next/dynamic';

import Header from "@/components/Header";
import Container from "@/components/Container";
import { GoogleTagManagerScript, GoogleTagManagerNoScript } from "@/components/GoogleTagManager";

// Lazy load non-critical components
const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <div className="h-20" /> // Placeholder to prevent layout shift
});

// Initialize font with optimal settings
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
  fallback: ['system-ui', 'arial'],
});

export const metadata = {
  title: "MaisonQ Studio",
  description: "MaisonQ Studio - Interior Design & Architecture",
  metadataBase: new URL('https://maisonq.studio'),
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "MaisonQ Studio",
    description: "MaisonQ Studio - Interior Design & Architecture",
    images: [
      {
        url: '/social-image.png',
        width: 1200,
        height: 630,
        alt: "MaisonQ Studio",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "MaisonQ Studio",
    description: "MaisonQ Studio - Interior Design & Architecture",
    images: ['/social-image.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const isDevelopment = process.env.NODE_ENV === 'development';

  return (
    <html lang="en" className={`${inter.variable} ${inter.className}`}>
      <head>
        {!isDevelopment && <GoogleTagManagerScript gtmId="GTM-55GQ7JZL" />}
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://use.typekit.net" />
        {!isDevelopment && <link rel="preconnect" href="https://www.googletagmanager.com" />}
        
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
        
        {/* Resource hints */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://use.typekit.net" />
        
        {/* Adobe Fonts - optimized loading */}
        <link
          rel="preload"
          href="https://use.typekit.net/mct8xox.css"
          as="style"
        />
      </head>
      <body className="font-primary text-gray-900 bg-[#f8f8f8] antialiased">
        {!isDevelopment && <GoogleTagManagerNoScript gtmId="GTM-55GQ7JZL" />}
        <Container>
          <Header />
          <main>{children}</main>
          <Footer />
        </Container>
      </body>
    </html>
  )
}