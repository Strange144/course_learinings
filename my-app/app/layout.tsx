import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Ansul Joshi — Full-Stack Web Developer",
  description:
    "Full-stack web developer with hands-on experience building and deploying responsive web applications across Java, PHP, and Python stacks.",
  keywords: [
    "Ansul Joshi",
    "Full-Stack Developer",
    "Web Developer",
    "Java",
    "PHP",
    "Python",
    "React",
    "Next.js",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${inter.variable}`}
    >
      <body className="bg-white text-black antialiased">{children}</body>
    </html>
  );
}
