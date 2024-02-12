import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuLinks = [
    { name: "ABOUT", link: "#about" },
    { name: "EDUCATION", link: "#education" },
    { name: "SKILLS", link: "#skills" },
    { name: "PROJECTS", link: "#projects" },
    { name: "CONTACT", link: "#contact" },
  ];
  return (
    <nav className={`fixed w-full left-0 top-0 z-[999] bg-black text-white`}>
      <div className="flex items-center justify-between">
        <div className="mr-7 my-1">
          <a href="#home" className="flex flex-row">
            <div className="text-4xl text-cyan-600"> <ion-icon name="code-outline"></ion-icon></div>
         
            <h4 className="text-4xl uppercase font-bold text-white">
              Port<span className="text-cyan-600">fo</span>lio
            </h4>
          </a>
        </div>
        <div className={`  text-white lg:block   hidden px-7 py-2 font-medium  `}>
          <ul className="flex items-center gap-1 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li key={i} className="px-6 hover:text-cyan-600">
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`z-[999]  text-cyan-600 text-3xl  lg:hidden mx-10`}
        >
          <ion-icon name="menu"></ion-icon>
        </div>
        <div
          className={`lg:hidden text-gray-900 absolute w-2/3 h-screen
      px-7 py-2 font-medium bg-white top-0 duration-300 ${
        open ? "right-0" : "right-[-100%]"
      }`}
        >
          <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li
                onClick={() => setOpen(false)}
                key={i}
                className="px-6 hover:text-cyan-600"
              >
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
