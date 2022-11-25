import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { navData } from "../../data/navData";
import { InfoSoftLogo } from "../../assets/export/Export";

const SideBar = (props) => {
  const { showSideBar, setShowSideBar } = props;

  return (
    <div
      className={`top-0 fixed bg-white z-20 w-72 md:w-96  h-full transition-transform duration-100 origin-left ease-linear ${
        showSideBar ? "translate-x-0" : "-translate-x-96"
      }`}
    >
      <div className="flex justify-between items-center px-4 py-3">
        <p className="w-24 ">
          <img src={InfoSoftLogo} alt="InfoSoft" className="w-24" />
        </p>
        <IoCloseOutline
          className="text-4xl"
          onClick={() => setShowSideBar(!showSideBar)}
        />
      </div>

      <div className="w-full h-full flex  flex-col   font-semibold relative ">
        {navData?.map((data) => (
          <a
            href={`#${data.url}`}
            key={data.id}
            onClick={() => setShowSideBar(!showSideBar)}
            className="border-b py-6 px-5"
          >
            {data.name}
          </a>
        ))}
        <div className="social-icons  mt-5 flex items-center gap-6 relative left-4 py-3">
          <a href="#/">
            <FaFacebookF className="text-blue-500 text-xl" />
          </a>
          <a href="#/">
            <FaTwitter className="text-sky-500 text-xl" />
          </a>

          <a href="#/">
            <FaLinkedinIn className="text-blue-700 text-xl" />
          </a>
          <a href="#/">
            <AiFillInstagram className="text-pink-500 text-xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
