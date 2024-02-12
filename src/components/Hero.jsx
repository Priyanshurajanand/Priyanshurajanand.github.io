import React from "react";
import hero from "../assets/images/hero.jpeg";
const Hero = () => {
  const social_media = [
    { logo: "logo-instagram", link: "https://www.instagram.com/priyanshurajanand_/" },
    { logo: "logo-facebook", link: "https://www.facebook.com/priyanshuraj.anand.104" },
    { logo: "logo-linkedin", link: "https://www.linkedin.com/in/priyanshu-raj-anand-431995201/" },
    { logo: "logo-twitter", link: "https://www.twitter.com/PRIYANS27627417" },
    { logo: "logo-github", link: "https://github.com/Priyanshurajanand" },
  ];
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center w-1/2">
        <img src={hero} alt="" className="md:w-1/2 h-full object-cover m-5 rounded-2xl bg-cyan-500 shadow-2xl shadow-cyan-500/50 " />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            I'm <span>Priyanshu Raj Anand</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Fullstack Developer and Blockchain Enthusiastic
          </h4>
          <button className="btn-primary mt-8">Contact Me<ion-icon name="caret-down-outline"></ion-icon></button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-0.1">
            {social_media?.map((media, index) => (
              <div
                key={index}
                className="text-gray-600 hover:text-white cursor-pointer px-5"
              >
                <a href={media.link} target="_blank" rel="noreferrer">
                  <ion-icon name={media.logo}></ion-icon>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
