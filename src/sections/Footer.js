import React, { useState, useEffect } from "react";
import { FaHeart, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="overflow-x-hidden">
        {showButton && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-20 right-6 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
            aria-label="Scroll to top"
          >
            <FaArrowUp />
          </button>
        )}
      </div>

      <footer className="w-full bottom-0 left-0 text-center py-4 bg-gray-100 text-gray-700 border-t border-gray-300 z-40">
        <p className="flex justify-center items-center gap-2 text-sm">
          Built with <FaHeart className="text-red-500" /> Gaurav Kulmethe
        </p>
      </footer>

      <div className="h-20" />
    </>
  );
};

export default Footer;
