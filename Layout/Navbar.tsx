"use client";
import Image from "next/image";
import React, { useState } from "react";
import CredicorpLogo from "@/public/logo-asset/credicorp-logo.png";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  bgColor: string;
  navItems: { label: string; href: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ bgColor, navItems }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={`absolute top-0 left-0 w-full ${bgColor} pt-6 pb-4 z-50 backdrop-blur-sm bg-white/30`}
    >
      <div className="container flex justify-between items-center max-w-screen-xl mx-auto px-4">
        {/* Logo */}
        <Image src={CredicorpLogo} alt="logo" className="w-40 lg:w-48" />

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-6">
          <ul className="flex space-x-6">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="text-white hover:text-white/80">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:flex space-x-3 ml-6">
          <Button variant="outline" size="lg">
            Login
          </Button>
          <Button variant="secondary" size="lg">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? (
              <X className="text-white" />
            ) : (
              <Menu className="text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden mt-4 px-4 space-y-4">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="block text-white hover:text-white/80"
            >
              {item.label}
            </a>
          ))}
          <div className="flex flex-col space-y-3 pt-2">
            <Button variant="outline" size="lg" className="w-full">
              Login
            </Button>
            <Button variant="secondary" size="lg" className="w-full">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
