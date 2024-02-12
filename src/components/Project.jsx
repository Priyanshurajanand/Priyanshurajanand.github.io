import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/project-1.png";
import project2 from "../assets/images/project-2.png";
import project3 from "../assets/images/project-3.png";
import project4 from "../assets/images/project-4.png";
import project5 from "../assets/images/project-5.png";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Pagination, Autoplay } from "swiper";

SwiperCore.use([Pagination]);

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Travel App",
      github_link: "https://github.com/Priyanshurajanand/Tour-and-Travel",
      live_link: "#",
    },
    {
      img: project2,
      name: "Resume Builder",
      github_link: "https://github.com/Priyanshurajanand/Resume-Builder",
      live_link: "#",
    },
    {
      img: project3,
      name: "Portfolio",
      github_link: "https://github.com/Priyanshurajanand/Portfolio",
      live_link: "#",
    },
    {
      img: project4,
      name: "Support Needy",
      github_link: "https://github.com/Priyanshurajanand/Support-Needy",
      live_link: "https://support-needy.vercel.app",
    },
    {
      img: project5,
      name: "Tic-Tac-Toe",
      github_link: "https://github.com/Priyanshurajanand/Tic-Tac-Toe",
      live_link: "https://simplegame-tic-tac-toe.netlify.app",
    },
  ];

  const [swiper, setSwiper] = useState(null);
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center mt-8">
        <div className="flex flex-row justify-center">
        <div className="text-4xl mr-5 text-cyan-600">
          <ion-icon name="id-card-outline"></ion-icon>
        </div>
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3></div>
        
      </div>
      <br />
      <div className="flex justify-center item-center">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesperview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            onSwiper={(swiper) => {
              setSwiper(swiper);
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg " />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex justify-center gap-10 mt-5 items-center  rounded-full">
            <button
              className="button text-4xl   bg-gray-900 rounded-full flex items-center justify-center hover:text-cyan-600"
              onClick={() => {
                swiper.slidePrev();
              }}
            >
              <ion-icon name="arrow-back-circle-outline"></ion-icon>
            </button>
            <button
              className="button text-4xl  bg-gray-900 rounded-full flex items-center justify-center hover:text-cyan-600"
              onClick={() => {
                swiper.slideNext();
              }}
            >
              <ion-icon name="arrow-forward-circle-outline"></ion-icon>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
