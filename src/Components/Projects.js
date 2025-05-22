import React from "react";
import { ExternalLink } from "lucide-react";
export default function Project() {
  const projects = [
    {
      id: 1,
      title: "Skribbl.io UI",
      description:
        "Redesigned Figma’s UI to improve usability by adding new features.",
      link: "https://www.figma.com/proto/YvJ8slHQk0kSaVoiom8him/SKRIBBL-REDESIGN?node-id=110-380&starting-point-node-id=110%3A380&t=fG2KR5cN4e7gIfPM-1",
      technologies: ["Figma"],
    },
    {
      id: 2,
      title: "Sleepy Owl App UI",
      description: "Designed a concept mobile application UI for SleepyOwl.",
      link: "https://www.figma.com/proto/4h2XLDK5wZmxvc7SVKFhyC/app-design?node-id=0-1&t=aswjmN9EoKvS66an-1",
      technologies: ["Figma"],
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "A modern portfolio website built with React and Tailwind CSS.",
      link: "https://jasmeet-react-portfolio.vercel.app/",
      technologies: ["React", "Tailwind CSS", "Responsive Design"],
    },
    {
      id: 4,
      title: "Restaurant Website",
      description:
        "Created a responsive website for a restaurant to showcase design and layout skills.",
      link: "https://jasmeethinks.github.io/Coursera-Projects/static-website/index.html",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    },
    {
      id: 5,
      title: "Other Projects",
      description: "Digital graphics and Handmade thread-knotting craft",
      link: "https://drive.google.com/drive/folders/15cH4Rg6fkgqtUTc2fykg_rm6YZ7WHo36?usp=sharing",
      technologies: ["none"],
    },
  ];

  return (
    <div id="Projects" className="min-h-auto w-full bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl pb-4 font-bold bg-gradient-to-r from-yellow-600 via-yellow-700 to-orange-800 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="mt-4 text-xl text-center text-gray-500 font-semibold">
            A showcase of all the projects that I have worked on
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-[#121212] rounded-xl shadow-lg hover:shadow-xl hover:border-2 hover:border-yellow-700 transition-all duration-200 p-5"
            >
              <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#ca4ec7] to-purple-500 bg-clip-text text-transparent mb-5">
                {project.title}
              </h2>
              <p className="text-gray-400 mb-5">{project.description}</p>
              <div className="flex flex-wrap gap-4 mb-2">
                {project.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="px-3 py-2 bg-gray-800 text-white rounded-full text-sm font-medium"
                  >
                    {tech}
                  </div>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                className="inline-flex items-center text-blue-400 hover:text-yellow-700 font-semibold transition-all duration-200"
              >
                View Project
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
