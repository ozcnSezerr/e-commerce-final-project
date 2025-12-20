import { Link } from "react-router-dom";

export default function ShopBoxs({ item }) {
  const gender = item.code.startsWith("k:") ? "kadin" : "erkek";

  const categoryUrl = `/shop/${gender}/${item.title.toLowerCase()}/${item.id}`;

  return (
    <Link
      to={categoryUrl}
      className="
        relative 
        h-75 
        sm:h-50
        max-w-80
        bg-amber-200 
        shadow-lg 
        transition-transform hover:scale-105
        w-full     
        md:w-[31%]
        sm:w-[47%]       
        lg:w-[18%]         
        block
        overflow-hidden
      "
    >
      <img
        src={item.img}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/25 hover:bg-black/40 transition-colors z-10">
        <p className="text-white font-bold text-xl uppercase tracking-widest drop-shadow-md">
          {item.title}
        </p>
        <p className="text-white text-sm tracking-widest mt-1">
          Rating: {item.rating}
        </p>
      </div>
    </Link>
  );
}
