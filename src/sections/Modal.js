import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaGithub } from "react-icons/fa";

const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modalVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { delay: 0.1 } },
};

const Modal = ({ project, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={onClose}
      >
        <motion.div
          className="bg-white rounded-lg shadow-xl max-w-lg w-full p-6 relative"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
            onClick={onClose}
          >
            <FaTimes size={20} />
          </button>

          <img
            src={project.imageUrl}
            alt={project.title}
            loading="lazy"
            className="w-full h-48 object-cover rounded-md mb-4"
          />

          <h2 className="text-2xl font-bold text-blue-600 mb-2">{project.title}</h2>
          <p className="text-gray-700 mb-4">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm rounded-full border border-gray-300 bg-blue-100 text-blue-700"
              >
                {tech}
              </span>
            ))}
          </div>

          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            <FaGithub /> View on GitHub
          </a>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;
