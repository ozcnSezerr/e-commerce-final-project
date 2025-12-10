import React from "react";

const AboutUs = () => {
  return (
    <section className="w-full bg-white py-16 lg:py-24 overflow-hidden px-8 relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">
        {/* --- text section --- */}
        <div className="w-full lg:w-1/2 text-center lg:text-left z-20 flex flex-col items-center lg:items-start">
          <h5 className="text-[#737373] font-bold text-sm md:text-base mb-4 tracking-wider uppercase">
            About Company
          </h5>
          <h2 className="text-[#252B42] text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            ABOUT US
          </h2>
          {/* information */}
          <p className="text-[#737373] text-base md:text-lg leading-relaxed mb-10 max-w-md mx-auto lg:mx-0">
            We know how large <br className="block sm:hidden" /> objects will
            act, but things <br className="block sm:hidden" /> on a small scale
            just do <br className="block sm:hidden" /> not act that way
          </p>
          {/* Button */}
          <button className="bg-[#23A6F0] hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-[5px] text-sm tracking-wide transition-colors duration-300 shadow-md hover:shadow-lg cursor-pointer">
            Get Quote Now
          </button>
        </div>

        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end items-end lg:items-center mt-10 lg:mt-0">
          {/* --- daireler --- */}
          {/* 1 */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[480px] lg:h-[480px] bg-[#FFE9EA] rounded-full z-0"></div>
          {/* 2 */}
          <div className="absolute -top-4 -left-4 sm:top-0 sm:left-0 lg:-top-10 lg:-left-12 w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-[#FFE9EA] rounded-full z-0 opacity-70"></div>
          {/* 3 */}
          <div className="absolute bottom-16 left-8 lg:bottom-32 lg:left-4 w-2 h-2 md:w-4 md:h-4 bg-[#977DF4] rounded-full z-0 opacity-60"></div>
          {/* 4*/}
          <div className="absolute top-10 right-10 lg:top-4 lg:right-20 w-2 h-2 md:w-4 md:h-4 bg-[#977DF4] rounded-full z-0 opacity-60"></div>

          {/* --main image-- */}
          <img
            src="/Abouts/about-1.png"
            alt="Woman"
            className="relative z-10 object-contain lg:top-20 lg:left-10
                       max-w-full 
                       sm:max-w-[85%]
                       lg:max-w-full lg:h-auto
                       scale-140 
                       lg:origin-bottom-right 
                       lg:-mr-24 
                       transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
