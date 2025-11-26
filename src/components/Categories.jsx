import CategoryCard from "./CategoryCard";

const images = [
  "/Editor/image1.jpg",
  "/Editor/image2.jpg",
  "/Editor/image3.jpg",
  "/Editor/image4.jpg",
];

export default function Categories() {
  return (
    <section className="w-full bg-[#FAFAFA] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Başlık */}
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-[#252B42] uppercase mb-2 tracking-wide">
            EDITOR'S PICK
          </h2>
          <p className="text-[#737373] text-sm font-normal">
            Problems trying to resolve the conflict between
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 h-auto md:h-135 sm:items-center">
          <div className="relative h-140 lg:h-full lg:flex-2 w-full sm:w-[80%]">
            <CategoryCard
              image={images[3]}
              label="MEN"
              buttonClass="text-base px-10 py-3"
            />
          </div>

          <div className="relative h-140 lg:h-full lg:flex-1 w-full sm:w-[80%]">
            <CategoryCard
              image={images[2]}
              label="WOMEN"
              buttonClass="text-base px-8 py-3"
            />
          </div>

          <div className="flex flex-col gap-6 h-140 lg:h-full lg:flex-1 w-full sm:w-[80%]">
            <div className="relative flex-1 overflow-hidden">
              <CategoryCard
                image={images[1]}
                label="ACCESSORIES"
                buttonClass="text-sm px-6 py-3"
              />
            </div>

            <div className="relative flex-1 overflow-hidden">
              <CategoryCard
                image={images[0]}
                label="KIDS"
                buttonClass="text-sm px-6 py-3"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
