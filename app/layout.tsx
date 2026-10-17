import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DevToolsBlocker from "../components/DevToolsBlocker";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-cairo",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://mansoura-iota.vercel.app"));

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "مدرسة منصورة للتكوين والتعليم بالجلفة | الصرح الأكاديمي المعتمد",
  description:
    "مؤسسة خاصة للتكوين والتعليم متعددة التخصصات معتمدة رسمياً من طرف وزارة التكوين المهني بولاية الجلفة. بيئة تطبيقية 70% مخبرية، شهادات دولة معتمدة، ومرافقة مستمرة.",
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "مدرسة منصورة للتكوين والتعليم بالجلفة | الصرح الأكاديمي المعتمد",
    description: "مؤسسة خاصة معتمدة رسمياً من طرف وزارة التكوين المهني بولاية الجلفة. بيئة تطبيقية 70% مخبرية، شهادات دولة معتمدة، ومرافقة مستمرة.",
    url: siteUrl,
    siteName: "مدرسة منصورة للتكوين والتعليم",
    images: [
      {
        url: "/images/11.webp",
        width: 1200,
        height: 630,
        type: "image/webp",
        alt: "ملحقة مدرسة منصورة للتكوين والتعليم بالجلفة",
      },
    ],
    locale: "ar_DZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "مدرسة منصورة للتكوين والتعليم بالجلفة",
    description: "الصرح الأكاديمي المعتمد للتكوين والتعليم المهني بولاية الجلفة.",
    images: ["/images/11.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <head>
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icon.png" />
      </head>
      <body className={`${cairo.className} min-h-screen flex flex-col bg-[#faf8f8] text-[#111827] antialiased selection:bg-[#741922] selection:text-white`}>
        <DevToolsBlocker />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
