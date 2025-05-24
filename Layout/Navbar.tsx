"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CredicorpLogo from "@/public/logo-asset/credicorp-logo.png";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronUp } from "lucide-react";
import { ModalWrapper } from "./modal/modal";
import { HowItWorksPage } from "./Sections/Home/HowItWorks";
import { useRouter } from "next/navigation";

interface NavItem {
  label: string;
  href: string;
  subItems?: { label: string; href: string }[];
}

interface NavbarProps {
  bgColor: string;
  textColor?: string;
  navItems: NavItem[];
}

const Navbar: React.FC<NavbarProps> = ({
  bgColor,
  textColor = "text-white",
  navItems,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full transition-transform duration-300 z-50 ${bgColor} pt-6 pb-4 backdrop-blur-sm translate-y-0
        `}
      >
        <div className="container flex justify-between items-center max-w-screen-xl mx-auto px-6">
          <Image
            onClick={() => router.push("/")}
            src={CredicorpLogo}
            alt="logo"
            className="w-40 lg:w-48"
          />

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6">
            <ul className="flex space-x-6">
              {navItems.map((item, index) => (
                <li key={index} className="relative">
                  {item.subItems ? (
                    <div className="relative group">
                      <button
                        className={`flex items-center ${textColor} hover:opacity-80 group-hover:font-medium`}
                      >
                        {item.label}
                        <ChevronUp
                          className={`ml-1 mt-1 h-3.5 w-3.5 transform rotate-180 transition-transform duration-300 group-hover:rotate-0`}
                        />
                      </button>
                      <div className="absolute left-0 top-full mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                        <div
                          className={`${
                            bgColor === "bg-white shadow-sm"
                              ? "bg-white"
                              : "bg-black/90"
                          } shadow-lg rounded-md py-2 border border-gray-200`}
                        >
                          {item.subItems.map((subItem, subIndex) => (
                            <a
                              key={subIndex}
                              href={subItem.href}
                              className={`block px-4 py-3 ${textColor} hover:bg-gray-100 hover:text-black transition-colors duration-200`}
                            >
                              {subItem.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className={`${textColor} hover:opacity-80`}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:flex space-x-3 ml-6">
            {/* <Button variant="outline" className={textColor} size="lg">
            Login
          </Button> */}
            <Button
              onClick={() => setShowModal(true)}
              variant="secondary"
              size="lg"
            >
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
                <X className={textColor} />
              ) : (
                <Menu className={textColor} />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden mt-4 px-4 space-y-4 min-h-screen">
            {navItems.map((item, index) => (
              <div key={index}>
                {item.subItems ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className={`flex items-center justify-between w-full ${textColor} hover:opacity-80 py-2 text-left font-medium`}
                    >
                      <span>{item.label}</span>
                      <ChevronUp
                        className={`h-4 w-4 mr-3 transform transition-transform duration-300 ${
                          activeDropdown === item.label
                            ? "rotate-0"
                            : "rotate-180"
                        }`}
                      />
                    </button>
                    {activeDropdown === item.label && (
                      <div className="pl-4 mt-2 space-y-2 border-l-2 border-gray-400 ml-2">
                        {item.subItems.map((subItem, subIndex) => (
                          <a
                            key={subIndex}
                            href={subItem.href}
                            className={`block ${textColor} hover:opacity-80 py-2 px-2 transition-all duration-200 hover:pl-3`}
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className={`block ${textColor} hover:opacity-80 py-2`}
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
            <div className="flex flex-col space-y-3 pt-2">
              {/* <Button
              variant="outline"
              size="lg"
              className={`${textColor} w-full`}
            >
              Login
            </Button> */}
              <Button
                onClick={() => setShowModal(true)}
                variant="secondary"
                size="lg"
                className="w-full"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </nav>
      <ModalWrapper isOpen={showModal} onClose={() => setShowModal(false)}>
        <HowItWorksPage bgColor="bg-white py-2" />
      </ModalWrapper>
    </>
  );
};

export default Navbar;
