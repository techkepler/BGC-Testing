import React, { useState, useRef, useEffect } from "react";
import { FcMenu } from "react-icons/fc";
import SideBar from "./SideBar";
import { InfoSoftLogo } from "../../assets/export/Export";

const MobileNav = ({ isScrolling }) => {
  const menuRef = useRef();
  const [showSideBar, setShowSideBar] = useState(false);

  useEffect(() => {
    const clickHandler = (event) => {
      if (
        menuRef.current &&
        showSideBar &&
        !menuRef.current.contains(event.target)
      ) {
        setShowSideBar(false);
      }
    };

    document.addEventListener("click", clickHandler);

    return () => document.removeEventListener("click", clickHandler);
  }, [showSideBar]);

  return (
    <header className="z-50 relative lg:hidden" ref={menuRef}>
      <nav
        className={`h-16 py-4 flex justify-between items-center fixed w-full bg-slate-100   px-2 ${
          isScrolling && "top-0"
        }`}
      >
        <a href="/#">
          <img src={InfoSoftLogo} alt="" className="w-28 " />
        </a>
        <FcMenu
          className="text-white text-3xl cursor-pointer"
          onClick={() => setShowSideBar(!showSideBar)}
        />
      </nav>

      <SideBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
    </header>
  );
};

export default MobileNav;
