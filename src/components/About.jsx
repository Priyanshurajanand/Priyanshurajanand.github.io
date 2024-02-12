import React from "react";
import aboutImg from "../assets/images/about.jpeg";
import resume from "../assets/Priyanshu_resume.pdf";
const About = () => {

  return (
    <section id="about" className=" text-white bg-gray-800 w-full  ">
      <div className="text-center mt-8 ">
        <br />
        <h3 className="text-4xl font-semibold mt-10">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
                Hi, I am a web developer . I have a strong background in both
                front-end and back-end development, as well as a solid
                understanding of the entire web development process. I am a
                highly motivated individual who is always looking for new
                challenges and ways to improve my skills. I am a team player who
                is able to work independently when necessary. The main languages
                in my tech stack are JavaScript, React,Node.js and of course
                HTML/CSS. I’m a lifelong learner (currently learning the depth
                of backend ) and love to read, run, and find new things.
              </p>
              <br />
              <br />
              <a href={resume} download>
                <button className="btn-primary ">Download CV</button>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 m-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm  aboutImg ">
              <img
                src={aboutImg}
                alt=""
                className="w-full object-cover bg-cyan-600 rounded-2xl shadow-xl shadow-cyan-500/50 skew-y-3 "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
