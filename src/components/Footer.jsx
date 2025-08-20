import React from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#problem-solving", label: "Problem Solving" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Left side */}
        <p className="text-sm font-medium">
          &copy; {new Date().getFullYear()} Agnesh K. All rights reserved.
        </p>

        {/* Right side */}
        <nav className="flex space-x-6 mt-4 md:mt-0">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-white transition-colors duration-200 text-sm font-semibold"
              aria-label={link.label}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
