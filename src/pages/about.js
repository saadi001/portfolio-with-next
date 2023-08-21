import AnimatedText from "@/component/AnimatedText";
import LayoutPage from "@/component/Layout";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import profilePic from "../../public/images/profile/developer-pic-2.jpg"

const About = () => {
  return (
    <>
      <Head>
        <title>About | sekh saadi</title>
        <meta name="description" content="any description"></meta>
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <LayoutPage className="pt-16 mt-2">
          <AnimatedText
            text={"Passion Fuels Purpose!"}
            className="mb-16"
          ></AnimatedText>
          <div className="grid grid-cols-8 w-full gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h1 className="mb-4 text-lg font-bold uppercase text-dark/75">
                Biography
              </h1>
              <p className="font-medium">
                Hi, I&apos;m CodeBucks, a web developer and UI/UX designer with a
                passion for creating beautiful, functional, and user-centered
                digital experiences. With 4 years of experience in the field. I
                am always looking for new and innovative ways to bring my
                clients&apos; visions to life.
              </p>

              <p className="my-4 font-medium">
                I believe that design is about more than just making things look
                pretty – it&apos;s about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p>

              <p className="font-medium">
                Whether I&apos;m working on a website, mobile app, or other digital
                product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>
            <div className="col-span-3 h-max relative rounded-2xl border-2 border-solid border-dark bg-light p-8">
                <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark"></div>
                <Image src={profilePic} alt="profile pic" className="w-full h-auto rounded-2xl"></Image>
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between">
                <div className="flex flex-col items-end justify-center">
                    <span className="inline-block text-7xl font-bold">
                        50+
                    </span>
                    <h1 className="text-xl font-medium capitalize text-dark/75">satisfied clients</h1>
                </div>
                <div className="flex flex-col items-end justify-center">
                    <span className="inline-block text-7xl font-bold">
                        30+
                    </span>
                    <h1 className="text-xl font-medium capitalize text-dark/75">projects completed</h1>
                </div>
                <div className="flex flex-col items-end justify-center">
                    <span className="inline-block text-7xl font-bold">
                        1+
                    </span>
                    <h1 className="text-xl font-medium capitalize text-dark/75">years of experience</h1>
                </div>
            </div>
          </div>
        </LayoutPage>
      </main>
    </>
  );
};

export default About;
