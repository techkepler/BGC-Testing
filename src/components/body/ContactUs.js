import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { TestimonialImg } from "../../assets/export/Export";

const Contact = () => {
  return (
    <section className="location mt-10 pt-10" id="contact">
      <h1 className="uppercase text-2xl md:text-3xl lg:text-4xl text-center font-semibold py-8">
        Contact Us
      </h1>

      <div className="flex flex-col md:flex-row w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.3141643648137!2d85.33823241439205!3d27.738454382778993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19d13661486d%3A0x78f0e2265fbec244!2sSahara%20-%20Ride%20Sharing!5e0!3m2!1sen!2snp!4v1669100108466!5m2!1sen!2snp"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Sahara Location"
          className="w-auto h-96 md:w-[50%] md:h-[450px]"
        ></iframe>

        <div
          className=" h-96 md:w-[50%] md:h-[450px] relative flex items-center justify-center"
          style={{ backgroundImage: `url(${TestimonialImg})` }}
        >
          <div className="flex flex-col justify-center items-start sm:items-center px-6 gap-4 my-4 relative z-20 text-white text-xl font-medium">
            <a
              href="https://goo.gl/maps/AzDHzSFrLFZMgHfm6"
              className="flex gap-2 items-center"
              target="_blank"
              rel="noreferrer"
            >
              <IoLocationOutline className="text-xl" />
              <p>Aakirti Marg, Kathmandu, Nepal</p>
            </a>

            <a href="tel:0824836828" className="flex gap-2 items-center">
              <BiPhoneCall className="text-xl" />
              <p>082-584658</p>
            </a>

            <a
              href="mailto:tech@asuperApp.com"
              className="flex gap-2 items-center"
            >
              <AiOutlineMail className="text-xl" />
              <p>support@asuperApp.com</p>
            </a>
          </div>

          <p className="absolute w-full h-full bg-black bg-opacity-40 top-0"></p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
