import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-white to-gray-100 px-6">
      {/* Intro */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900">
        Hello, I’m <span className="text-blue-700">Agnesh</span>
      </h1>
      <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-2xl">
        I am an engineering student with a strong passion for developing <span className="font-semibold">full-stack applications</span> and addressing <span className="font-semibold">real-world problems</span>. I am committed to continuous learning and professional growth in software development.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          href="#projects"
          className="px-7 py-3 rounded-2xl bg-blue-700 text-white font-semibold shadow-lg hover:bg-blue-800 transition"
        >
          View Projects
        </a>
        <a
          href="https://github.com/Agnesh12"
          target="_blank"
          rel="noopener noreferrer"
          className="px-7 py-3 rounded-2xl border border-blue-700 text-blue-700 font-semibold hover:bg-blue-50 transition"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/agnesh123"
          target="_blank"
          rel="noopener noreferrer"
          className="px-7 py-3 rounded-2xl border border-blue-700 text-blue-700 font-semibold hover:bg-blue-50 transition"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Hero;
