'use client';

import dynamic from 'next/dynamic';

const GoogleAnalytics = dynamic(() => import("@/components/GoogleAnalytics"), {
  ssr: false
});

const ServiceWorker = dynamic(() => import("@/components/ServiceWorker"), {
  ssr: false
});

export default function ClientProviders() {
  return (
    <>
      <GoogleAnalytics />
      <ServiceWorker />
    </>
  );
} 