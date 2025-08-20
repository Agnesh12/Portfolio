import React from "react";

const skills = {
  Languages: ["Java", "JavaScript", "SQL", "HTML5", "CSS3"],
  Frameworks: ["Spring Boot", "Tailwind CSS", "React"],
  Databases: ["MySQL", "PostgreSQL"],
  Tools: ["Git", "GitHub", "Postman", "VS Code", "IntelliJ"],
  Concepts: ["OOP", "REST API Development", "Version Control"],
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12 tracking-tight">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="p-8 bg-white rounded-2xl shadow-md border border-gray-200 hover:shadow-xl transition"
            >
              <h3 className="text-lg font-bold text-blue-700 mb-6 uppercase tracking-wide">
                {category}
              </h3>
              <ul className="flex flex-wrap gap-3 justify-center">
                {items.map((skill, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 bg-gray-100 rounded-lg border border-gray-300 text-gray-800 text-sm font-semibold hover:border-blue-400 hover:text-blue-700 transition"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
