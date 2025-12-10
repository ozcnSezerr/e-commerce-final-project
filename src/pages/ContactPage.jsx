import React from "react";
import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="w-full bg-white py-40 px-4 md:px-0 font-sans">
      {/* header */}
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        <h1 className="text-[#252B42] text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Get answers <br className="block sm:hidden" /> to all your{" "}
          <br className="block" />
          questions.
        </h1>

        <div className="flex justify-center w-full mb-10">
          <p className="text-[#737373] text-xl md:text-lg max-w-lg w-full min-w-70 leading-normal font-semibold">
            Problems trying to resolve
            <br className="block sm:hidden" /> the conflict between the
            <br className="block sm:hidden" /> two major realms of
            <br className="block sm:hidden" /> Classical physics:
          </p>
        </div>

        {/* button */}
        <button className="bg-[#23A6F0] text-white font-bold py-4 px-10 rounded-[5px] text-sm tracking-wide mb-10 uppercase cursor-pointer">
          Contact Our Company
        </button>

        {/* icons */}
        <div className="flex items-center space-x-8">
          <a
            href="#"
            className="text-[#BDBDBD] hover:text-[#23A6F0] transition-colors duration-300"
          >
            <Twitter size={30} strokeWidth={2} />
          </a>
          <a href="#" className="text-[#BDBDBD] hover:text-[#23A6F0]">
            <Facebook size={30} strokeWidth={2} />
          </a>
          <a href="#" className="text-[#BDBDBD] hover:text-[#23A6F0]">
            <Instagram size={30} strokeWidth={2} />
          </a>
          <a href="#" className="text-[#BDBDBD] hover:text-[#23A6F0]">
            <Linkedin size={30} strokeWidth={2} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
