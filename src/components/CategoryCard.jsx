const CategoryCard = ({ image, label, buttonClass }) => (
  <div className="relative h-full w-full">
    <img src={image} className="w-full h-full object-cover" alt={label} />
    <div className="absolute bottom-6 left-6 z-10">
      <button
        className={`bg-white text-[#252B42] font-bold uppercase tracking-wide shadow-md ${buttonClass}`}
      >
        {label}
      </button>
    </div>
  </div>
);
export default CategoryCard;
