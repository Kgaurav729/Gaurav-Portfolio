import React, { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Modal from "./Modal"; // We'll create this next

const projects = [
  {
    title: "Kgaurav729.io",
    description: "Personal portfolio website showcasing projects and skills.",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/Kgaurav729/Kgaurav729.io",
    imageUrl: "/images/portfolio.png",
  },
  {
    title: "Generative AI for Beginners",
    description: "A series of lessons to get started with Generative AI.",
    techStack: ["Jupyter Notebook", "Python"],
    githubLink: "https://github.com/Kgaurav729/generative-ai-for-beginners",
    imageUrl: "/images/generative-ai.png",
  },
  {
    title: "CS50 Projects",
    description: "Projects completed as part of the CS50 course.",
    techStack: ["C", "Python", "SQL"],
    githubLink: "https://github.com/Kgaurav729/CS50_projects",
    imageUrl: "/images/cs50.png",
  },
  {
    title: "Test Colab",
    description: "Experiments and tests using Google Colab.",
    techStack: ["Python", "Colab"],
    githubLink: "https://github.com/Kgaurav729/test_colab",
    imageUrl: "/images/colab.png",
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="bg-white py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-4 text-gray-900">Projects</h2>
      <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
        A selection of projects that showcase my skills and experience.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative border border-gray-200 rounded-xl p-6 shadow-md bg-gray-50 text-left transform transition duration-300 hover:shadow-xl hover:scale-105 cursor-pointer"
            style={{
              backgroundImage: `url(${project.imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            onClick={() => setActiveProject(project)}
          >
            <div className="bg-white bg-opacity-90 p-4 rounded-md">
              <div className="flex items-center mb-2 text-xl text-blue-600">
                <FaExternalLinkAlt className="mr-2" />
                <h3 className="font-semibold">{project.title}</h3>
              </div>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm rounded-full border border-gray-300 bg-blue-100 text-blue-700 hover:brightness-95 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <button className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                View Project
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {activeProject && (
        <Modal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </section>
  );
};

export default Projects;
