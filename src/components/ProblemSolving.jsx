import React from "react";

const ProblemSolving = () => {
  return (
    <section id="problem-solving" className="py-20 bg-white px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Problem Solving
        </h2>

        <div className="bg-gray-50 p-8 rounded-2xl shadow-md max-w-2xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed">
            I have successfully solved{" "}
            <span className="font-semibold text-blue-600">150+ algorithmic problems</span> on{" "}
            <a
              href="https://leetcode.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              LeetCode
            </a>
            , with a strong emphasis on{" "}
            <span className="font-medium">Arrays, Linked Lists, Trees, and Dynamic Programming</span>.
            My ongoing commitment includes mastering{" "}
            <span className="font-semibold">Blind 75</span> and{" "}
            <span className="font-semibold">NeetCode 150</span> problem sets to further enhance my data structures and algorithms expertise.
          </p>

          {/* Stats Card */}
          <div className="mt-6 flex justify-center">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm w-full md:w-2/3">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Competitive Coding Highlights
              </h3>
              <ul className="text-gray-600 space-y-2 text-sm md:text-base">
                <li>✔️ 150+ LeetCode problems solved</li>
                <li>✔️ Active practice of Blind 75 & NeetCode 150</li>
                <li>✔️ Advanced proficiency in core DSA patterns</li>
              </ul>
            </div>
          </div>

          {/* LeetCode Button */}
          <div className="mt-6">
            <a
              href="https://leetcode.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition"
            >
              View My LeetCode Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolving;
