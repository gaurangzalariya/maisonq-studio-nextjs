'use client';

import { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';

interface SanitizedHtmlProps {
  html: string;
  className?: string;
}

export default function SanitizedHtml({ html, className }: SanitizedHtmlProps) {
  const [sanitizedHtml, setSanitizedHtml] = useState(html);

  useEffect(() => {
    // Only sanitize in the browser
    if (typeof window !== 'undefined') {
      setSanitizedHtml(DOMPurify.sanitize(html));
    }
  }, [html]);

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{
        __html: sanitizedHtml
      }}
    />
  );
} 