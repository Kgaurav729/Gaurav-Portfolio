import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaCode, FaLaptopCode, FaCodeBranch } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { motion } from "framer-motion";


const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }
    // toast.success("Message sent successfully!");
    // setFormData({ name: "", email: "", message: "" });
    try {
    const response = await fetch("http://localhost:8000/api/contact-message/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      toast.success(data.message || "Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      toast.error("Failed to send message. Please try again.");
    }
  } catch (error) {
    toast.error("An error occurred. Please try again.");
  }
  };

  return (
    <section id="contact" className="min-h-screen px-6 py-16 bg-gray-50 text-gray-800">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-2">Let's Connect</h2>
        <p className="text-lg text-gray-600 mb-6">Let's connect and make some awesome things.</p>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white shadow-md rounded-lg p-6 mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows="4"
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-6">
          {[{
            icon: <FaLinkedin className="text-blue-600 text-2xl" />, label: "LinkedIn", url: "https://www.linkedin.com/in/gaurav-kulmethe-32537b145/"
          }, {
            icon: <FaGithub className="text-gray-800 text-2xl" />, label: "GitHub", url: "https://github.com/Kgaurav729"
          }, {
            icon: <FaCode className="text-yellow-600 text-2xl" />, label: "LeetCode", url: "https://leetcode.com/u/Codewithgaurav/"
          }, {
            icon: <FaLaptopCode className="text-green-700 text-2xl" />, label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/user/gauravkulmethe007/"
          }, {
            icon: <FaCodeBranch className="text-purple-700 text-2xl" />, label: "CodeChef", url: "https://www.codechef.com/users/gaurav_88"
          }].map((item, index) => (
            <motion.a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="bg-white p-4 rounded shadow hover:shadow-lg flex flex-col items-center gap-2 transition-all duration-300"
            >
              {item.icon}
              <span className="text-sm font-medium">{item.label}</span>
            </motion.a>
          ))}
        </div>
      </div>
      <ToastContainer position="top-center" />
    </section>
  );
};

export default Contact;
