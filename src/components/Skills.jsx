import React from "react";

const Skills = () => {
  const skills = [
    {
      logo: "logo-html5",
      level: "HTML",
      count: 90,
    },
    {
      logo: "logo-css3",
      level: "CSS",
      count: 90,
    },
    {
      logo: "logo-nodejs",
      level: "NODE JS",
      count: 60,
    },
    {
      logo: "logo-react",
      level: "REACT",
      count: 80,
    },
    {
      logo: "logo-python",
      level: "PYTHON",
      count: 50,
    },

    {
      logo: "logo-javascript",
      level: "JAVASCRIPT",
      count: 80,
    },
    {
      logo: "code-outline",
      level: "C++",
      count: 90,
    },
    {
      logo: "code-outline",
      level: "SOLIDITY",
      count: 50,
    },
    {
      logo: "code-outline",
      level: "C",
      count: 80,
    },
    {
      logo: "code-outline",
      level: "MONGO DB",
      count: 80,
    },
  ];
  return (
    <section id="skills" className="py-10 bg-gray-800 relative w-full">
      <div className="mt-8 text-gray-100 text-center">
        <div className="flex flex-row justify-center">
        <div className="text-4xl mr-5 text-cyan-600">
        <ion-icon name="ribbon-outline"></ion-icon>
        </div>
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3></div>
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
          {skills?.map((skill, i) => (
            <div
              key={i}
              className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl"
            >
              <div
                style={{
                  background: `conic-gradient(rgb(8,145,170) ${skill.count}%,#ddd ${skill.count}%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                  <ion-icon name={skill.logo}></ion-icon>
                </div>
              </div>
              <p className="text-xl mt-3">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
