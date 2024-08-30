import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luxury Hotel - your peaceful destiny",
  description: "Luxury Hotel - A place where you will get all the best services.",
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
        <Testimonials />
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
