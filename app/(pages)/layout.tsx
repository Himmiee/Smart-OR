import Footer from "@/Layout/Footer";
import Navbar from "@/Layout/Navbar";
import { navItems } from "@/Providers/data/data";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navbarBgColor = "bg-black/10";

  return (
    <html lang="en">
      <body className="bg-transparent antialiased relative">
        <Navbar bgColor={navbarBgColor} navItems={navItems} />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
