import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata = {
  title: 'MaisonQ Studio',
  description: 'MaisonQ Studio - Interior Design & Architecture',
  metadataBase: new URL('https://maisonq.studio'),
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: 'MaisonQ Studio',
    description: 'MaisonQ Studio - Interior Design & Architecture',
    images: [
      {
        url: '/social-image.png',
        width: 1200,
        height: 630,
        alt: 'MaisonQ Studio',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MaisonQ Studio',
    description: 'MaisonQ Studio - Interior Design & Architecture',
    images: ['/social-image.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics />
      </head>
      <body className="font-primary text-gray-900 bg-[#f8f8f8]">
        <Container>
          <Header />
          <main>{children}</main>
          <Footer />
        </Container>
      </body>
    </html>
  )
}