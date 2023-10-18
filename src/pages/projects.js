import AnimatedText from "@/component/AnimatedText";
import LayoutPage from "@/component/Layout";
import { GithubIcon } from "@/component/icons";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import { AnimatePresence, motion } from "framer-motion";
import TransitionEffect from "@/component/TransitionEffect";
import Filter from "@/component/Filter";
import ProjectCard from "@/component/ProjectCard";

const FramerImage = motion(Image);

const FeaturedProduct = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex justify-between items-center rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2x p-12 relative dark:border-light dark:bg-dark dark:text-light
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
    "
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-2xl 
        xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
      "
      ></div>
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        ></FramerImage>
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full md:pl-0 md:pt-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="font-medium my-2 text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2 px-6 text-lg font-semibold
            sm:px-4 sm:text-base "
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const ProjectComponent = ({ title, type, img, link, github }) => {
  return (
    <>
      <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:text-light dark:border-light dark:bg-dark xs:p-4">
        <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-2xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"></div>
        <Link
          href={link}
          target="_blank"
          className="w-full cursor-pointer overflow-hidden rounded-lg"
        >
          <FramerImage
            src={img}
            alt={title}
            className="w-full h-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          ></FramerImage>
        </Link>

        <div className="w-full flex flex-col items-start justify-between mt-4">
          <span className="text-primary font-medium text-xl text-left dark:text-primaryDark lg:text-lg md:text-base">
            {type}
          </span>
          <Link
            href={link}
            target="_blank"
            className="hover:underline underline-offset-2"
          >
            <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
              {title}
            </h2>
          </Link>
          <div className="w-full mt-2 flex items-center justify-between">
            <Link
              href={link}
              target="_blank"
              className="text-lg font-semibold underline md:text-base"
            >
              Visit
            </Link>
            <Link href={github} target="_blank" className="w-8 md:w-6">
              <GithubIcon />
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

const Project = ({ projects }) => {
  const [project, setProjects] = useState(projects);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState("all");

  return (
    <>
      <Head>
        <title>Projects | sekh saadi</title>
        <meta name="project of sekh saadi" content="any description"></meta>
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <LayoutPage className="pt-16 mt-1">
          <AnimatedText
            text={"Pixels to perfection!"}
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="text-dark w-full px-36 md:px-16 sm:px-12 xs:px-0 sm:text-sm xs:text-xs mt-5 font-medium text-center dark:text-light ">
            <p>
            With several years of learning experience, I&apos;ve honed my abilities to transform complex ideas and intricate designs into seamless, intuitive, and visually captivating websites and applications. I firmly believe that the user experience is at the heart of every successful digital product, and my work reflects this commitment.
            </p>
          </div>

          {/* <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProduct
                title={"Crypto Screener Application"}
                img={project1}
                link={"/"}
                summary={
                  "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency. "
                }
                github={"/"}
                type={"Featured project"}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <ProjectComponent
                title={"Crypto Screener Application"}
                img={project1}
                link={"/"}
                github={"/"}
                type={"project"}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <ProjectComponent
                title={"Crypto Screener Application"}
                img={project1}
                link={"/"}
                github={"/"}
                type={"project"}
              />
            </div>
            <div className="col-span-12">
              <FeaturedProduct
                title={"Crypto Screener Application"}
                img={project1}
                link={"/"}
                summary={
                  "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency. "
                }
                github={"/"}
                type={"Featured project"}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <ProjectComponent
                title={"Crypto Screener Application"}
                img={project1}
                link={"/"}
                github={"/"}
                type={"project"}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <ProjectComponent
                title={"Crypto Screener Application"}
                img={project1}
                link={"/"}
                github={"/"}
                type={"project"}
              />
            </div>
          </div> */}

          {/* projects  */}
          <div className="w-full mt-36 lg:mt-24 sm:mt-20 xs:mt-12">
            <div className="text-center text-dark text-2xl font-extrabold mt-12 dark:text-light">
              projects
            </div>
            <Filter
              project={project}
              setFiltered={setFiltered}
              activeGenre={activeGenre}
              setActiveGenre={setActiveGenre}
            />
            <motion.div
              layout
              className="w-full grid grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-5 mt-16 sm:mt-8 "
            >
              <AnimatePresence>
                {filtered?.map((p) => {
                  return <ProjectCard key={p.id} project={p} />;
                })}
              </AnimatePresence>
            </motion.div>
          </div>
        </LayoutPage>
      </main>
    </>
  );
};

export default Project;

export const getStaticProps = async () => {
  const res = await fetch(
    "https://portfolio-server-gray.vercel.app/projects"
  );
  const data = await res.json();

  return {
    props: {
      projects: data,
      revalidate: 30,
    },
  };
};
