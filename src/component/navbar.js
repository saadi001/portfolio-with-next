import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  PinterestIcon,
  SunIcon,
  TwitterIcon,
} from "./icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./Hooks/useThemeSwitcher";
import { useState } from "react";

const NavbarPage = () => {
  const router = useRouter();
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const CustomLink = ({ href, title, className = "" }) => {
    return (
      <Link
        href={href}
        className={`${className} relative group dark:text-light`}
      >
        {title}
        <span
          className={`h-[2px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300  ${
            router.asPath === href ? "w-full" : "w-0"
          } dark:bg-light`}
        >
          &nbsp;
        </span>
      </Link>
    );
  };

  const CustomMobileLink = ({ href, title, className = "", toggle }) => {
    const handleClick = () =>{
      toggle();
      router.push(href)
    }
    return (
      <button
        onClick={handleClick}
        className={`${className} relative group my-2 last:mb-2`}
      >
        {title}
        <span
          className={`h-[2px] inline-block bg-light dark:bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300  ${
            router.asPath === href ? "w-full" : "w-0"
          } `}
        >
          &nbsp;
        </span>
      </button>
    );
  };

  return (
    <header className="w-full px-32 py-9 font-medium flex justify-between items-center z-10 xl:px-24 lg:px-16 md:px-12 sm:px-8">
      <button
        className="flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out  h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-150 ease-out  h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out  h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href={"/"} title={"Home"} className="mr-4" />
          <CustomLink href={"/about"} title={"About"} className="mx-4" />
          <CustomLink href={"/projects"} title={"Projects"} className="mx-4" />
          <CustomLink href={"/articles"} title={"Articles"} className="ml-4" />
        </nav>

        <nav className="flex justify-center items-center flex-wrap">
          <motion.a
            href={"/"}
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mr-3"
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            href={"/"}
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <GithubIcon className={"dark:text-light"} />
          </motion.a>
          <motion.a
            href={"/"}
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href={"/"}
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <PinterestIcon />
          </motion.a>
          <motion.a
            href={"/"}
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <DribbbleIcon></DribbbleIcon>
          </motion.a>
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className="ml-3 flex items-center justify-center rounded-full p-1 bg-dark text-light dark:bg-light dark:text-dark"
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>
      

      {/* mobileMenu */}
      {
        isOpen ? 
        <div className="min-w-[70vw] flex-col z-30 justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/90 rounded-lg backdrop-blur-md py-32 text-light dark:text-dark hidden lg:flex">
        <nav className="flex flex-col items-center justify-center">
          <CustomMobileLink href={"/"} title={"Home"} className=" " toggle={handleClick}/>
          <CustomMobileLink href={"/about"} title={"About"} className="" toggle={handleClick}/>
          <CustomMobileLink href={"/projects"} title={"Projects"} className="" toggle={handleClick}/>
          <CustomMobileLink href={"/articles"} title={"Articles"} className="" toggle={handleClick}/>
        </nav>

        <nav className="flex justify-center items-center flex-wrap mt-2">
          <motion.a
            href={"/"}
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mr-3 sm:mx-1"
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            href={"/"}
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3 sm:mx-1"
          >
            <GithubIcon className={"dark:text-light"} />
          </motion.a>
          <motion.a
            href={"/"}
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3 sm:mx-1"
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href={"/"}
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3 sm:mx-1"
          >
            <PinterestIcon />
          </motion.a>
          <motion.a
            href={"/"}
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3 sm:mx-1"
          >
            <DribbbleIcon></DribbbleIcon>
          </motion.a>
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className="ml-3 sm:ml-1 flex items-center justify-center rounded-full p-1 bg-dark text-light dark:bg-light dark:text-dark"
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>
        : null
      }

      <div className="absolute left-[50%] top-1 translate-x-[-50%] z-20">
        <Logo></Logo>
      </div>
    </header>
  );
};

export default NavbarPage;
