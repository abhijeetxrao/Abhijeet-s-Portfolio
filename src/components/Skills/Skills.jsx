import React from "react";
import { skillInfo } from "../../../constants";
import Tilt from "react-parallax-tilt";

function Skills() {
  return (
    <section
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
      id="skills"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl text-white font-bold">SKILLS</h2>
        <div className="bg-[#8245ec] w-24 h-1 mx-auto mt-2"></div>
        <p className="text-gray-400 mx-auto leading-relaxed mt-4 text-lg font-semibold">
          A collection of my technical skills and expertise honed through
          various projects and experiences
        </p>
      </div>

      <div className="flex flex-wrap gap-1 md:gap-6 py-10 justify-between">
        {skillInfo.map((category) => (
          <div
            key={category.title}
            className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white 
          shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
          >
            <h1 className="text-gray-400 text-3xl font-bold text-center">
              {category.title}
            </h1>
            <Tilt
              key={category.title}
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <div className="grid grid-cols-2 lg:grid-cols-3 py-4 px-4 gap-3">
                {category.skills.map((skill) => (
                  <div
                    className="flex justify-center item-center px-2 py-2 my-auto gap-2 flex-row border-gray-800 border-2 bg-transparent text-white rounded-3xl text-center"
                    key={skill.name}
                  >
                    <img
                      src={skill.logo}
                      className="w-6 h-6 md:w-8 md:h-8  my-auto mx-auto"
                      alt={skill.logo}
                    />
                    <h3 className="text-center">{skill.name}</h3>
                  </div>
                ))}
              </div>
            </Tilt>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
