import React, { useState } from "react";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Database from "./Database";
import Tools from "./Tools";
import Link from "next/link";
import { LinkArrow } from "./icons";

const SkillTwo = () => {
  const [details, setDetails] = useState("frontend");

  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32 mb-32 sm:mb-16">
        Skills
      </h2>
      <div className="w-full flex lg:flex-col gap-24 sm:gap-12 p-2">
        <div className="w-4/12 lg:w-full">
          <h2 className="text-5xl font-semibold leading-[54px] mb-8 sm:mb-5 sm:text-3xl">
            My Expert <br />
            Areas{" "}
            <span className="w-10 -ml-2 border-b-2 border-dark inline-block"></span>
          </h2>
          <p className="font-medium sm:text-base xs:text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <div className="inline-block mt-12">
          <Link
                  href="/dummy.pdf"
                  target="_blank"
                  className="flex items-center bg-dark text-light  py-3 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
                >
                  My Resume
                  {/* <LinkArrow className={"w-5 ml-1"} /> */}
                </Link>
          </div>
        </div>
        <div className="w-8/12 lg:w-full">
          <div className="flex justify-between items-center w-full mt-2">
            <div
              onClick={() => setDetails("frontend")}
              className={`${
                details === "frontend"
                  ? "border-2 border-dark dark:border-light xs:border"
                  : "border-2 border-slate-100/0 xs:border"
              }  indicator w-full pl-5 text-lg font-semibold py-4 rounded-xl cursor-pointer sm:text-base sm:pl-1 sm:text-center sm:px-2 sm:py-3 xs:text-sm xs:py-3 xs:rounded-lg xs:font-medium transition-all duration-300 ease-in`}
            >
              Frontend
            </div>
            <div
              onClick={() => setDetails("backend")}
              className={`${
                details === "backend"
                  ? "border-2 border-dark dark:border-light xs:border"
                  : "border-2 border-slate-100/0 xs:border"
              }   indicator w-full pl-5 text-lg font-semibold py-4 rounded-xl cursor-pointer sm:text-base sm:pl-1 sm:text-center sm:px-2 sm:py-3  xs:text-sm xs:py-3 xs:rounded-lg transition-all duration-300 ease-in`}
            >
              Backend
            </div>
            <div
              onClick={() => setDetails("database")}
              className={`${
                details === "database"
                  ? "border-2 border-dark dark:border-light xs:border"
                  : "border-2 border-slate-100/0 xs:border"
              }  indicator w-full pl-5 text-lg font-semibold py-4 rounded-xl cursor-pointer sm:text-base sm:pl-1 sm:text-center sm:px-2 sm:py-3  xs:text-sm xs:py-3 xs:rounded-lg transition-all duration-300 ease-in`}
            >
              Database
            </div>
            <div
              onClick={() => setDetails("tools")}
              className={`${
                details === "tools"
                  ? "border-2 border-dark dark:border-light xs:border"
                  : "border-2 border-slate-100/0 xs:border"
              }  indicator w-full pl-5 text-lg font-semibold py-4 rounded-xl cursor-pointer sm:text-base sm:pl-1 sm:text-center sm:px-2 sm:py-3  xs:text-sm xs:font-medium xs:py-3 xs:rounded-lg transition-all duration-300 ease-in`}
            >
              Tools
            </div>
          </div>
          {/* details */}
          <Frontend
            className={`${
              details === "frontend" ? "inline-block" : "hidden"
            } mt-16 sm:mt-12 w-full grid grid-cols-3 gap-3 gap-y-12 sm:gap-y-8 xs:gap-y-5 `}
          />
          <Backend
            className={`${
              details === "backend" ? "inline-block" : "hidden"
            } mt-16 sm:mt-12  w-full grid grid-cols-3 gap-3 gap-y-12 sm:gap-y-8 xs:gap-y-5`}
          />
          <Database
            className={`${
              details === "database" ? "inline-block" : "hidden"
            } mt-16 sm:mt-12 w-full grid grid-cols-3 gap-3 gap-y-12 sm:gap-y-8 xs:gap-y-5`}
          />
          <Tools
            className={`${
              details === "tools" ? "inline-block" : "hidden"
            } mt-16 sm:mt-12 w-full grid grid-cols-3 gap-3 gap-y-12 sm:gap-y-8 xs:gap-y-5`}
          />
        </div>
      </div>
    </>
  );
};

export default SkillTwo;
