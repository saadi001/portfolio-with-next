import React from "react";
import { motion } from "framer-motion";

const TransitionEffect = () => {
  return (
    <>
    {/* updated transition  */}
    <motion.div
        className="fixed left-0 right-0 bottom-full w-screen h-screen z-50 bg-[#009688]"
        initial={{ y: "100%", height: "100%" }}
        animate={{ y: "0%", height: "0%" }}
        exit={{ y: ["0%", "100%"], height: ["0%", "100%"] }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      ></motion.div>
    {/* <motion.div
        className="fixed left-0 right-0 bottom-full w-screen h-screen z-40 bg-light"
        initial={{ y: "100%", height: "100%" }}
        animate={{ y: "0%", height: "0%" }}
        exit={{ y: ["0%", "100%"], height: ["0%", "100%"] }}
        transition={{delay: 0.2, duration: 0.6, ease: "easeInOut" }}
      ></motion.div> */}

      {/* old transition  */}
      {/* <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-50 bg-primary"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      ></motion.div>

      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-40 bg-light"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
      ></motion.div>

      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-dark"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
      ></motion.div> */}
    </>
  );
};

export default TransitionEffect;
