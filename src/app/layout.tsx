import type { Metadata } from "next";
import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Load custom Google fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Site metadata for SEO and social sharing
export const metadata: Metadata = {
  title: "AI@UNCP – Artificial Intelligence at UNC Pembroke",
  description:
    "Artificial Intelligence @ UNCP is a student-led organization at the University of North Carolina at Pembroke focused on hands-on learning, real-world projects, and creative exploration in AI.",
  keywords: [
    "AI@UNCP",
    "Artificial Intelligence UNCP",
    "UNC Pembroke AI",
    "HackUNCP",
    "UNCP Hackathon",
    "Student AI Projects",
    "UNC Pembroke",
  ],
  authors: [{ name: "AI@UNCP" }],
  creator: "AI@UNCP",
  openGraph: {
    title: "AI@UNCP – Artificial Intelligence at UNC Pembroke",
    description:
      "Explore hands-on AI learning, student projects, and collaboration at the University of North Carolina at Pembroke.",
    url: "https://aiuncp.github.io",
    siteName: "AI@UNCP",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "AI@UNCP Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI@UNCP – Artificial Intelligence at UNC Pembroke",
    description:
      "Discover how students at UNCP explore and build with AI through real projects and collaboration.",
    images: ["/favicon.png"],
    creator: "@uncp_ai",
  },
  metadataBase: new URL("https://aiuncp.github.io"),
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
