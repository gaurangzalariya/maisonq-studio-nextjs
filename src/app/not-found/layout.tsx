import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - Page Not Found | MaisonQ Studio',
  description: "Sorry, we couldn't find the page you're looking for. It might have been removed, renamed, or doesn't exist.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFoundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 