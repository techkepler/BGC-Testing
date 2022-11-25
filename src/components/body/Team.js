import React from "react";
import { teamData } from "../../data/teamData";

const Team = () => {
  return (
    <section className="about mt-10 py-10 px-4" id="team">
      <div className="flex justify-center my-6">
        <p className="text-center bg-sky-300 px-3 py-2 rounded-full">TEAM</p>
      </div>

      <div className="flex flex-col items-center justify-center pb-5">
        <h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl text-center py-2">
          Our <span className="text-blue-600">Hardworking Team</span>{" "}
        </h2>

        <p className="text-center py-2 lg:text-lg md:w-[30rem] text-[#444444]">
          Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
          adipisci expedita at voluptas atque vitae autem.
        </p>
      </div>

      <div className="services-list my-8 flex flex-wrap justify-center items-center gap-10 lg:gap-6">
        {teamData?.map((data) => (
          <div
            className="bg-white shadow-lg flex flex-col items-center justify-center gap-4 rounded-md  sm:w-96 md:w-80 lg:w-72"
            key={data.id}
          >
            <img
              src={data.img}
              alt="Software Developement"
              className=" rounded-t-lg"
            />

            <div className="pb-10 flex flex-col items-center">
              <p className="text-center font-semibold">{data.name}</p>

              <p>{data.postion}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
