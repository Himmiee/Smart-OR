"use client";

import Footer from "@/Layout/Footer";
import Navbar from "@/Layout/Navbar";
import { navItems } from "@/Providers/data/data";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const navbarBgColor =
    pathname === "/" ? "bg-transparent backdrop-blur-sm" : "bg-white shadow-sm";

  return (
    <html lang="en">
      <body className="bg-transparent antialiased relative">
        <Navbar bgColor={navbarBgColor} navItems={navItems} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
