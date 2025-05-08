// components/Navbar.tsx
import React from "react";

interface NavbarProps {
  bgColor: string;
  navItems: { label: string; href: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ bgColor, navItems }) => {
  return (
    <nav className={`${bgColor} py-4 shadow-md`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-xl font-semibold text-gray-800">MyLogo</div>
        <div>
          <ul className="flex space-x-6">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="text-gray-800 hover:text-blue-500"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
