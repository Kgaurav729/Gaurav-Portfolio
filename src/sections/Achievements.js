import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaTrophy, FaCertificate, FaCode} from "react-icons/fa";

const achievements = [
  {
    title: "Winner - Devdays Hackathon 2022",
    org: "IEEE GTBIT",
    date: "Feb 2022",
    description: "1st Position in Student Innovation Category out of 100 teams in Devdays Hackathon",
    type: "Competition",
    icon: <FaTrophy className="text-yellow-500 text-xl" />
  },
  {
    title: "AWS Certified Cloud Practitioner",
    org: "Amazon Web Services",
    date: "Issued Nov 2024",
    description: "Certified understanding of AWS Cloud fundamentals.",
    type: "Certification",
    icon: <FaCertificate className="text-yellow-500 text-xl" />
  },
  {
    title: "Top 13% in Acciowars coding contest",
    org: "Acciojob",
    date: "Issued July 2022",
    description: "Ranked Top 13% out of 11,000+ Participants in the Acciowars coding contest by AccioJob.",
    type: "Coding",
    icon: <FaCode className="text-yellow-500 text-xl" />
  }
];

const Achievements = () => {
  const [filter, setFilter] = useState("All");

  const filteredAchievements = filter === "All"
    ? achievements
    : achievements.filter(item => item.type === filter);

  const categories = ["All", "Competition", "Coding", "Certification"];

  return (
    <section id="achievements" className="py-16 px-4 md:px-16 lg:px-36 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-2">Achievements</h2>
      <p className="text-center text-gray-600 mb-8">Milestones and recognitions I’m proud of.</p>

      <div className="flex justify-center space-x-4 mb-12 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full border ${
              filter === cat ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'
            } hover:bg-blue-500 hover:text-white transition`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="space-y-8">
        {filteredAchievements.map((item, index) => (
          <motion.div
            key={index}
            initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500 w-full max-w-4xl mx-auto"
          >
            {/* Category Badge */}
            <div className="absolute top-4 right-4 text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
              {item.type}
            </div>

            {/* Main Content */}
            <div className="flex items-center space-x-3">
              {item.icon}
              <h3 className="text-xl font-semibold">{item.title}</h3>
            </div>
            <p className="text-gray-700 font-medium mt-1">{item.org}</p>
            <p className="text-gray-600 mt-2">{item.description}</p>

            {/* Date - Bottom Right */}
            <div className="absolute bottom-4 right-6 text-sm text-gray-500">
              {item.date}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;

