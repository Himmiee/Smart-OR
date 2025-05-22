import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "@/Providers/Query/QueryProvider";
import { Toaster } from "react-hot-toast";


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
      <head>
        <link rel="icon" href="/logo-asset/credicorb.png" />
      </head>
      <body className={`${outfit.className} antialiased`}>
        <Toaster/>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
