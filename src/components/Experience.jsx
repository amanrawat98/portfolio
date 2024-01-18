import React from "react";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: "../src/assets/html.png",
      title: "HTML",
      style: 'shadow-orange-500',
    },
    {
      id: 2,
      src: "../src/assets/reacti.png",
      title: "REACT",
      style: 'shadow-purple-500',
    },
    {
      id: 3,
      src: "../src/assets/css.png",
      title: "CSS",
      style: 'shadow-blue-500',
    },
    {
      id: 4,
      src: "../src/assets/js.png",
      title: "JAVASCRIPT",
      style: 'shadow-red-500',
    },
    {
      id: 5,
      src: "../src/assets/python.png",
      title: "PYTHON",
      style: 'shadow-pink-500',
    },
  ];

  return (
    <div
      name="experience"
      className=" bg-gradient-to-b from-black to-gray-500 w-full h-full sm:my-3  flex justify-center items-center md:mb-0"
    >
      <div className="max-w-screen-lg w-full h-full  p-3 flex flex-col  sm:h-full sm:my-4 mb-[25px]">
        <div className="my-1 px-0 flex justify-center items-start flex-col py-4 text-white">
          <h2 className="text-4xl py-3 border-b-2 border-white ">
           
            Experience
          </h2>
          <p className="text-2xl py-2">
            
            These are the technologies That I have Worked With.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid- md:grid-cols-3 rounded-md px-8 gap-3 md:gap-7">
          {techs.map(({ id, src, title, style }) => (
            <div
              id={id}
              className={` my-1 rounded-lg w-full hover:scale-105 duration-200 shadow-md ${style} `}
            >
              <img
                className="rounded-md w-42 mx-auto px-2 py-3 h-40 object-cover " 
                src={src}
                alt=""
              />
              <button className="mt-2 text-white text-2xl w-full m-auto py-2 ">
                
                {title}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
