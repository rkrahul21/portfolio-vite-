import {
    FaReact,
    FaNode,
    FaGithub,
    FaHtml5,
    FaCss3Alt,
  } from "react-icons/fa";
  import { DiJavascript1 } from "react-icons/di";
  import { TbBrandCpp } from "react-icons/tb";
  import {
    SiTailwindcss,
    SiExpress,
    SiMongodb,
    SiMongoose,
  } from "react-icons/si";
  import { TbBrandNextjs } from "react-icons/tb";
  
  const SkillSection = () => {
    return (
      <div  id="skills" className="w-full flex justify-center gap-2 flex-wrap md:w-[80%] py-4">
        <span className="flex items-center gap-1 sm:text-lg text-base font-light bg-[#FF9D23] hover:text-[#FF9D23] hover:bg-white hover:font-semibold transition-all sm:py-2 py-2 sm:px-6 px-5 rounded-full cursor-default">
          <TbBrandCpp />
          C++
        </span>
        <span className="flex items-center gap-1 sm:text-lg text-base font-light bg-[#FF9D23] hover:text-[#FF9D23] hover:bg-white hover:font-medium transition-all sm:py-2 py-2 sm:px-6 px-5 rounded-full cursor-default">
          <TbBrandNextjs />
          Nextjs
        </span>
        <span className="flex items-center gap-1 sm:text-lg text-base font-light bg-[#FF9D23] hover:text-[#FF9D23] hover:bg-white hover:font-medium transition-all sm:py-2 py-2 sm:px-6 px-5 rounded-full cursor-default">
          <FaReact />
          ReactJs
        </span>
        <span className="flex items-center gap-1 sm:text-lg text-base font-light bg-[#FF9D23] hover:text-[#FF9D23] hover:bg-white hover:font-medium transition-all sm:py-2 py-2 sm:px-6 px-5 rounded-full cursor-default">
          <SiExpress />
          Express
        </span>
        <span className="flex items-center gap-1 sm:text-lg text-base font-light bg-[#FF9D23] hover:text-[#FF9D23] hover:bg-white hover:font-medium transition-all sm:py-2 py-2 sm:px-6 px-5 rounded-full cursor-default">
          <FaNode /> NodeJs
        </span>
        <span className="flex items-center gap-1 sm:text-lg text-base font-light bg-[#FF9D23] hover:text-[#FF9D23] hover:bg-white hover:font-medium transition-all sm:py-2 py-2 sm:px-6 px-5 rounded-full cursor-default">
          <SiMongodb />
          MongoDB
        </span>
        <span className="flex items-center gap-1 sm:text-lg text-base font-light bg-[#FF9D23] hover:text-[#FF9D23] hover:bg-white hover:font-medium transition-all sm:py-2 py-2 sm:px-6 px-5 rounded-full cursor-default">
          <SiMongoose />
          Mongoose
        </span>
        
        <span className="flex items-center gap-1 sm:text-lg text-base font-light bg-[#FF9D23] hover:text-[#FF9D23] hover:bg-white hover:font-medium transition-all sm:py-2 py-2 sm:px-6 px-5 rounded-full cursor-default">
          <SiTailwindcss />
          Tailwind
        </span>
        <span className="flex items-center gap-1 sm:text-lg text-base font-light bg-[#FF9D23] hover:text-[#FF9D23] hover:bg-white hover:font-medium transition-all sm:py-2 py-2 sm:px-6 px-5 rounded-full cursor-default">
          <FaHtml5 />
          Html
        </span>
        <span className="flex items-center gap-1 sm:text-lg text-base font-light bg-[#FF9D23] hover:text-[#FF9D23] hover:bg-white hover:font-medium transition-all sm:py-2 py-2 sm:px-6 px-5 rounded-full cursor-default">
          <FaCss3Alt />
          Css
        </span>
        <span className="flex items-center gap-1 sm:text-lg text-base font-light bg-[#FF9D23] hover:text-[#FF9D23] hover:bg-white hover:font-medium transition-all sm:py-2 py-2 sm:px-6 px-5 rounded-full cursor-default">
          <DiJavascript1 />
          Javascript
        </span>
        
        <span className="flex items-center gap-1 sm:text-lg text-base font-light bg-[#FF9D23] hover:text-[#FF9D23] hover:bg-white hover:font-medium transition-all sm:py-2 py-2 sm:px-6 px-5 rounded-full cursor-default">
          Shadcn
        </span>
        
        <span className="flex items-center gap-1 sm:text-lg text-base font-light bg-[#FF9D23] hover:text-[#FF9D23]bg-white hover:font-medium transition-all sm:py-2 py-2 sm:px-6 px-5 rounded-full cursor-default">
          <FaGithub />
          Github
        </span>
        <span className="flex items-center gap-1 sm:text-lg text-base font-light bg-[#FF9D23] hover:text-[#FF9D23] hover:bg-white hover:font-medium transition-all sm:py-2 py-2 sm:px-6 px-5 rounded-full cursor-default">
          Data Structures
        </span>
        <span className="flex items-center gap-1 sm:text-lg text-base font-light bg-[#FF9D23] hover:text-[#FF9D23] hover:bg-white hover:font-medium transition-all sm:py-2 py-2 sm:px-6 px-5 rounded-full cursor-default">
          Algorithms
        </span>
        <span className="flex items-center gap-1 sm:text-lg text-base font-light bg-[#FF9D23] hover:text-[#FF9D23] hover:bg-white hover:font-medium transition-all sm:py-2 py-2 sm:px-6 px-5 rounded-full cursor-default">
          DBMS
        </span>
      </div>
    );
  };
  
  export default SkillSection;