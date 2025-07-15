'use client'

import { useEffect } from 'react';

interface CalendlyEmbedProps {
  url: string;
}

const CalendlyEmbed: React.FC<CalendlyEmbedProps> = ({
  url,
}) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="calendly-wrapper w-full">
      <div className="calendly-inline-widget min-w-[320px] h-[800px]" data-url={url}></div>
    </section>
  );
};

export default CalendlyEmbed;