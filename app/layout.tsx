import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import LiveChatWidget from "@/components/LiveChatWidget";
import { generateMetadata, siteConfig } from "@/lib/seo";

export const metadata: Metadata = generateMetadata({
  title: "OmniWTMS - AI-Powered UK Warehouse & Transport Management System | 48-Hour Setup",
  description: "UK's #1 Warehouse & Transport Management System. 250+ logistics firms trust OmniWTMS. 38% faster deliveries, 99.8% accuracy, zero delays. Live in 48 hours. Book free demo today!",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-R6MQ2XYE9Z"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-R6MQ2XYE9Z');
          `}
        </Script>
        <link rel="canonical" href="https://omniwtms.com" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="sElVXokhy9IvhKHxzPoQk8EeErMF5Q3XTLK4XwXIJik" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="keywords" content="warehouse management system UK, transport management system, WMS, TMS, logistics software, 3PL software, courier software, delivery management, UK logistics, warehouse software" />
        <meta name="author" content="OmniWTMS Ltd" />
        <meta name="language" content="English" />
        <meta name="geo.region" content="GB" />
        <meta name="geo.placename" content="United Kingdom" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://omniwtms.com/" />
        <meta property="og:title" content="OmniWTMS - AI-Powered UK Warehouse & Transport Management" />
        <meta property="og:description" content="UK's fastest, most advanced WMS & TMS. 250+ logistics firms trust us. 38% faster deliveries, zero delays, full automation." />
        <meta property="og:image" content="https://omniwtms.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="OmniWTMS" />
        <meta property="og:locale" content="en_GB" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://omniwtms.com/" />
        <meta name="twitter:title" content="OmniWTMS - AI-Powered UK Warehouse & Transport Management" />
        <meta name="twitter:description" content="UK's fastest, most advanced WMS & TMS. 250+ logistics firms trust us. 38% faster deliveries, zero delays, full automation." />
        <meta name="twitter:image" content="https://omniwtms.com/og-image.jpg" />
        <meta name="twitter:site" content="@omniwtms" />
        <meta name="twitter:creator" content="@omniwtms" />
        
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://omniwtms.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Solutions",
                  "item": "https://omniwtms.com/#solutions"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Pricing",
                  "item": "https://omniwtms.com/#pricing"
                }
              ]
            })
          }}
        />
        <link rel="alternate" hrefLang="en-gb" href="https://omniwtms.com" />
        <link rel="alternate" hrefLang="x-default" href="https://omniwtms.com" />
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
