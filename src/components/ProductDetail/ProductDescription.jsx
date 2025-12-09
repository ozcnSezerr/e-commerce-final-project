import { ChevronRight } from "lucide-react";

const ProductDescription = () => {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Description Menu */}
        <div className="flex justify-center gap-8 mb-12 border-b border-[#ECECEC] pb-6">
          <span className="text-gray-500 font-bold">Description</span>
          <span className="text-gray-500 font-bold">
            Additional Information
          </span>
          <span className="text-[#23856D] font-bold">Reviews (0)</span>
        </div>

        <div className="flex flex-wrap justify-start gap-13 mx-16 md:mx-8 lg:mx-0">
          {/* Box 1# */}

          <div className="bg-gray-100 rounded-lg h-73 sm:h-93 w-83 flex">
            <img
              src="/Gallery/description-1.jpg"
              alt="Interior"
              className="w-80 h-70 sm:h-90 object-cover rounded-md"
            />
          </div>

          {/* Box 2# */}
          <div className="w-84 shrink-0 flex flex-col gap-6">
            <h3 className="text-2xl font-bold text-slate-800">
              the quick fox jumps over
            </h3>
            <p className="text-sm text-gray-500">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <p className="text-sm text-gray-500">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <p className="text-sm text-gray-500">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
          </div>

          {/* Box 3# */}
          <div className="w-84 shrink-0 flex flex-col gap-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                the quick fox jumps over
              </h3>
              <ul className=" flex flex-col gap-y-3">
                {[1, 2, 3, 4].map((_, i) => (
                  <li
                    key={i}
                    className="flex items-center text-sm text-gray-500 font-bold"
                  >
                    <ChevronRight className="text-gray-400 w-5 h-5 mr-2" />
                    the quick fox jumps over the lazy dog
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                the quick fox jumps over
              </h3>
              <ul className=" flex flex-col gap-y-3">
                {[1, 2, 3].map((_, i) => (
                  <li
                    key={i}
                    className="flex items-center text-sm text-gray-500 font-bold"
                  >
                    <ChevronRight className="text-gray-400 w-5 h-5 mr-2" />
                    the quick fox jumps over the lazy dog
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDescription;
