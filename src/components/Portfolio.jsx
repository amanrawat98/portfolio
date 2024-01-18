import React from "react";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnTHpeLQaxjebv4V1_gJ_cPxGYvnK2KvyYlg&usqp=CAU",
    },
    {
      id: 2,
      src: "https://www.masaischool.com/blog/content/images/2022/06/Linked-List.png",
    },
    {
      id: 3,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfvXaIN21VOsmP6gh0KN97uROnE-OvpX-Gog&usqp=CAU",
    },
    {
      id: 4,
      src: "https://cdn.hackr.io/uploads/posts/attachments/1678885355vB1eV5qAr0.png",
    },
    {
      id: 5,
      src: "https://www.masaischool.com/blog/content/images/2022/06/Linked-List.png",
    },
    {
      id: 6,
      src: "https://ik.imagekit.io/ably/ghost/prod/2023/09/best-react-websocket-library.png?tr=w-1728,q-50",
    },
  ];

  return (
    <div
      name="portfolio"
      className=" w-full bg-gradient-to-b from-black to-gray-500 md:h-screen text-white flex items-center justify-center"
    >
      <div className="max-w-screen-lg sm:my-3">
        <div className="pb-8 pt-[10px] px-4">
          <p className="sm: text-3xl md:text-5xl sm:mt-2 font-bold inline border-b-2 border-gray-500 ">
            Portfolio
          </p>
          <p className="mt-4 text-2xl"> Checkout My Some of my Work Right Here</p>
        </div>

        <div className="grid sm:grid-cols-2 sm:my-3  md:grid-cols-3 gap-8 px-6  md:px-0 sm:mb-[45px]  ">
          {portfolios.map(({ id, src }) => (
            <div className="shadow-md shadow-gray-500 rounded-lg  ">
              <img
                id={id}
                className="rounded-md hover:scale-105 duration-200  w-full h-40"
                src={src}
                alt=""
              />

              <div className="flex justify-center items-center ">
                <button className="w-1/2 px-6 py-3 m-2 text-[20px] duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-2 text-[20px] duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
