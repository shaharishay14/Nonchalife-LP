import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nonchalife",
  description: "A habit tracker for iPhone.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${bricolage.variable} ${geist.variable} antialiased`}>
      <body className="flex min-h-screen flex-col bg-bg font-sans text-ink">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
