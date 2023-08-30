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

const NavbarPage = () => {
  const router = useRouter();
  const [mode, setMode] = useThemeSwitcher();

  const CustomLink = ({ href, title, className = "" }) => {
    return (
      <Link href={href} className={`${className} relative group dark:text-light`}>
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
  return (
    <header className="w-full px-32 py-6 font-medium flex justify-between items-center">
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
          <GithubIcon className={"dark:text-light"}/>
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
        <button onClick={() => setMode(mode === "light" ? "dark" : "light")}
        className="ml-3 flex items-center justify-center rounded-full p-1 bg-dark text-light dark:bg-light dark:text-dark"
        >
          {mode === "dark" ? (
            <SunIcon className={"fill-dark"} />
          ) : (
            <MoonIcon className={"fill-dark"} />
          )}
        </button>
      </nav>
      <div className="absolute left-[50%] top-1 translate-x-[-50%]">
        <Logo></Logo>
      </div>
    </header>
  );
};

export default NavbarPage;
