import React, { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Modal from "./Modal";

const projects = [
  {
    title: "Blog Website",
    description: "This project is a dynamic and responsive blog website where users can read, create, edit, and delete blog posts. It features user authentication, a clean and modern UI, and a content management system for managing articles. Built using HTML, CSS, JavaScript, React, Node.js,Tailwind , Mongodb. the platform allows easy navigation, commenting, and content sharing. Ideal for personal blogging or small publications.",
    techStack: ["Node.js", "React.js", "Mongodb","Tailwind"],
    githubLink: "https://github.com/Kgaurav729/mern-blog-frontend",
    imageUrl: "https://raw.githubusercontent.com/Kgaurav729/test_colab/742f9315ad8ca377518de56ddde04d09de7dc3ea/10776006.jpg",
  },
  {
    title: "Student Attention Detector System",
    description: "This project is a real-time monitoring platform developed using Python, OpenCV, and NumPy to assess student attentiveness during learning sessions. It detects facial movements and calculates drowsiness levels by analyzing eyelid closure and mouth position to identify signs of fatigue or inattention. The system provides valuable insights for remote learning environments by helping ensure student engagement and alertness.",
    techStack: ["Jupyter Notebook", "Python","OpenCV","Numpy","Matplotlib"],
    githubLink: "https://github.com/Kgaurav729/OpenCVProject",
    imageUrl: "https://raw.githubusercontent.com/Kgaurav729/test_colab/742f9315ad8ca377518de56ddde04d09de7dc3ea/close-up-student-online-class.jpg",
  },
  {
    title: "Online Learning Platform",
    description: "web-based learning system built with React (frontend) and Django (backend) that enables learners to access video lectures uploaded by trainers. The platform features user authentication, video content management, and a clean, responsive interface to facilitate smooth learning experiences. Ideal for educational institutions or individual instructors to deliver structured online courses.",
    techStack: ["React.js", "Python", "MySQL", "Django"],
    githubLink: "https://github.com/Kgaurav729/Learner-Trainer",
    imageUrl: "https://raw.githubusercontent.com/Kgaurav729/test_colab/742f9315ad8ca377518de56ddde04d09de7dc3ea/3784896.jpg",
  },
  {
    title: "BlockChain Simulation Platform",
    description: "Developed a secure blockchain platform using Flask, HTML5, JavaScript (ES6+), and CSS3, supporting over 10,000 users. The platform simulates the Bitcoin mining process, enabling users to validate new block creation and enhancing blockchain understanding by 40%. Implemented RSA public-private key cryptography for secure transactions and user authentication, ensuring 100% protection against unauthorized access and maintaining a robust, secure environment.",
    techStack: ["Python", "Flask","HTML","Javascript","CSS"],
    githubLink: "https://github.com/Kgaurav729/Blockchain_SIP_final",
    imageUrl: "https://raw.githubusercontent.com/Kgaurav729/test_colab//742f9315ad8ca377518de56ddde04d09de7dc3ea/blockchain.jpg",
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
              <p className="text-gray-700 mb-4">
                {project.description.length > 100
                  ? project.description.slice(0, 100) + "..."
                  : project.description}
              </p>
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
                More Info...
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
