import Footer from "@/Layout/Footer";
import Navbar from "@/Layout/Navbar";
import { navItems } from "@/data/mockdata";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let navbarBgColor = "bg-white";
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar bgColor={navbarBgColor} navItems={navItems} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
