import React from "react";

const About = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-black to-gray-500" name="about">
      <div className="max-w-screen-lg flex flex-col items-center justify-center text-white w-full h-screen mx-auto ">
        <div className="text-4xl font-bold border-b-4 border-gray-500 inline">
          <p> About us</p>
        </div >

        <p className="text-xl mt-20 p-5">
          
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
          voluptates distinctio rerum dolore totam beatae nisi unde impedit
          eaque neque facilis, veritatis repellat commodi ipsam natus doloribus
          reiciendis cum minima.
        </p>

        <br />
        <p className="text-xl p-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
          delectus atque placeat commodi reprehenderit possimus tenetur ab neque
          adipisci minus dolor voluptate vel, quae esse deleniti excepturi?
          Placeat, possimus qui?
        </p>
      </div>
    </div>
  );
};

export default About;
