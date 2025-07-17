'use client'

import { useEffect } from 'react';

interface CalendlyEmbedProps {
  url: string;
}

const CalendlyEmbed: React.FC<CalendlyEmbedProps> = ({
  url,
}) => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Add event listener for Calendly events
    const handleCalendlyEvent = (e: MessageEvent) => {
      if (
        e.origin === 'https://calendly.com' &&
        typeof e.data.event === 'string' &&
        e.data.event === 'calendly.event_scheduled'
      ) {
        console.log('Calendly booking completed');

        // Push to GTM dataLayer
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'calendly_booking',
        });
      }
    };

    window.addEventListener('message', handleCalendlyEvent);

    // Cleanup
    return () => {
      window.removeEventListener('message', handleCalendlyEvent);
    };
  }, []);

  return (
    <section className="calendly-wrapper w-full">
      <div className="calendly-inline-widget min-w-[320px] h-[800px]" data-url={url}></div>
    </section>
  );
};

export default CalendlyEmbed;

// Add TypeScript declaration for dataLayer
declare global {
  interface Window {
    dataLayer: any[];
  }
}