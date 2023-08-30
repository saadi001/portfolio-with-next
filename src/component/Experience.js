import React, { useRef } from "react";
import {motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null)
    return (
      <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
        <LiIcon reference={ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        >
          <h3 className="capitalize font-bold text-2xl">
            {position}&nbsp;
            <a
              target="_blank"
              className="text-primary dark:text-primaryDark capitalize"
              href={companyLink}
            >
              @{company}
            </a>
          </h3>
          <span className="capitalize font-medium text-dark/75 dark:text-light/75">
            {time} | {address}
          </span>
          <p className="font-medium w-full">{work}</p>
        </motion.div>
      </li>
    );
  };

const Experience = () => {
  const ref = useRef(null)
  const {scrollYProgress} = useScroll(
    {
        target: ref,
        offset: ["start end", "center start"]
    }
  )

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center dark:text-light">
        Experience
      </h2>


      <div ref={ref} className="w-[75%] mx-auto relative">

        <motion.div style={{scaleY:scrollYProgress}} className="absolute left-9 top-4 w-[4px] h-full bg-dark dark:bg-light origin-top"/>

        <ul className="w-full flex flex-col items-center justify-between ml-4">
          <Details
            position={"Software Engineer"}
            company={"google"}
            companyLink={"www.google.com"}
            time={"2022-present"}
            address={"Mountain view, CA"}
            work={
              "work on a team responsible for developing for new feature for google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
            }
          />
          <Details
            position={"Software Engineer"}
            company={"google"}
            companyLink={"www.google.com"}
            time={"2022-present"}
            address={"Mountain view, CA"}
            work={
              "work on a team responsible for developing for new feature for google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
            }
          />
          <Details
            position={"Software Engineer"}
            company={"google"}
            companyLink={"www.google.com"}
            time={"2022-present"}
            address={"Mountain view, CA"}
            work={
              "work on a team responsible for developing for new feature for google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
            }
          />
          <Details
            position={"Software Engineer"}
            company={"google"}
            companyLink={"www.google.com"}
            time={"2022-present"}
            address={"Mountain view, CA"}
            work={
              "work on a team responsible for developing for new feature for google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
            }
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
