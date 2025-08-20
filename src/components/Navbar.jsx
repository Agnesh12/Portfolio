import React from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Problem Solving", href: "#problem-solving" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-extrabold text-blue-700 tracking-tight hover:text-blue-800 transition-colors">
          Agnesh K
        </a>
        <ul className="flex space-x-8 text-gray-800 font-semibold">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-blue-700 transition-colors duration-150 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
