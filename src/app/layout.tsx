import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";

const josefinSans = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Aslı Çolakoğlu | Software Engineering Student",
  description: "Aslı Çolakoğlu - Software Engineering Student passionate about Machine Learning, Front-End Development, and building practical software solutions.",
  keywords: ["Aslı Çolakoğlu", "Software Engineer", "Frontend Developer", "Machine Learning", "React", "Next.js", "Portfolio"],
  authors: [{ name: "Aslı Çolakoğlu" }],
  openGraph: {
    title: "Aslı Çolakoğlu | Software Engineering Student",
    description: "Software Engineering Student passionate about Machine Learning, Front-End Development, and building practical software solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${josefinSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
