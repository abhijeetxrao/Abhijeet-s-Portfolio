import React from "react";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import image from "../../assets/personalphoto.jpg";
 
function About() {
  return (
    <section
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[19vw] font-sans mt-16 md:mt-24 lg:mt-32"
      id="about"
    >
      
        <div className="flex flex-col-reverse justify-between items-center md:flex-row">
          <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">Hi, I am</h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
              Abhijeet Rao
            </h1>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
              <span className="text-white ">I am a{" "}</span>
              <span className="text-[#8245ec]">
                <TypeAnimation
                  sequence={[
                    "Developer",
                    2000,
                    "",
                    500,
                    "Coder",
                    2000,
                    "",
                    500,
                    "Problem-Solver",
                    2000,
                    "",
                    500,
                  ]}
                  speed={40}
                  repeat={Infinity}
                  cursor={true}
                />
              </span>
            </h3>

            <p className="text-base sm:text-lg md:text-lg text-gray-400 leading-relaxed mt-8 font-semibold">
              I am a full-stack developer with over 2 years of experience in
              building scalable web applications. Skilled in both front-end and
              back-end development, I specialize in the MERN stack and other
              modern technologies to create seamless user experiences and
              efficient solutions.
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-bold text-white  rounded-4xl py-2 px-4 inline-block mt-10 hover:scale-105 transform duration-300 transition cursor-pointer"
              style={{
                background: "linear-gradient(90deg, #8245ec, #a855f7)",
                boxShadow: "0 0 2px #8245ec,0 0 4px #8245ec,0 0 40px #8245ec",
              }}
            >
              DOWNLOAD CV
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center md:text-left">
            <Tilt
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <img
                src={image}
                alt="Abhijeet Rao"
                className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
              />
            </Tilt>
          </div>
        </div>
    </section>
  );
}

export default About;
