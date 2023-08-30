import React from "react";
import { motion } from "framer-motion";

const Skills = () => {

  const Skill = ({name, x, y}) =>{
    return (
      <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light dark:bg-light dark:text-dark px-6 py-3 shadow-dark cursor-pointer absolute"
        whileHover={{scale: 1.05}}
        initial={{x:0, y:0}}
        whileInView={{x:x, y:y, transition: {duration: 1.5}}}
        viewport={{once: true}}
        >
          {name}
        </motion.div>
    )
  }
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark">
        <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark dark:bg-light text-light dark:text-dark p-6 shadow-dark 
        cursor-pointer"
        whileHover={{scale: 1.05}}>
          Web
        </motion.div>
        <Skill name="HTML" x={"-27vw"} y={"2vw"}/>
        <Skill name="CSS" x={"-5vw"} y={"-11vw"}/>
        <Skill name="Javascript" x={"20vw"} y={"6vw"}/>
        <Skill name="ReactJs" x={"0vw"} y={"12vw"}/>
        <Skill name="NextJs" x={"-20vw"} y={"-15vw"}/>
        <Skill name="Express" x={"15vw"} y={"-15vw"}/>
        <Skill name="MongoDB" x={"32vw"} y={"-5vw"}/>
        <Skill name="Firebase" x={"-25vw"} y={"18vw"}/>
        <Skill name="TailwindCSS" x={"18vw"} y={"18vw"}/>

      </div>
    </>
  );
};

export default Skills;
