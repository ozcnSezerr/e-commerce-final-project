import React from "react";

const Companies = () => {
  return (
    <div className="w-full pt-16 md:pt-24 bg-white">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        {/* ---header---- */}
        <h2
          className="text-slate-900 font-bold tracking-tight mb-4 
                       text-4xl md:text-5xl lg:text-6xl max-w-3xl"
        >
          Big Companies Are Here
        </h2>

        {/* information */}

        <p
          className="text-gray-500 text-sm md:text-base leading-relaxed 
                      max-w-xs md:max-w-2xl"
        >
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>
    </div>
  );
};

export default Companies;
