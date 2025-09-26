import "./globals.css";
import type { Metadata } from "next";
import LiveChatWidget from "@/components/LiveChatWidget";
import { generateMetadata, siteConfig } from "@/lib/seo";

export const metadata: Metadata = generateMetadata({
  title: "AI-Powered UK Warehouse & Transport Management System",
  description: "OmniWTMS: UK's fastest, most advanced Warehouse & Transport Management System. 250+ logistics firms trust us. 38% faster deliveries, zero delays, full automation.",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="canonical" href="https://omniwtms.com" />
        <link rel="icon" href="/omniwtms.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="any" />
        <link rel="apple-touch-icon" sizes="180x180" href="/omniwtms.svg" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "OmniWTMS",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web Browser",
              "description": "AI-powered Warehouse & Transport Management System for UK logistics firms",
              "url": "https://omniwtms.com",
              "author": {
                "@type": "Organization",
                "name": "OmniWTMS Ltd",
                "url": "https://omniwtms.com"
              },
              "offers": {
                "@type": "Offer",
                "price": "599",
                "priceCurrency": "GBP",
                "priceValidUntil": "2024-12-31",
                "availability": "https://schema.org/InStock"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "250"
              }
            })
          }}
        />
      </head>
      <body>
        <div id="app">
          {children}
          <LiveChatWidget />
        </div>
      </body>
    </html>
  );
}
