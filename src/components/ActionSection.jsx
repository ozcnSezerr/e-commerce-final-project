export default function ActionSection() {
  return (
    <section className="bg-white flex">
      <div className="flex flex-col-reverse md:flex-row items-center pb-10 max-w-7xl mx-auto w-full gap-none justify-center md:gap-16 lg:gap-24 overflow-hidden lg:-mt-16 px-6">
        <div className="w-full flex justify-center md:justify-end h-120 md:h-full sm:overflow-hidden">
          <img
            src="/Action/action-1.png"
            alt="Couple with scarf"
            className="h-120 lg:h-175 object-cover sm:object-center overflow-hidden"
          />
        </div>

        <div className="w-full md:w-2/3 flex flex-col items-center md:items-start text-center md:text-left mt-10 md:mt-0 lg:mt-16">
          <h5 className="text-gray-400 font-bold text-sm tracking-widest uppercase mb-4 md:mb-6">
            Summer 2020
          </h5>

          <h1 className="text-[#252B42] text-4xl lg:text-5xl font-extrabold leading-tight mb-6 max-w-3xs md:max-w-lg">
            Part of the Neural Universe
          </h1>

          <p className="text-[#737373] text-lg font-normal mb-8  max-w-50 md:max-w-xs">
            We know how large objects will act, but things on a small scale.
          </p>

          <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto px-10 md:px-0 items-center">
            {/* desktop buton - mobil buton */}
            <button className="bg-[#23A6F0] md:bg-[#2DC071] text-white font-bold py-4 px-7.5 md:px-11 rounded whitespace-nowrap text-sm">
              BUY NOW
            </button>

            <button className="bg-white border border-[#23A6F0] md:border-[#2DC071] text-[#23A6F0] md:text-[#2DC071] font-bold py-4 px-8 md:px-12 rounded whitespace-nowrap text-sm">
              <span className="md:hidden">Learn More</span>
              <span className="hidden md:inline">READ MORE</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
