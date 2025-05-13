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
    pathname === "/" ? "bg-black/10 backdrop-blur-sm" : "bg-white shadow-sm";
  const textColor = pathname === "/" ? "text-white" : "text-black";

  return (
    <html lang="en">
      <body className=" antialiased relative">
        <Navbar
          bgColor={navbarBgColor}
          textColor={textColor}
          navItems={navItems}
        />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
