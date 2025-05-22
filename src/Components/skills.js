import { useState } from "react";
export default function Skill() {
  const [skill, setSkill] = useState("technical");
  const skills = {
    technical: [
      { name: "Figma", prof: 76 },
      { name: "HTML", prof: 67 },
      { name: "CSS", prof: 67 },
      { name: "Javascript", prof: 53 },
      { name: "Bootstrap", prof: 57 },
      { name: "ReactJS", prof: 47 },
    ],
    soft: [
      { name: "Logical Thinking", prof: 93 },
      { name: "Creativity", prof: 89 },
      { name: "Leadership", prof: 87 },
      { name: "Communication", prof: 87 },
      { name: "Time Management", prof: 82 },
      { name: "Attention to Detail", prof: 80 },
    ],
  };

  const getproflabel = (prof) => {
    if (prof >= 90) return "Expert";
    if (prof > 75) return "Advanced";
    if (prof >= 60) return "Intermediate";
    return "Beginner";
  };

  return (
    <div id="Skills" className="min-h-auto w-full bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl pb-4 font-bold bg-gradient-to-r from-yellow-600 via-yellow-700 to-orange-800 bg-clip-text text-transparent">
            My Skills
          </h2>
          <p className="text-xl text-gray-400">
            A comprehensive overview of my technical expertise and professional
            capabilities
          </p>
        </div>

        {/* Toggle button */}
        <div className="flex justify-center mb-12 space-x-4">
          <button
            onClick={() => setSkill("technical")}
            className={`px-6 py-3  rounded-lg text-semibold text-lg transition-all duration-200 ${
              skill == "technical"
                ? "bg-gradient-to-r from-[#ca4ec7] to-purple-700 text-white shadow-lg"
                : "text-gray-300  hover:text-yellow-500"
            }`}
          >
            Technical Skills
          </button>
          <button
            onClick={() => setSkill("soft")}
            className={`px-6 py-3  rounded-lg text-semibold text-lg transition-all duration-200 ${
              skill == "soft"
                ? "bg-gradient-to-r from-[#ca4ec7] to-purple-700 text-white shadow-lg"
                : "text-gray-300  hover:text-yellow-500"
            }`}
          >
            Soft Skills
          </button>
        </div>

        {/* Map to show output */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills[skill].map((skill, index) => (
            <div
              key={index}
              className="bg-[#121212] p-6 rounded-lg shadow-md transition-shadow duration-300 hover:shadow-2xl"
            >
              <div className="flex items-center space-x-4 mb-3">
                <h3 className="text-xl font-semibold text-gray-300">
                  {skill.name}
                </h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center ">
                  <span className="text-md text-gray-500">
                    {getproflabel(skill.prof)}
                  </span>
                  <span className="text-sm font-semibold text-yellow-600">
                    {skill.prof}%
                  </span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-full bg-gradient-to-r from-[#ca4ec7] to-purple-700 rounded-full transition-all duration-200"
                    style={{ width: `${skill.prof}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
