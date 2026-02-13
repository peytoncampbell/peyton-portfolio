import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Peyton Campbell | Full Stack Developer & AI Engineer",
  description:
    "Full Stack Developer specializing in AI/ML systems, trading bots, and intelligent automation. CS from Western, AI/ML cert from Fanshawe.",
  keywords: [
    "full stack developer",
    "AI engineer",
    "machine learning",
    "trading bot",
    "Python",
    "TypeScript",
    "React",
    "Next.js",
  ],
  openGraph: {
    title: "Peyton Campbell | Full Stack Developer & AI Engineer",
    description:
      "Building production AI systems — trading bots, intelligent agents, and automation that works.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
