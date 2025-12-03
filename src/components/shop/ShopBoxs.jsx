import React from "react";

export default function ShopBoxs({ title, image, text }) {
  return (
    <div
      className="
        relative 
        h-75 
        sm:h-50
        max-w-80
        bg-amber-200 
        shadow-lg 
        transition-transform hover:scale-102
        w-full     
        md:w-[31%]
        sm:w-[47%]       
        lg:w-[18%]         
    "
    >
      <img
        src={image}
        alt="image"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/25 hover:bg-black/40 transition-colors">
        <p className="text-white font-bold text-xl uppercase tracking-widest">
          {title}
        </p>
        <p className="text-white text-sm tracking-widest">{text}</p>
      </div>
    </div>
  );
}
