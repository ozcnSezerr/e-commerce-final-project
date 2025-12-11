import React from "react";

const ContactSection = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row h-auto md:min-h-[500px]">
        {/* left information*/}
        <div
          className="bg-[#2A7CC7] w-full md:w-2/3 px-8 py-20 md:p-20 
                     flex flex-col justify-center items-center md:items-start 
                     text-center md:text-left text-white"
        >
          <span className="font-bold tracking-wider text-sm mb-6 uppercase opacity-90">
            Work With Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Now Let’s grow Yours
          </h2>

          <p className="text-sm md:text-base leading-relaxed mb-10 max-w-md opacity-90">
            The gradual accumulation of information about atomic and small-scale
            behavior during the first quarter of the 20th
          </p>

          <button
            className="px-10 py-3 border border-white rounded-md font-semibold 
                      hover:bg-white hover:text-[#2A7CC7] transition-colors duration-100"
          >
            Button
          </button>
        </div>

        {/* right image */}

        <div className="hidden md:block w-full md:w-1/3 h-auto relative">
          <img
            src="./Abouts/contact-1.jpg"
            alt="Contact Us"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
