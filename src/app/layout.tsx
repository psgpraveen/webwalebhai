import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WebWalebhai | Build Modern Websites",
  description: "WebWalebhai offers professional web development services specializing in Next.js, React, and Tailwind. Build your modern website with us today!",
  applicationName: "WebWalebhai",
  authors: [{ name: "WebWalebhai Team", url: "https://webwalebhai.vercel.app/" }],
  generator: "Next.js",
  keywords: [
    "Web development",
    "Next.js",
    "React",
    "JavaScript",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer India",
    "WebWalebhai",
    "Tailwind CSS",
    "Full Stack Developer",
  ],
  creator: "WebWalebhai",
  publisher: "WebWalebhai",
  themeColor: "#ffffff",
  openGraph: {
    title: "WebWalebhai | Build Modern Websites",
    description: "WebWalebhai builds stunning websites and powerful apps for ambitious brands. Share your idea and get a custom proposal from our expert team.",
    url: "https://webwalebhai.vercel.app/",
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
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WebWalebhai | Build Modern Websites",
    description: "Professional websites using the latest technologies. Let's build your next idea together!",
    site: "@WebWalebhai",
    creator: "@WebWalebhai",
    images: ["https://webwalebhai.vercel.app/WebWaleBhai.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning>
        {children}
        <Toaster position="top-right" toastOptions={{ duration: 4000 }} />
      </body>
    </html>
  );
}
