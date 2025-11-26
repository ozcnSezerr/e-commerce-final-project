export default function SliderContent({ title, subtitle, text, buttonText }) {
  return (
    <div
      className="
        absolute inset-0 flex flex-col justify-center text-white
        p-4 sm:p-8 md:p-12 gap-y-9 
        items-center text-center
        sm:items-start sm:text-left md:ml-16 lg:ml-40 sm:ml-10
      "
    >
      <p className="text-xl font-bold">{subtitle}</p>
      <h2 className="text-6xl font-bold mb-2">{title}</h2>
      <p className="text-xl mb-3 sm:mb-4 md:mb-6 whitespace-pre-line">{text}</p>
      <button className="bg-[#2DC071] px-7 py-4 text-white font-bold text-3xl">
        {buttonText}
      </button>
    </div>
  );
}
