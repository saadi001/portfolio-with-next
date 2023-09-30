import Image from "next/image";
import React from "react";
import projectImage from "../../public/images/articles/create loading screen in react js.jpg";
import { motion } from "framer-motion";

const FramerImage = motion(Image);

const ProjectCard = ({ project }) => {
  // console.log(project);
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="p-5 bg-white rounded-lg"
    >
      <div className="w-full ">
        <div className="w-full overflow-hidden rounded-md">
          <FramerImage
            src={projectImage}
            alt="projectImage"
            className="w-full rounded-md"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
        </div>
        <div className="w-full mt-5">
          <p className="text-primary text-sm font-medium sm:text-xs">
            {project?.name}
          </p>
          <p className="mt-2 text-xl sm:text-base font-semibold">
            {project?.shortDescription}
          </p>
          <p className="mt-4 text-base sm:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            deserunt labore, consequuntur animi molestias dolor!
          </p>
          <div className="w-full mt-4 grid grid-cols-2 gap-3">
            <button className="border-2 border-dark rounded-md py-1.5 font-medium hover:bg-dark hover:text-light  xs:text-sm xs:py-1">
              Live link
            </button>
            <button className="border-2 border-dark rounded-md py-1.5 font-medium bg-dark hover:bg-white text-light hover:text-dark xs:text-sm xs:py-1">
              Github
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;