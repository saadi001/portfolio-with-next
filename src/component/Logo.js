import Link from "next/link";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.div className="flex justify-center items-center mt-2 bg-dark text-light rounded-full border border-solid border-transparent dark:border-light "
    whileHover={{
        backgroundColor: [
          "#121212",
          "rgba(131,58,180,1)",
          "rgba(253,29,29,1)",
          "rgba(252,176,69,1)",
          "rgba(131,58,180,1)",
          "#121212",
        ],
        transition:{duration: 1, repeat: Infinity}
      }}>
      <Link
        href={"/"}
        className="w-16 h-16 flex justify-center items-center  text-2xl font-bold"
        
      >SS
      </Link>
    </motion.div>
  );
};

export default Logo;
