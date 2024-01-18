import React from "react";
import { SlSocialLinkedin, SlSocialPintarest  } from "react-icons/sl";
import { FaTwitter } from "react-icons/fa";
import { GrResume } from "react-icons/gr";

const Social = () => {

const links = [
{
id:1,
child: ( 
<>           
LinkedIn <SlSocialLinkedin size={30} />
</>
),
href: '#',
style: "rounded-tr-md"
},

{
  id:2,
  child: ( 
  <>           
  Pinterest <SlSocialPintarest size={30} />
  </>
  ),
  href: '#',
  },
  {

  id:3,
  child: ( 
  <>           
  Twitter <FaTwitter size={30} />
  </>
  ),
  href: '#',
  },
  {

    id:4,
    child: ( 
    <>           
    Resume <GrResume size={30} /> 
    </>
    ),
    href: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYscfUBUbqwGd_DHVhG-ZjCOD7MUpxp4uhNe7toUg4ug&s',
    style: "rounded-br-md",
    download:true,
    },


]

  return (
    <div name="social"className=" hidden lg:flex flex-col top-[35%] left-[0] fixed">
      <ul>

        {links.map(({id,child,style,href,download}) => (
        <li key={id}
        className= {"bg-gray-500 w-40 h-14 px-4 flex justify-between items-center ml-[-100px] hover:rounded-md hover:duration-300 hover:ml-[10px]" + " " + style}  >
        
          <a
            href={href}
            download={download}
            className="text-white flex justify-between items-center w-full"
            target="_blank"
          >
            {child}
          </a>
        </li>
        ))}

      </ul>
    </div>
  );
};

export default Social;
