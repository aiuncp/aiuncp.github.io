import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Load Google fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Site metadata for SEO and favicon
export const metadata: Metadata = {
  title: "AI@UNCP – Artificial Intelligence at UNC Pembroke",
  description:
    "Artificial Intelligence @ UNCP is a student-led organization at the University of North Carolina at Pembroke focused on hands-on learning, real-world projects, and creative exploration in AI.",
  metadataBase: new URL("https://aiuncp.github.io"),
  icons: {
    icon: "https://aiuncp.github.io/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link
          rel="icon"
          type="image/png"
          href="https://aiuncp.github.io/favicon.png"
        />
<<<<<<< HEAD
        {/* Google Search Console site verification */}
        <meta
          name="google-site-verification"
          content="Urk5X0IKPxzTGKlDZTJnMg-ZFG-3eHNP1rknY8QnfrU"
        />
      </head>
=======
        <meta name="google-site-verification" content="Urk5X0IKPxzTGKlDZTJnMg-ZFG-3eHNP1rknY8QnfrU" />
      </Head>
>>>>>>> f1c0e6a53e1eaa56767f32d88a3a192710107a0b
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
