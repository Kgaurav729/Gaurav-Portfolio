import React from "react";
import { FaCode, FaCogs, FaDatabase, FaTools, FaBook, FaUserTie } from "react-icons/fa";
import { motion } from "framer-motion";

const skillsData = [
  {
    title: "Programming Languages",
    icon: <FaCode />,
    color: "bg-blue-100 text-blue-700",
    hover: "hover:bg-blue-50",
    skills: ["Java", "Python", "C++ ", "JavaScript"],
  },
  {
    title: "Frameworks & Libraries",
    icon: <FaCogs />,
    color: "bg-green-100 text-green-700",
    hover: "hover:bg-green-50",
    skills: ["Spring Boot", "Django", "React.js", "Vue.js", "Bootstrap", "RESTful API"],
  },
  {
    title: "Databases",
    icon: <FaDatabase />,
    color: "bg-yellow-100 text-yellow-700",
    hover: "hover:bg-yellow-50",
    skills: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    title: "Tools & Platforms",
    icon: <FaTools />,
    color: "bg-purple-100 text-purple-700",
    hover: "hover:bg-purple-50",
    skills: [
      "Docker",
      "Git",
      "CSS",
      "HTML",
      "AWS",
      "Azure",
      "Blockchain",
      "Software Documentation",
      "Product Development",
    ],
  },
  {
    title: "Core Subjects",
    icon: <FaBook />,
    color: "bg-red-100 text-red-700",
    hover: "hover:bg-red-50",
    skills: ["Operating Systems", "Database", "C Programming", "Communication Networks"],
  },
  {
    title: "Professional Skills",
    icon: <FaUserTie />,
    color: "bg-teal-100 text-teal-700",
    hover: "hover:bg-teal-50",
    skills: ["Problem Solving", "Team Collaboration", "Technical Communication", "Time Management"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-white py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-4 text-gray-900">Technical Skills</h2>
      <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
        Here’s a breakdown of my technical toolkit, spanning languages, frameworks, databases, tools, and professional skills.
      </p>

      {/* Grid: 3 columns layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {skillsData.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`border border-gray-200 rounded-xl p-6 shadow-md bg-gray-50 text-left transform transition duration-300 hover:shadow-xl hover:scale-105 ${category.hover}`}
          >
            <div className="flex items-center mb-4 text-xl text-blue-600">
              <span className="mr-2">{category.icon}</span>
              <h3 className="font-semibold">{category.title}</h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className={`px-3 py-1 text-sm rounded-full border border-gray-300 ${category.color} hover:brightness-95 transition`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
