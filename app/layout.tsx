import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: {
    default: `${site.name} — Full-Stack Developer & CS Engineer`,
    template: `%s · ${site.name}`,
  },
  description:
    "Anuj Thakur is a Computer Science Engineer and Full-Stack Developer building modern web applications, scalable digital products and creative solutions. Explore 14+ live projects.",
  keywords: [
    "Anuj Thakur",
    "Full-Stack Developer",
    "Computer Science Engineer",
    "React Developer",
    "Next.js",
    "Web Developer India",
    "Portfolio",
  ],
  authors: [{ name: site.name, url: site.socials.github }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.siteUrl,
    siteName: `${site.name} — Portfolio`,
    title: `${site.name} — Full-Stack Developer & CS Engineer`,
    description:
      "I build digital experiences that make an impact. Explore my selected projects — live demos, source code and the story behind each build.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Full-Stack Developer`,
    description:
      "Computer Science Engineer passionate about modern web applications, scalable digital products and creative solutions.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#07080c",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased bg-bg text-ink">{children}</body>
    </html>
  );
}
