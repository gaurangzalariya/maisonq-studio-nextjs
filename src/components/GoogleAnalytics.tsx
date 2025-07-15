'use client';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

const GA_TRACKING_ID = "G-QK0YD3ZP3W";

// Web Vitals tracking
interface WebVitalsMetric {
  name: string;
  delta: number;
  id: string;
}

const sendToGoogleAnalytics = ({ name, delta, id }: WebVitalsMetric) => {
  try {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', name, {
        event_category: 'Web Vitals',
        event_label: id,
        value: Math.round(name === 'CLS' ? delta * 1000 : delta),
        non_interaction: true,
      });
    }
  } catch (error) {
    console.error('Error sending Web Vitals to Google Analytics:', error);
  }
};

// Page view tracking
const pageview = (url: string, title?: string) => {
  try {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', GA_TRACKING_ID, {
        page_path: url,
        page_title: title || document.title,
        page_location: window.location.href,
      });
    }
  } catch (error) {
    console.error('Error sending pageview to Google Analytics:', error);
  }
};

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Track route changes
  useEffect(() => {
    if (pathname) {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
      pageview(url);
    }
  }, [pathname, searchParams]);

  // Track Web Vitals
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB, onINP }) => {
        try {
          onCLS(sendToGoogleAnalytics);
          onINP(sendToGoogleAnalytics); // FID is deprecated, use INP instead
          onFCP(sendToGoogleAnalytics);
          onLCP(sendToGoogleAnalytics);
          onTTFB(sendToGoogleAnalytics);
        } catch (error) {
          console.error('Error initializing Web Vitals:', error);
        }
      });
    }
  }, []);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive"
        onError={(error) => {
          console.error('Error loading Google Analytics script:', error);
        }}
        onLoad={() => {
          try {
            window.dataLayer = window.dataLayer || [];
            window.gtag = function gtag(...args: unknown[]) {
              window.dataLayer.push(args);
            };
            window.gtag('js', new Date());
            window.gtag('config', GA_TRACKING_ID, {
              page_title: document.title,
              page_location: window.location.href,
              // Performance optimizations
              send_page_view: true,
              transport_type: 'beacon',
              custom_map: {
                custom_parameter_1: 'web_vitals'
              }
            });
          } catch (error) {
            console.error('Error initializing Google Analytics:', error);
          }
        }}
      />
    </>
  );
} 