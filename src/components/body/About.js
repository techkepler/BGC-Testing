import React from "react";
import { AboutImg } from "../../assets/export/Export";

const About = () => {
  return (
    <section className="about bg-slate-100 mt-20 py-10 px-4" id="about">
      <div className="flex justify-center my-6">
        <p className="text-center bg-sky-300 px-3 py-2 rounded-full">
          About Us
        </p>
      </div>

      <div className="flex flex-col items-center justify-center pb-5">
        <h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl text-center py-2">
          Find Out More <span className="text-blue-600">About Us</span>{" "}
        </h2>

        <p className="text-center py-2 lg:text-lg md:w-[30rem] text-[#444444]">
          Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
          adipisci expedita at voluptas atque vitae autem.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center lg:items-start lg:flex-row gap-6 lg:gap-10 my-8 sm:px-6 md:px-10 lg:px-0">
        <img src={AboutImg} alt="About" className="lg:w-[45%]" />
        <div className="flex flex-col gap-2 lg:w-[45%]">
          <h2 className="text-center font-medium text-xl lg:text-2xl ">
            Voluptatem dignissimos provident quasi corporis voluptates sit
            assumenda.
          </h2>
          <p className="text-[#444444]">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <p className="text-[#444444]">
            {" "}
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum
          </p>

          <p className="text-[#444444]">
            {" "}
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
