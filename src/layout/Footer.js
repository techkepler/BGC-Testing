import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-[#091A38] pt-8 pb-6 px-3 text-white " id="contact">
      <div className="flex justify-center items-center gap-6 w-full md:text-lg sm:gap-10 md:gap-14 lg:gap-20">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#team">Team</a>
        <a href="#portfolio">Portfolio</a>
      </div>

      <div className="social-media my-4 py-8">
        <h4 className="text-center text-sm md:text-base font-semibold lg:text-lg">
          Follow us On
        </h4>

        <div className="social-media flex gap-6 md:gap-8 justify-center items-center mt-4 md:mt-6">
          <a
            href="https://www.facebook.com/SaharaRide.nepal"
            target="_blank"
            rel="noreferrer"
            className="text-slate-600 text-sm font-semibold "
          >
            <FaFacebookF className="text-white text-lg md:text-xl " />
          </a>
          <a
            href="https://www.instagram.com/sahararide.nepal"
            target="_blank"
            rel="noreferrer"
            className="text-slate-600 text-sm font-semibold "
          >
            <BsInstagram className="text-white text-lg md:text-xl" />
          </a>

          <a
            href="https://www.linkedin.com/company/sahararide/"
            target="_blank"
            rel="noreferrer"
            className="text-slate-600 text-sm font-semibold "
          >
            <FaLinkedinIn className="text-white text-lg md:text-xl" />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=9779801068680"
            target="_blank"
            rel="noreferrer"
          >
            <RiWhatsappFill className="text-white text-lg md:text-xl" />
          </a>
        </div>
      </div>

      <div className="company-copyright-detaisl flex items-center justify-center flex-col">
        <small className="block text-center text-xs lg:text-sm lg:w-[80%] xl:w-[70%]">
          Visitors are hereby informed that their information submitted on the
          website may be shared with insurers.Product information is authentic
          and solely based on the information received from the insurers.{" "}
        </small>

        <small className="text-white text-center block mt-4 font-semibold">
          © 2015-2022 Sahara Ltd. All rights reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
