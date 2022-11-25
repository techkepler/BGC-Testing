import React from "react";
import { HomeBgImg } from "../../assets/export/Export";

const BgHome = () => {
  return (
    <section className="bg-home relative top-16 ">
      <div
        className="h-[400px] md:h-[500px] bg-cover bg-center w-full relative"
        style={{ backgroundImage: `url(${HomeBgImg})` }}
      >
        <div className="px-4 sm:px-6 md:px-10 lg:px-14 absolute w-full top-[40%] ">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">
            Welcome to <span className="text-blue-600">InfoSoft</span>{" "}
          </h2>
          <p className="text-[#212121] text-lg lg:text-xl sm:py-1 md:py-2">
            We are team of talented engineers making world best product
          </p>
        </div>

        <p className="absolute top-0 w-full h-full bg-white bg-opacity-10"></p>
      </div>
    </section>
  );
};

export default BgHome;
