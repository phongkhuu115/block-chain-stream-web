import Footer from "@components/footer/footer";
import Header from "@components/header/header";
import type { Metadata } from "next";
import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";

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
      <body className="relative bg-primary">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
