import React from "react";
import { motion } from "framer-motion";
import { BootstrapIcon, CssIcon, HtmlIcon, JsIcon, NextIcon, ReactIcon, ReduxIcon, TailwindIcon, TypescriptIcon } from "./icons";

export const Technology = ({ icon, name, percentage }) => {
  return (
    <motion.div
      className="pl-4 xs:pl-2"
      initial={{ x: 40, opacity: 0.8 }}
      whileInView={{
        x: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut" },
      }}
    >
      <div className="w-full lg:flex lg:justify-center lg:items-center ">
        <div className="p-2 inline-block rounded-full text-light dark:text-dark font-bold lg:text-center xs:font-semibold xs:text-sm">
          <div className="w-8">
            {icon}
          </div>
        </div>
      </div>
      <div className="text-dark dark:text-light font-medium mt-2 pl-2 lg:pl-0 lg:text-center  xs:text-xs">
        {name} ({percentage})
      </div>
    </motion.div>
  );
};


const Frontend = ({ className }) => {
  return (
    <div
      className={`${className} `}
    >
      {/* <Technology icon={<HtmlIcon></HtmlIcon>} name={"HTML5"} percentage={"90%"} />
      <Technology icon={<CssIcon></CssIcon>} name={"CSS3"} percentage={"70%"} /> */}
      <Technology icon={<JsIcon></JsIcon>} name={"Javascript"} percentage={"60%"} />
      <Technology icon={<TypescriptIcon></TypescriptIcon>} name={"TypeScript"} percentage={"60%"} />
      <Technology icon={<TailwindIcon></TailwindIcon>} name={"Tailwind CSS"} percentage={"80%"} />
      {/* <Technology icon={<BootstrapIcon></BootstrapIcon>} name={"Bootstrap"} percentage={"70%"} /> */}
      <Technology icon={<ReactIcon></ReactIcon>} name={"React js"} percentage={"70%"} />
      <Technology icon={<ReduxIcon></ReduxIcon>} name={"Redux"} percentage={"90%"} />
      <Technology icon={<NextIcon></NextIcon>} name={"Next js"} percentage={"70%"} />
      

      
    </div>
  );
};

export default Frontend;
