import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

// Load fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://webwalebhai.vercel.app"),
  title: {
    default: "WebWalebhai | Build Modern Websites",
    template: "%s | WebWalebhai",
  },
  description: "WebWalebhai offers high-quality web development services using Next.js, React, and modern technologies to bring your ideas to life.",
  keywords: [
    "Web development",
    "Next.js",
    "React",
    "psgpraveen",
    "JavaScript",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "Tailwind CSS",
    "Web Developer India",
    "WebWalebhai",
  ],
  applicationName: "WebWalebhai",
  authors: [{ name: "WebWalebhai Team", url: "https://webwalebhai.vercel.app" }],
  creator: "WebWalebhai",
  publisher: "WebWalebhai",
  openGraph: {
    type: "website",
    url: "https://webwalebhai.vercel.app",
    title: "WebWalebhai | Build Modern Websites",
    description: "Professional websites built with Next.js, React, Tailwind CSS, and more. Bring your ideas to life with WebWalebhai!",
    siteName: "WebWalebhai",
    images: [
      {
        url: "https://webwalebhai.vercel.app/WebWaleBhai.png",
        width: 1200,
        height: 630,
        alt: "WebWalebhai - Build Modern Websites",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "WebWalebhai | Build Modern Websites",
    description: "Let's build your next big idea with WebWalebhai's expert web solutions!",
    site: "@WebWalebhai",
    creator: "@WebWalebhai",
    images: ["https://webwalebhai.vercel.app/WebWaleBhai.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

// Viewport for mobile responsiveness
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

// Theme Color
export const themeColor = "#ffffff";

// Main Layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
        <Toaster position="top-right" toastOptions={{ duration: 4000 }} />
      </body>
    </html>
  );
}
