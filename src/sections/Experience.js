import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const experienceData = [
  {
    type: "experience",
    position: "Software Engineer",
    company: "Tikaj Security",
    date: "Oct 2024 - Jan 2025",
    description: [
      "Worked on developing microservices using Spring Boot, improved API efficiency by 20%.",
      "Implemented robust features using Vue.js and JavaScript to streamline the customer onboarding process for 5+ loan types, reducing onboarding time by 30% and elevating user satisfaction by 25%.",
      "Deployed a New Search feature utilizing Vue.js custom components and Axios for optimized data retrieval, driving a 25% increase in platform engagement and a 30% improvement in search result accuracy.",
      "Identified, troubleshot, and resolved critical production blocker issues in real-time by utilizing DevTools and Gitlab, reducing application downtime by 30%.",
      "Performed in-depth debugging and performance profiling using Vue Devtools to address platform-critical bugs, leading to a 20% improvement in application performance."
    ]
  },
  {
    type: "experience",
    position: "Software Engineer",
    company: "Incedo Inc",
    date: "Jan 2024 - Sept 2024",
    description:[
      "Worked on developing microservices using Spring Boot, improved API efficiency by 20%.",
      "Implemented robust features using Vue.js and JavaScript to streamline the customer onboarding process for 5+ loan types, reducing onboarding time by 30% and elevating user satisfaction by 25%.",
      "Deployed a New Search feature utilizing Vue.js custom components and Axios for optimized data retrieval, driving a 25% increase in platform engagement and a 30% improvement in search result accuracy.",
      "Identified, troubleshot, and resolved critical production blocker issues in real-time by utilizing DevTools and Gitlab, reducing application downtime by 30%.",
      "Performed in-depth debugging and performance profiling using Vue Devtools to address platform-critical bugs, leading to a 20% improvement in application performance."
    ]
  },
  {
    type: "experience",
    position: "Reasearch Intern",
    company: "VNIT Nagpur",
    date: "May 2022 - July 2022",
    description: [
      "Worked on developing microservices using Spring Boot, improved API efficiency by 20%.",
      "Implemented robust features using Vue.js and JavaScript to streamline the customer onboarding process for 5+ loan types, reducing onboarding time by 30% and elevating user satisfaction by 25%.",
      "Deployed a New Search feature utilizing Vue.js custom components and Axios for optimized data retrieval, driving a 25% increase in platform engagement and a 30% improvement in search result accuracy.",
      "Identified, troubleshot, and resolved critical production blocker issues in real-time by utilizing DevTools and Gitlab, reducing application downtime by 30%.",
      "Performed in-depth debugging and performance profiling using Vue Devtools to address platform-critical bugs, leading to a 20% improvement in application performance."
    ]
  },
  {
    type: "education",
    position: "B.Tech in Electronics and Communication Engineering",
    company: "VNIT Nagpur",
    date: "2019 - 2023",
    description: ["CourseWork : Communication Networks , Wireless Communication , Operating System, Embedded System ,Data Structures , Python Programming, Control System"
      ]
  },
  {
    type: "education",
    position: "High School & 10+2",
    company: "Jawahar Navodaya Vidyalaya Chandrapur (MH)",
    date: "2014 - 2018",
    description: [
      "CBSE 10th Percentage (2016) - 92.6%",
      "CBSE 12th Percentage (2018) - 89.8%",
      "Participated in NVS Regional Table Tennis Tournament Held in JNV Bhusawal in July 2014",
      ]
  }
  // {
  //   type: "certification",
  //   position: "AWS Certified Cloud Practitioner",
  //   company: "Amazon Web Services",
  //   date: "Issued Nov 2023",
  //   description: ["Certified understanding of AWS Cloud fundamentals."]
  // }
];

const hoverColors = [
  "hover:bg-blue-100",
  "hover:bg-green-100",
  "hover:bg-yellow-100",
  "hover:bg-purple-100",
  "hover:bg-pink-100",
  "hover:bg-orange-100"
];

const ExperienceEducation = () => {
  const [filter, setFilter] = useState("all");

  const filteredData = filter === "all"
    ? experienceData
    : experienceData.filter(item => item.type === filter);

  return (
    <section id="experience" className="py-16 px-6 bg-gray-50">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">Experience & Education</h2>
        <p className="text-gray-600 mt-2">A quick overview of my professional journey and academic background.</p>
        <div className="flex justify-center gap-4 mt-4">
          <button onClick={() => setFilter("all")} className={`px-4 py-2 rounded ${filter === "all" ? "bg-blue-600 text-white" : "bg-white border text-gray-700"}`}>All</button>
          <button onClick={() => setFilter("experience")} className={`px-4 py-2 rounded ${filter === "experience" ? "bg-blue-600 text-white" : "bg-white border text-gray-700"}`}>Experience</button>
          <button onClick={() => setFilter("education")} className={`px-4 py-2 rounded ${filter === "education" ? "bg-blue-600 text-white" : "bg-white border text-gray-700"}`}>Education</button>
          {/* <button onClick={() => setFilter("certification")} className={`px-4 py-2 rounded ${filter === "certification" ? "bg-blue-600 text-white" : "bg-white border text-gray-700"}`}>Certifications</button> */}
        </div>
        {/* <div className="mt-4">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
          >
            <FaDownload /> Download Resume
          </a>
        </div> */}
      </div>

      <div className="max-w-4xl mx-auto border-l-2 border-blue-600 pl-6 space-y-8">
        {filteredData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={`relative bg-white rounded-lg shadow-md p-6 transition duration-300 hover:shadow-xl ${hoverColors[index % hoverColors.length]}`}
          >
            <span className="absolute -left-3 top-6 w-6 h-6 bg-blue-600 rounded-full border-4 border-white"></span>
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-semibold flex items-center gap-2 text-gray-800">
                {item.type === 'experience' ? <FaBriefcase /> : <FaGraduationCap />} {item.position}
              </h3>
              <span className="text-sm text-gray-500">{item.date}</span>
            </div>
            <p className="text-gray-600 mt-1 font-medium">{item.company}</p>
            {Array.isArray(item.description) && item.description.length > 0 && (
              <ul className="text-gray-700 mt-2 text-sm list-disc list-inside space-y-1">
                {item.description.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceEducation;