import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Background from '../../public/Background.png';
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Samuel Davis | Portfolio",
  description: "The portfolio of Samuel Davis, a software engineer and web developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <div className={'background'}>
        </div>
      </body>
    </html>
  );
}
