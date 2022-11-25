import React from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { TestimonialImg } from "../../assets/export/Export";
import { testimonialsData } from "../../data/testimonialsData";

const Testimonials = () => {
  return (
    <div>
      <section
        className="bg-cover bg-center w-full h-96 sm:h-[450px] relative"
        style={{ backgroundImage: `url(${TestimonialImg})` }}
      >
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {testimonialsData?.map((data) => (
            <SwiperSlide className="h-full">
              <div
                className="flex h-full w-full flex-col justify-center items-center"
                key={data.id}
              >
                <div className="img name flex flex-col items-center justify-center relative z-20">
                  <p className="w-24 h-24 rounded-full border-8 border-gray-200 flex items-center justify-center">
                    <img
                      src={data.img}
                      alt={data.name}
                      className="w-20 h-20 rounded-full"
                    />
                  </p>
                  <p className="text-white font-medium text-lg">{data.name}</p>
                  <p className="text-white">{data.position}</p>
                </div>

                <p className="text-white text-center py-4 px-2 sm:w-[30rem] md:w-[35rem] lg:w-[40rem] md:text-lg italic">
                  <ImQuotesLeft className="inline mr-2" />
                  {"  "} Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Excepturi laboriosam fugiat odio sequi et. Optio sed
                  fugit est quae repellat?{" "}
                  <ImQuotesRight className="inline ml-2" />
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <p className="absolute h-full w-full bg-black  top-0 bg-opacity-50"></p>
      </section>
    </div>
  );
};

export default Testimonials;
