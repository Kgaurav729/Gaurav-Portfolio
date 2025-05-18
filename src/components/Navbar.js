import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Backdrop overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={closeMenu}
        />
      )}

      {/* Navbar */}
      <nav className="w-full sticky top-0 z-50 shadow-md bg-white text-gray-900">
        <div className="flex justify-between items-center px-6 sm:px-12 md:px-24 lg:px-36 py-4">
          <div>
            <ScrollLink to="home" smooth duration={500} className="cursor-pointer text-2xl font-bold">
              Gaurav
            </ScrollLink>
          </div>

          {/* Hamburger */}
          <div className="md:hidden text-2xl cursor-pointer z-50" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <ScrollLink to="skills" smooth duration={500} className="cursor-pointer hover:text-blue-500">
              Skills
            </ScrollLink>
            <ScrollLink to="projects" smooth duration={500} className="cursor-pointer hover:text-blue-500">
              Projects
            </ScrollLink>
            <ScrollLink to="experience" smooth duration={500} className="cursor-pointer hover:text-blue-500">
              Experience
            </ScrollLink>
            <ScrollLink to="contact" smooth duration={500} className="cursor-pointer hover:text-blue-500">
              Contact
            </ScrollLink>
            <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Mobile Menu - Sliding Panel */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out z-50 p-6 md:hidden flex flex-col space-y-6`}
        >
          <ScrollLink to="skills" smooth duration={500} onClick={closeMenu} className="cursor-pointer hover:text-blue-500">
            Skills
          </ScrollLink>
          <ScrollLink to="projects" smooth duration={500} onClick={closeMenu} className="cursor-pointer hover:text-blue-500">
            Projects
          </ScrollLink>
          <ScrollLink to="experience" smooth duration={500} onClick={closeMenu} className="cursor-pointer hover:text-blue-500">
            Experience
          </ScrollLink>
          <ScrollLink to="contact" smooth duration={500} onClick={closeMenu} className="cursor-pointer hover:text-blue-500">
            Contact
          </ScrollLink>
          <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FaLinkedin />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
