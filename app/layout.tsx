import type { Metadata } from "next";
import { Figtree, Eczar } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
});

const eczar = Eczar({
  subsets: ["latin"],
  variable: "--font-eczar",
});
export const metadata: Metadata = {
  title: "SmartOR",
  description:
    "Providing world-class simulation technology for various surgical procedures using immersive virtual reality",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo/S.png" />
      </head>
      <body className={`${figtree.variable} ${eczar.variable}  antialiased`}>
        <Toaster position="top-right" />
        {children}
      </body>
    </html>
  );
}
