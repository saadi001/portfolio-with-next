/* eslint-disable react-hooks/rules-of-hooks */
import AnimatedText from "@/component/AnimatedText";
import LayoutPage from "@/component/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/developer-pic-2.jpg";
import profilePic2 from "../../public/images/sheikh saadi.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/component/Skills";
import Experience from "@/component/Experience";
import Education from "@/component/Education";
import TransitionEffect from "@/component/TransitionEffect";
import SkillTwo from "@/component/SkillTwo";

const About = () => {
  const AnimatedNumber = ({ value }) => {
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
      if (isInView) {
        motionValue.set(value);
      }
    }, [isInView, value, motionValue]);

    useEffect(() => {
      springValue.on("change", (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      });
    }, [springValue, value]);

    return <span ref={ref}></span>;
  };
  return (
    <>
      <Head>
        <title>About | sekh saadi</title>
        <meta name="description" content="any description"></meta>
      </Head>
      <TransitionEffect/>
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <LayoutPage className="pt-16 mt-2">
          <AnimatedText
            text={"Passion for Pixels, Dedication to Development"}
            className="mb-16 !text-7xl lg:!text-6xl sm:!text-5xl xs:!text-4xl"
          ></AnimatedText>
          <div className="grid grid-cols-8 w-full gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h1 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h1>
              <p className="font-medium">
                Hi, I&apos;m Sekh Saadi, a web developer focused on front-end development with
                a passion for creating beautiful, functional, and user-centered
                digital experiences. With 1 and half years of learning experience in the field. I
                am always looking for new and innovative ways to bring my done in best possible way.
              </p>

              <p className="my-4 font-medium">
                I believe that design is about more than just making things look
                pretty – it&apos;s about solving problems and creating
                intuitive, enjoyable experiences for users.
              </p>

              <p className="font-medium">
              I love coding, doing creative works, solving problem, building projects. I also love to spend my leisure time by exploring new technology and reading books . I strongly believe, there&apos;s no limit of learning!
              </p>
            </div>

            <div className="col-span-3 h-max relative rounded-2xl border-2 border-solid border-dark dark:border-light bg-light dark:bg-dark p-8 xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light"></div>
              <Image
                src={profilePic2}
                alt="profile pic"
                className="w-full h-auto rounded-2xl"
              ></Image>
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={30} />+
                </span>
                <h1 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  projects completed
                </h1>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                    <AnimatedNumber value={3}/>+
                </span>
                <h1 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  satisfied client
                </h1>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                <AnimatedNumber value={1.5}/>+
                </span>
                <h1 className="text-xl text-right font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  years of learning experience
                </h1>
              </div>
            </div>
          </div>
          {/* <Skills/> */}
          <SkillTwo/>
          {/* <Experience/> */}
          <Education/>
        </LayoutPage>
      </main>
    </>
  );
};

export default About;
