import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Hanks Ehimare Amanfoh",
//   description: "I’m a Web Developer and Virtual Assistant specializing in building fast, scalable, and responsive websites using modern technologies. I help businesses improve their online presence through clean code, optimized performance, and reliable administrative and technical support.",
// };

export const metadata: Metadata = {
  title: "Hanks Ehimare Amanfoh | Web Developer & Virtual Assistant",
  description:
    "Web Developer and Virtual Assistant specializing in fast, scalable, and responsive websites. Helping businesses grow online through clean code, performance optimization, and reliable administrative and technical support.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
