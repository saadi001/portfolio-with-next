import AnimatedText from "@/component/AnimatedText";
import LayoutPage from "@/component/Layout";
import TransitionEffect from "@/component/TransitionEffect";
import Head from "next/head";
import React from "react";
import { motion } from "framer-motion";
import {
  GithubIcon,
  GithubIconTwo,
  LinkedInIcon,
  TwitterIcon,
} from "@/component/icons";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>contact | sekh saadi</title>
        <meta name="description" content="any description"></meta>
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <LayoutPage className="pt-16 mt-1">
          <div className="w-full">
            {/* <h1 className="text-6xl font-bold">Send a Message</h1> */}
            <AnimatedText
              text={"Send a Message"}
              className="!text-6xl !font-bold !text-start sm:!text-3xl"
            ></AnimatedText>
            <p className="mt-4 mb-12 text-sm dark:text-light">
              Or reaches via:
              <a
                href="mailto:sheikhsadi1620@gmail.com"
                className="text-blue-600"
              >
                {" "}
                sheikhsadi1620@gamil.com
              </a>
            </p>

            {/* container div  */}
            <div className="rounded-lg w-full relative">
              {/* form div  */}
              <div className=" w-full pr-[175px] lg:pr-0">
                <form className="w-full pr-[215px] lg:pr-9 pl-9 rounded-md bg-white dark:bg-bgDark shadow-lg py-20 sm:py-10 xs:py-8">
                  <div className="grid grid-cols-2 gap-x-8 gap-y-14 sm:gap-y-8 xs:gap-y-5">
                    <div className="relative z-0 sm:col-span-2">
                      <input
                        type="text"
                        name="firstName"
                        className="peer block w-full appearance-none border-0 border-b border-gray-500 dark:border-gray-400 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-primary focus:outline-none focus:ring-0 dark:text-gray-300"
                        placeholder=" "
                      />
                      <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:text-primary peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:border-primary peer-focus:dark:text-blue-500">
                        First Name
                      </label>
                    </div>
                    <div className="relative z-0 sm:col-span-2">
                      <input
                        type="text"
                        name="lastName"
                        className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-primary focus:outline-none focus:ring-0 dark:border-gray-400 dark:text-gray-300"
                        placeholder=" "
                      />
                      <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary peer-focus:dark:text-blue-500">
                        Last Name
                      </label>
                    </div>
                    <div className="relative z-0 col-span-2">
                      <input
                        type="email"
                        name="email"
                        className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-primary focus:outline-none focus:ring-0 dark:border-gray-400 dark:text-gray-300"
                        placeholder=" "
                      />
                      <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary peer-focus:dark:text-blue-500">
                        Your email
                      </label>
                    </div>
                    <div className="relative z-0 col-span-2">
                      <textarea
                        name="message"
                        rows="5"
                        className="peer resize-none block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-primary focus:outline-none focus:ring-0 dark:border-gray-400 dark:text-gray-300"
                        placeholder=" "
                      ></textarea>
                      <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary peer-focus:dark:text-blue-500">
                        Your message
                      </label>
                    </div>
                  </div>
                  <div className="mt-12 sm:mt-8 w-full flex justify-end">
                    <button
                      type="submit"
                      className=" rounded-md bg-primary/90 backdrop-blur px-10 py-3 text-white sm:text-sm sm:px-5 sm:py-2"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>

              {/* info form  */}
              <motion.div
                initial={{ x: -200 }}
                whileInView={{
                  x: 0,
                  transition: { duration: 1, ease: "easeInOut" },
                }}
                viewport={{ once: true }}
                className="bg-dark shadow-md backdrop-blur-sm saturate-150 flex flex-col justify-between text-light absolute lg:relative  top-[40px] right-0 w-[350px] lg:w-full h-[calc(100%-80px)] rounded-md p-8 z-20 dark:bg-primaryDark/50"
              >
                <div>
                  <h3 className="text-3xl sm:text-xl text-primaryDark font-semibold mb-8 dark:text-gray-200">
                    Contact Info
                  </h3>
                  <div className="sm:text-sm dark:text-gray-300 font-mono">
                    <p>khatalBagan, kawran Bazar, Dhaka, Bangladesh</p>
                    <p className="mt-3">sheikhsadi1620@gmail.com</p>
                    <p>+8801836530309</p>
                  </div>
                </div>
                <div className="text-light dark:text-dark w-full flex mt-3">
                  <motion.a
                    href={"https://twitter.com"}
                    target={"_blank"}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-6 mr-3"
                  >
                    <TwitterIcon />
                  </motion.a>
                  <motion.a
                    href={"https://github.com/saadi001"}
                    target={"_blank"}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-6 mx-3"
                  >
                    <GithubIconTwo className={"dark:text-light"} />
                  </motion.a>
                  <motion.a
                    href={"https://www.linkedin.com/in/sekh-saadi-itm/"}
                    target={"_blank"}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-6 mx-3"
                  >
                    <LinkedInIcon />
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </LayoutPage>
      </main>
    </>
  );
};

export default ContactPage;
