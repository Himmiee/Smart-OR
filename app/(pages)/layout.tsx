"use client";

import Footer from "@/Layout/Footer";
import Navbar from "@/Layout/Navbar";
import { navItems } from "@/Providers/data/data";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Loader from "@/Layout/Sections/Home/Loader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (pathname === "/") {
      const hasVisited = sessionStorage.getItem("hasVisitedHome");

      if (!hasVisited) {
        setLoading(true);
        sessionStorage.setItem("hasVisitedHome", "true");

        const timer = setTimeout(() => setLoading(false), 3000); // 3 seconds loader
        return () => clearTimeout(timer);
      }
    }
  }, [pathname]);

  const navbarBgColor =
    pathname === "/" ? "bg-black/50 backdrop-blur-sm" : "bg-white shadow-sm";
  const textColor = pathname === "/" ? "text-white" : "text-black";

  if (loading && pathname === "/") {
    // Only loader, no navbar/footer during loading on homepage
    return <Loader onFinish={() => setLoading(false)} />;
  }

  // Render navbar + content + footer normally after loading or on other pages
  return (
    <html lang="en">
      <body className="antialiased relative">
        <Navbar
          bgColor={navbarBgColor}
          textColor={textColor}
          navItems={navItems}
        />
        <main className={`${pathname === "/" ? "" : "lg:pt-22"}`}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
