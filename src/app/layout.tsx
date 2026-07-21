import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const siteUrl = "https://aiuncp.github.io/";
const title = "AI@UNCP";
const description =
  "AI@UNCP, a student-led organization at UNC Pembroke centered on hands-on learning, practical projects, and exploration in artificial intelligence.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/aiuncp-logo.png",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: title,
    title,
    description,
    images: [
      {
        url: "/aiuncp-logo.png",
        width: 1080,
        height: 1080,
        alt: "AI@UNCP logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: ["/aiuncp-logo.png"],
  },
  verification: {
    google: "Urk5X0IKPxzTGKlDZTJnMg-ZFG-3eHNP1rknY8QnfrU",
  },
};

const websiteData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: title,
  url: siteUrl,
  description,
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href={siteUrl} />
      </head>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
        />
      </body>
    </html>
  );
}
