import Footer from "@components/footer/footer";
import Header from "@components/header/header";
import { cn } from "@lib/utils";
import "@rainbow-me/rainbowkit/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
export const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "BCSW",
  description: "BCSW",
  themeColor: "#0C102E",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased relative bg-primary",
          inter.className
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
