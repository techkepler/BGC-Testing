import React, { useState } from "react";
import { TfiEmail } from "react-icons/tfi";
import { AiOutlineMobile } from "react-icons/ai";
import { BsTwitter, BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import MobileNav from "../components/navbar/MobileNav";
import DesktopNav from "../components/navbar/DesktopNavBar";

const Header = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  const btnVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 5) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  window.addEventListener("scroll", btnVisible);

  return (
    <>
      <section className="bg-blue-600 h-9 md:h-10 lg:h-11 flex items-center  px-4 md:px-8 lg:px-12 w-full justify-around realtive z-50">
        <div className="flex w-full gap-4 justify-around md:justify-start  sm:gap-6 ">
          <p className="mail flex gap-2 items-center text-sm lg:font-semibold text-slate-300">
            <TfiEmail className="text-white" />
            <a href="mailto:support@asuperApp.com">support@asuperApp.com</a>
          </p>
          <p className="mail flex gap-2 items-center text-sm lg:font-semibold  text-slate-300">
            <AiOutlineMobile className="text-white" />
            <a href="mailto:support@asuperApp.com">9846743570</a>
          </p>
        </div>

        <div className="social-media-icons hidden md:flex  justify-end gap-6 text-slate-300">
          <a href="/#">
            <BsTwitter />
          </a>
          <a href="/#">
            <BsFacebook />
          </a>
          <a href="/#">
            <BsInstagram />
          </a>
          <a href="/#">
            <BsLinkedin />
          </a>
        </div>
      </section>

      <MobileNav isScrolling={isScrolling} />
      <DesktopNav isScrolling={isScrolling} />
    </>
  );
};

export default Header;
