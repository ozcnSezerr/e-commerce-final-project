export default function ProductContent({ title, subtitle, text, buttonText }) {
  return (
    <div
      className="
        flex flex-col justify-center text-white
        w-auto
        pt-44 md:p-2 gap-y-9 
        items-center text-center
        sm:text-left md:text-left md:items-start md:ml-20 lg:ml-36 sm:ml-10
      "
    >
      <p className="text-xl font-bold">{subtitle}</p>
      <h2 className="text-6xl font-bold mb-2">{title}</h2>
      <p className="text-xl mb-3 sm:mb-4 md:mb-6 whitespace-pre-line">{text}</p>
      <div className="flex gap-8 flex-col lg:flex-row">
        <span className="self-center font-bold text-3xl">$16.48</span>
        <button className="bg-[#2DC071] px-7 py-4 text-white font-bold text-3xl rounded">
          {buttonText}
        </button>
      </div>
    </div>
  );
}
