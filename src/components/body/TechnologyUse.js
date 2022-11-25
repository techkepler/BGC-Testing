import React from "react";
import { techData } from "../../data/techData";

const TechnologyUse = () => {
  return (
    <section className="tech-use m-auto my-8">
      <h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl text-center pt-2 pb-8 lg:pb-14">
        <span className="text-blue-600">Techonolgy </span> We Use
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-10">
        {techData?.map((data) => (
          <img src={data.img} alt="" key={data.id} className="" />
        ))}
      </div>
    </section>
  );
};

export default TechnologyUse;
