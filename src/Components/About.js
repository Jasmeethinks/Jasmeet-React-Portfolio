import React from "react";
export default function (About) {
  return (
    <div id="About" className="min-h-auto w-full bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Background Blob Behind Skills Section */}
        <div className="relative">
          <div className="absolute inset-0 flex justify-center">
            <div className="w-[200px] h-[200px] bg-gradient-to-r from-indigo-600 via-purple-600 to-yellow-600 rounded-full blur-3xl opacity-80 z-0"></div>
          </div>
        </div>
        {/* Profile Image */}
        <div className="relative flex items-center justify-center mb-16">
          <img
            src="/profile.PNG"
            alt="Profile Image"
            className="rounded-full transform transition duration-100 shadow-2xl relative z-10 w-48 h-48 object-cover"
          />
        </div>

        {/* Hero Section */}
        <div className="w-full md:w-[400px] lg:w-[400px] mx-auto text-center space-y-8 m-5">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-yellow-600 bg-clip-text text-transparent">
            Hi, I am Jasmeet
          </h1>
        </div>
        <div className="space-y-6 text-center max-w-3xl mx-auto text-lg text-gray-400 pb-10">
          I am a Psychology & Philosophy major student. I am passionate about
          creating ergonomic design spaces for humans following design
          principles, human cognition, & philosophy of design.
        </div>
        {/* Professional Background*/}
        <div className="bg-[#121212] shadow-md hover:shadow-2xl mb-16 p-6 rounded-xl">
          <div className="text-left max-w-4xl mx-auto">
            <h1 className="text-3xl font-semibold bg-gradient-to-r from-yellow-600 via-yellow-700 to-orange-800 bg-clip-text text-transparent mb-2 px-5">
              Professional Journey{" "}
            </h1>
            <p className="text-lg text-gray-300 text-justify px-5 py-5">
              {" "}
              My design journey began in 2021 with creating graphics for college
              fests, turning into prize-winning logo design and leading creative
              teams for large-scale projects. Alongside, I conducted research
              (one presented at an international 'BITS Pilani' conference).
              Shortly after, I expanded into coding, building and redesigning
              websites to be more user-centric.{" "}
            </p>
          </div>
        </div>
        {/* Specific professionals Section */}
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-200">
            <div className="space-y-6 text-left max-w-4xl mx-auto">
              <h1 className="text-3xl font-semibold bg-gradient-to-r from-[#ca4ec7] to-purple-500 bg-clip-text text-transparent mb-6">
                {" "}
                Rotaract Club of Ramnarain Ruia College (2021-2023)
              </h1>
              <p className="text-lg text-gray-300 text-justify">
                {" "}
                During my time in the club, I served as the Director of
                International Services, where I chaired and conducted over 10 UN
                themed events. In parallel, I also took on the role of Head of
                Creatives & Design for 3 megaprojects, where I was responsible
                for designing and managing the visual identity of each campaign.
                Through these efforts, our digital outreach collectively reached
                and engaged over 2,000 users.{" "}
              </p>
            </div>
          </div>
          <div className="p-6 rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-200 space-y-6">
            <h1 className="text-3xl font-semibold bg-gradient-to-r from-[#ca4ec7] to-purple-500 bg-clip-text text-transparent mb-6">
              {" "}
              Beautiful You Organization (2022-2023)
            </h1>
            <p className="text-lg text-gray-300 text-justify">
              {" "}
              As the Head of Creatives, I was responsible for leading the
              development of digital content aimed at promoting mental health
              awareness and accessibility on social media platforms. This role
              involved not only designing visually compelling and informative
              posts, but also ensuring that the content was empathetic,
              inclusive, and grounded in accurate psychological principles.{" "}
            </p>
          </div>
          <div className="p-6 rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-200 space-y-6">
            <h1 className="text-3xl font-semibold bg-gradient-to-r from-[#ca4ec7] to-purple-500 bg-clip-text text-transparent mb-6">
              {" "}
              Juvenile Observation Center, Noida (2022-2023)
            </h1>
            <p className="text-lg text-gray-300 text-justify">
              {" "}
              As a lead volunteer, I developed interactive digital learning
              modules to support the juvenile detainees' emotional and
              behavioral development. Working in a team, we designed over 50
              unique modules focused on areas like anger management, stress
              regulation, empathy-building, and many more. These involved visual
              storytelling, interactive exercises, and reflective prompts.{" "}
            </p>
          </div>
        </div>
        {/* Research & Experiments */}
        <div className="bg-[#121212] p-8 shadow-lg rounded-xl mb-16">
          <h2 className="text-3xl font-semibold text-center bg-gradient-to-r from-yellow-600 via-yellow-700 to-orange-800 bg-clip-text text-transparent mb-4">
            Professional Development
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left max-w-4xl mx-auto">
            {/* Certifications Section */}
            <div className="space-y-3">
              <h3 className="text-2xl text-gray-500 font-semibold">
                Certifications
              </h3>
              <ol className="list-decimal list-inside text-lg text-gray-300 space-y-1">
                <li>
                  HTML, CSS, and Javascript for Web Development (John Hopkins)
                </li>
                <li>Introduction to User Experience Design (Georgia Tech)</li>
                <li>React.js Basics (DevTown)</li>
              </ol>
            </div>

            {/* Relevant Readings Section */}
            <div className="space-y-3">
              <h3 className="text-2xl text-gray-500 font-semibold">
                Relevant Readings
              </h3>
              <ol className="list-decimal list-inside text-lg text-gray-300 space-y-1">
                <li>Don Norman – The Design of Everyday Things</li>
                <li>Steve Krug – Don’t Make Me Think</li>
                <li>
                  Alan Cooper – About Face: The Essentials of Interaction Design
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
