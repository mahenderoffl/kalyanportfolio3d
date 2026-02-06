import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Primary font - Clean and professional
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Accent font - Tech-forward and distinctive
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

// Code font - Technical sections
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mahender Banoth | AI Systems Architect & Founder @ WaveSeed",
  description:
    "Founder @ WaveSeed Co. Building AI-powered automation systems. Full-Stack Developer, Data Scientist, and BBA student at IIT Patna. 2+ Startups Founded, 10+ Products Shipped.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  keywords: [
    "Mahender Banoth",
    "WaveSeed",
    "WaveSeed Co",
    "AI Developer",
    "Full Stack Developer",
    "AI Systems",
    "Automation",
    "LangChain",
    "Next.js",
    "React",
    "Python",
    "Machine Learning",
    "IIT Patna",
    "Startup Founder",
    "Tech Entrepreneur",
    "Product Architect",
  ],
  authors: [{ name: "Mahender Banoth", url: "https://waveseed.app" }],
  creator: "Mahender Banoth",
  publisher: "WaveSeed Co",
  metadataBase: new URL("https://waveseed.app"),
  alternates: {
    canonical: "https://waveseed.app",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://waveseed.app",
    siteName: "Mahender Banoth - WaveSeed",
    title: "Mahender Banoth | AI Systems Architect & Founder @ WaveSeed",
    description:
      "Founder @ WaveSeed Co. Building AI-powered automation systems. Full-Stack Developer, Data Scientist, and BBA student at IIT Patna.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mahender Banoth - AI Systems Architect & Founder @ WaveSeed",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahender Banoth | AI Systems Architect & Founder @ WaveSeed",
    description:
      "Founder @ WaveSeed Co. Building AI-powered automation systems.",
    images: ["/og-image.png"],
    site: "@waveseedco",
    creator: "@waveseedco",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verification_token",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-primary antialiased`}
        style={{ fontFamily: "var(--font-inter)" }}
        suppressHydrationWarning
      >
        {/* Background effects container */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-[var(--bg-primary)]" />
        </div>

        {/* Main content */}
        <main className="relative">{children}</main>
      </body>
    </html>
  );
}
