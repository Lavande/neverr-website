import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { type Locale, getMessages } from "@/lib/i18n";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = "https://neverr.app";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const validLocale: Locale = locale === "zh" ? "zh" : "en";
  const messages = getMessages(validLocale);

  return {
    title: messages.metadata.home.title,
    description: messages.metadata.home.description,
    metadataBase: new URL(baseUrl),
    icons: {
      icon: '/icon.png',
      apple: '/apple-icon.png',
    },
    alternates: {
      canonical: `/${validLocale}`,
      languages: {
        en: "/en",
        zh: "/zh",
        "x-default": "/en",
      },
    },
    openGraph: {
      title: messages.metadata.home.title,
      description: messages.metadata.home.description,
      url: `${baseUrl}/${validLocale}`,
      siteName: "Neverr",
      locale: validLocale === "zh" ? "zh_CN" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: messages.metadata.home.title,
      description: messages.metadata.home.description,
    },
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;

  // Validate locale
  const validLocale: Locale = locale === 'zh' ? 'zh' : 'en';

  return (
    <html lang={validLocale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
} 