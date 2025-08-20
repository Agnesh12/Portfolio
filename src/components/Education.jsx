import React from "react";

const education = [
  {
    degree: "Bachelor of Engineering in Electronics and Communication",
    institution: "PSR Engineering College, Tamil Nadu",
    year: "2022 – 2026",
  },
  {
    degree: "Higher Secondary Certificate (Class XII)",
    institution: "Good Shepherd Matriculation Higher Secondary School, Tamil Nadu",
    year: "2022",
  },
  {
    degree: "Secondary School Certificate (Class X)",
    institution: "Good Shepherd Matriculation Higher Secondary School, Tamil Nadu",
    year: "2020",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
          Education
        </h2>
        <div className="space-y-8 max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 transition text-left"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-blue-700">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-700 mt-1">{edu.institution}</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="text-gray-500 text-sm font-medium bg-gray-100 px-3 py-1 rounded-full">
                    {edu.year}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
