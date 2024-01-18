import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";


const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },

    {
      id: 2,
      link: "about",
    },

    {
      id: 3,
      link: "portfolio",
    },

    {
      id: 4,
      link: "experience",
    },

    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div class="navbar" className="flex justify-between items-center w-full h-20 text-white fixed px-4 bg-black">
      <div>
        <h1 className="text-4xl  ml-2 font-signature"> Aman  </h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium  hover:scale-105 duration-200 text-2xl text-gray-500"
          >
            <Link to={link} smooth duration={500}> {link}</Link> 
          </li>
        ))}
      </ul>

      <div
        className="cursor-pointer pr-4 text-gray-500 z-10 md:hidden "
        onClick={() => {
          setNav(!nav);
        }}
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul
          className="bg-black text-gray-500 flex flex-col h-screen w-full absolute top-0 left-0 justify-center 
items-center bg-gradient-to-b from-black to-slate-500"
        >
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-5 text-4xl"
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
