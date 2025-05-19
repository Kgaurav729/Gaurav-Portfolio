import React from "react";
import myimages from "../Images/profile-pic.png";
import { Link as ScrollLink } from "react-scroll";
import { FaGithub, FaLinkedin, FaCode, FaFilePdf } from "react-icons/fa";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gray-50"
    >
      <div className="w-40 h-40 mb-6">
        <img
          src={myimages}
          alt="Profile"
          className="rounded-full w-full h-full object-cover border-4 border-blue-500 shadow-lg"
        />
      </div>

      <p className="text-green-600 font-semibold mb-2">Open to work</p>

      <h1 className="text-3xl sm:text-6xl font-bold mb-1">Hi, I am Gaurav</h1>

      <h2 className="text-xl sm:text-xl text-gray-700 mb-4">
        Software Engineer | Full Stack Developer
      </h2>

      <p className="text-gray-600 max-w-xl mb-6">
        I'm a passionate developer with a knack for building scalable web
        applications and crafting clean user experiences. Let’s build
        something awesome together.
      </p>

      <div className="hidden md:flex space-x-6 items-center mb-6">
        <a
          href="https://github.com/Kgaurav729"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          <FaGithub size="2em" />
        </a>
        <a
          href="https://www.linkedin.com/in/gaurav-kulmethe-32537b145/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          <FaLinkedin size="2em" />
        </a>
        <a
          href="https://leetcode.com/u/Codewithgaurav/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          <FaCode size="2em" />
        </a>
      </div>

      <div className="flex flex-wrap justify-center space-x-4">
        <ScrollLink
          to="projects"
          smooth
          duration={1000}
          className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition cursor-pointer"
        >
          View Projects
        </ScrollLink>

        <a
          href="https://your-resume-link.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 transition flex items-center space-x-2"
        >
          <FaFilePdf className="text-red-600" />
          <span>Resume</span>
        </a>

        <ScrollLink
          to="contact"
          smooth
          duration={1000}
          className="px-6 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition cursor-pointer"
        >
          Let's Talk
        </ScrollLink>
      </div>
    </section>
  );
};

export default Home;
