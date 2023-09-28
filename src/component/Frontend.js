import React from "react";
import { motion } from "framer-motion";

export const Technology = ({ name, percentage }) => {
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
      <div className="w-full lg:flex lg:justify-center lg:items-center sm:flex-none sm:justify-start">
        <div className="p-2 bg-dark dark:bg-light  inline-block rounded-full text-light dark:text-dark font-bold lg:text-center xs:font-semibold xs:text-sm">
          ico
        </div>
      </div>
      <div className="text-dark dark:text-light font-medium mt-3 lg:text-center sm:text-start xs:text-xs">
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
      <Technology name={"Javascript"} percentage={"60%"} />
      <Technology name={"Javascript"} percentage={"60%"} />
      <Technology name={"Javascript"} percentage={"60%"} />
      <Technology name={"Javascript"} percentage={"60%"} />
      <Technology name={"Javascript"} percentage={"60%"} />
      <Technology name={"Javascript"} percentage={"60%"} />
    </div>
  );
};

export default Frontend;
