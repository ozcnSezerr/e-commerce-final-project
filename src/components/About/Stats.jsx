import React from "react";

const Stats = () => {
  const stats = [
    { number: "15K", text: "Happy Customers" },
    { number: "150K", text: "Monthly Visitors" },
    { number: "15", text: "Countries Worldwide" },
    { number: "100+", text: "Top Partners" },
  ];

  return (
    <section className="py-20 bg-white font-sans">
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-16 mb-24 text-center md:text-left">
          {/* ----left header---- */}
          <div className="flex flex-col gap-4 md:w-1/2">
            <span className="text-red-500 font-bold text-sm tracking-wide uppercase">
              Problems trying
            </span>
            <h2 className="text-slate-800 text-3xl md:text-4xl font-bold leading-tight">
              Met minim Mollie non
              <br className="block sm:hidden" /> desert Alamo est sit
              <br className="block sm:hidden" /> cliquey dolor do
              <br className="block sm:hidden" /> met sent.
            </h2>
          </div>

          {/* ----right information-----*/}
          <div className="md:w-1/2 flex items-center">
            <p className="text-gray-500 text-sm md:text-base text-left leading-relaxed">
              Problems trying to resolve the conflict between
              <br className="block sm:hidden" /> the two major realms of
              Classical physics:
              <br className="block md:hidden" /> Newtonian mechanics
            </p>
          </div>
        </div>

        {/*----stats----- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-24 text-center md:pr-16 pt-10">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-2"
            >
              <h3 className="text-5xl md:text-6xl font-bold text-slate-800">
                {item.number}
              </h3>
              <p className="text-gray-500 font-semibold text-base">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
