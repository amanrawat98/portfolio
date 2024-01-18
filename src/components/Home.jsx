import React from "react";
import { FaArrowRight  } from "react-icons/fa";

const Home = () => {
  return (
    <div
      name="home"
      className=" h-screen w-full bg-gradient-to-b from-black via-black to-slate-400"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col h-full items-center justify-center px-4  md:flex-row">
        <div className="flex flex-col justify-center h-[60%]">
          <h2 className="text-4xl sm:7xl font-bold text-white"> I'm a Full Stack Developer</h2>
          <p className="text-gray-500 py-4 max-w-md text-[1.5rem] ">
            I have 1 year of Building and designing web devopement. I m
            currently using react js for builing websites.
          </p>

          <div>
            <button className="group w-fit text-white px-6 py-3 my-2 flex flex-row rounded-md 
            items-center bg-gradient-to-r from-cyan-400 to-blue-600  cursor-pointer "  > 
              <span className="text-2xl">Portfolio </span>
              <span className="group-hover:rotate-90 duration-300 mx-2">
                <FaArrowRight size={20} className="ml-1"/>
              </span>
            </button>
          </div>
        </div>
        <div className="h-[40%]">
          <img 
            src="https://media.istockphoto.com/id/1179581978/photo/latin-freelance-coding-expert-using-computer-at-desk.jpg?s=612x612&w=0&k=20&c=ZSOb4n4qO8v6Tx0yj5-Uclnkh_9-Iz5kYJIgvv8FhSk="
            alt="my profile" className="rounded-2xl mx-auto w-3/4 md:w-3/4"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
