import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "@/Providers/Query/QueryProvider";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});
export const metadata: Metadata = {
  title: "Credicorp",
  description: "credit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased`}>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
