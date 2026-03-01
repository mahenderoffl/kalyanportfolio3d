import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bodakalyan.campusbuzz.in"),
  title: "Boda Kalyan Singh | AI Developer & Full-Stack Engineer",
  description:
    "Software Engineer (AI Developer) @ Xenspire Group. MTech from IIT Kharagpur (Dept Topper). Founder of CampusBuzz. 50+ AI Agents Built. Full-Stack Developer specializing in React, FastAPI, LangChain, and Generative AI.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  keywords: [
    "Boda Kalyan Singh",
    "AI Developer",
    "Software Engineer",
    "Full Stack Developer",
    "IIT Kharagpur",
    "Xenspire Group",
    "CampusBuzz",
    "LangChain",
    "React",
    "FastAPI",
    "Python",
    "Machine Learning",
    "Generative AI",
    "AI Agents",
    "RAG Pipelines",
  ],
  authors: [{ name: "Boda Kalyan Singh" }],
  creator: "Boda Kalyan Singh",
  publisher: "Boda Kalyan Singh",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Boda Kalyan Singh - Portfolio",
    title: "Boda Kalyan Singh | AI Developer & Full-Stack Engineer",
    description:
      "Software Engineer (AI Developer) @ Xenspire Group. MTech from IIT Kharagpur (Dept Topper). 50+ AI Agents Built.",
    images: [
      {
        url: "/kalyan-profile.png",
        width: 1200,
        height: 630,
        alt: "Boda Kalyan Singh - AI Developer & Full-Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Boda Kalyan Singh | AI Developer & Full-Stack Engineer",
    description:
      "Software Engineer (AI Developer) @ Xenspire Group. MTech from IIT Kharagpur.",
    images: ["/kalyan-profile.png"],
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
      <head>
        {/* Advanced SEO & Analytics Integrations */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-BODAKALYAN"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BODAKALYAN', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-primary antialiased`}
        style={{ fontFamily: "var(--font-inter)" }}
        suppressHydrationWarning
      >
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-[var(--bg-primary)]" />
        </div>
        <main className="relative">{children}</main>
      </body>
    </html>
  );
}
