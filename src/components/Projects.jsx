import React from "react";

const projects = [
  {
    title: "Revisemate – Spaced Repetition Revision Tracker",
    description:
      "A comprehensive full-stack application designed to enhance knowledge retention through the 1–3–7 day spaced repetition model. Features robust JWT authentication, secure scheduling, and dynamic revision tracking.",
    tech: ["Spring Boot", "PostgreSQL", "React", "Tailwind CSS"],
    live: "https://revisemate.pages.dev",
    github: "https://github.com/Agnesh12/Revisemate",
  },
  {
    title: "StealthLink – Spotify Link Fetcher Extension",
    description:
      "A Chrome extension enabling users to efficiently search for Spotify tracks and generate shareable links. Integrates Spotify OAuth, clipboard functionality, and seamless communication between extension and backend.",
    tech: ["React", "Tailwind CSS", "Spring Boot", "Spotify Web API"],
    live: null,
    github: "https://github.com/Agnesh12/StealthLink",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition flex flex-col justify-between border border-gray-100"
            >
              <div>
                <h3 className="text-2xl font-semibold text-blue-700 mb-2">
                  {project.title}
                </h3>
                <p className="mt-2 text-gray-700 text-base leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2 justify-center md:justify-start">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-lg border border-blue-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex space-x-4 justify-center md:justify-start">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 rounded-xl bg-blue-700 text-white text-sm font-medium shadow hover:bg-blue-800 transition border border-blue-700"
                  >
                    Live Demo
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-xl border border-blue-700 text-blue-700 text-sm font-medium hover:bg-blue-50 transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
