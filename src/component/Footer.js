import React from "react";
import LayoutPage from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark dark:border-light font-medium text-lg sm:text-base">
      <LayoutPage className="py-8 flex justify-between items-center dark:text-light lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center lg:py-2">
          Built By&nbsp;
          <Link href={"/"} className="underline underline-offset-2">sheikh sadi</Link>
        </div>
        <Link href={"/"}>Say hello</Link>
      </LayoutPage>
    </footer>
  );
};

export default Footer;
