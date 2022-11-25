import React from "react";
import { serviceData } from "../../data/serviceData";

const Services = () => {
  return (
    <section className="about mt-10 py-10 px-4" id="services">
      <div className="flex justify-center my-6">
        <p className="text-center bg-sky-300 px-3 py-2 rounded-full">
          Services
        </p>
      </div>

      <div className="flex flex-col items-center justify-center pb-5">
        <h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl text-center py-2">
          Check our <span className="text-blue-600">Services</span>{" "}
        </h2>

        <p className="text-center py-2 lg:text-lg md:w-[30rem] text-[#444444]">
          Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
          adipisci expedita at voluptas atque vitae autem.
        </p>
      </div>

      <div className="services-list my-8 flex flex-wrap justify-center gap-10">
        {serviceData?.map((data) => (
          <div
            className="bg-white shadow-lg flex flex-col items-center justify-center gap-4 rounded-md py-8  px-4 w-80"
            key={data.id}
          >
            <p className="w-32 h-32 rounded-full flex items-center justify-center border ">
              <img
                src={data.img}
                alt="Software Developement"
                className="h-32 w-32 rounded-full"
              />
            </p>

            <p className="text-center font-semibold">{data.name}</p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              dolor nisi quasi tempore saepe itaque architecto doloremque amet
              commodi quaerat?
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
