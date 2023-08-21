import React from "react";
import LayoutPage from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
      <LayoutPage className="py-8 flex justify-between items-center">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center">
          Built By&nbsp;
          <Link href={"/"} className="underline underline-offset-2">sheikh sadi</Link>
        </div>
        <Link href={"/"}>Say hello</Link>
      </LayoutPage>
    </footer>
  );
};

export default Footer;
