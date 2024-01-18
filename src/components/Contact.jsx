import React from "react";

const Contact = () => {
  return (
    <div name="contact" className="bg-gradient-to-b from-black to-gray-500 w-full h-full  ">
      <div className="h-full max-w-screen-lg  flex flex-col justify-center  mx-auto mt-0 sm:mx-0 md:px-6 pb-12">
        <div className=" flex flex-col items-start justify-start pt-28 px-20"> 
          <h2 className="text-4xl text-white mb-4 border-b-2 inline border-white "> Contact us</h2>
          <p className="text-2xl text-white mb-5 pb-5">Submit the form to get in touch with me </p>
        </div>

        <div className="flex  items-center justify-center md:ml-[100px] md:w-full "> 
          <form action="https://getform.io/f/c89a0417-fa45-4766-a1eb-ddd01a71f2d8" method="POST" className="flex flex-col  w-full justify-center items-center sm:mx-2 md:mx-70 ">
            <input className=" border-2 rounded-md border-white bg-transparent focus:outline-none px-3 py-2 my-4 w-[270px] md:my-1 md:px-4 md:w-[506px] placeholder:italic placeholder:text-slate-400 text-white"
              type="text"
              name="name"
              id=""
              placeholder="Enter your Name"
            />
            <input
            className=" border-2 rounded-md border-white bg-transparent px-3 py-2 mb-5 w-[270px] md:my-1 md:px-4 md:w-[506px]  placeholder:italic placeholder:text-slate-400  text-white"
              type="email"
              name="email"
              id=""
              placeholder="Enter your Email"
            />
            <textarea name="extra detail" id="" cols="30" rows="10" placeholder="Enter your Message" className=" border-2 rounded-md border-white bg-transparent sm:my-4 sm:mx-auto w-[70%] py-2 md:px-4 md:py-2 md:my-3 md:w-[506px] placeholder:italic placeholder:text-slate-400  text-white"></textarea>

            <button className=" bg-gradient-to-b from-cyan-500 to-blue-600 font-normal md:font-bold md:text-[20px] text-white font-extralight- w-fit px-6 py-2 mt-7 rounded-md hover:scale-105 duration-200">
            let's talk</button>
          </form>
        
        </div >
        
      </div>
    </div>
  );
};

export default Contact;
