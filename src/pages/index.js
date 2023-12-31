import LayoutPage from "@/component/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePicture4 from "../../public/images/2.png";
import AnimatedText from "@/component/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/component/icons";
import HireMe from "@/component/HireMe";
import lightbulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import TransitionEffect from "@/component/TransitionEffect";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | sekh saadi</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark dark:text-light w-full min-h-screen">
        <LayoutPage className="mt-1 pt-0 md:mt-16 sm:mt-8">
          <div className="flex justify-between items-center gap-3 w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePicture4}
                alt="sheikh saadi"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max-width:768px) 100vw, (max-width:768px) 50vw, 50vw"
              ></Image>
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Building bridges between design and functionality in pixels."
                className="!text-[49px] text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-5 text-base font-medium md:text-sm sm:text-xs"> 
                As a passionate front-end developer, I am committed to
                transforming concepts into cutting edge web applications. I
                thrive on staying up-to-date with the latest web technologies to
                ensure my projects are modern and cutting-edge. Let&apos;s
                collaborate to bring your digital vision to life!
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/resume of sekh saadi.pdf"
                  target="_blank"
                  className="flex items-center bg-dark text-light  p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
                >
                  Resume
                  <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href="mailto:abc@gmail.com"
                  target="_blank"
                  className="ml-4 text-lg font-medium capitalize text-dark dark:text-light underline md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </LayoutPage>
        <HireMe></HireMe>
        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image src={lightbulb} alt="bulb" className="w-full h-auto"></Image>
        </div>
      </main>
    </>
  );
}
