import type { Metadata } from "next";
import { Geist, } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "FARHAMA — Scents & Abayaa", 
  description: " a luxury lifestyle brand offering premium fragrances and modest fashion for women, men, and children aged 5 and above, alongside high-quality accessories. The brand specializes in elegant abayas, refined men's wear, children's designs, and *premium base accessories* such as bags, jewelry cores, belts, and tech straps",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
