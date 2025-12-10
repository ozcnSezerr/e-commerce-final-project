import { useState } from "react";
import { Link } from "react-router-dom";
import {
  UserRound,
  Search,
  ShoppingCart,
  TextAlignEnd,
  Heart,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export default function Navbar() {
  const [shopHover, setShopHover] = useState(false);

  return (
    <nav className="text-black p-4 w-full md:px-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full">
        {/* icons for mobile*/}
        <div className="flex items-center justify-between md:hidden w-full mb-4">
          <h1 className="text-2xl font-bold">Bandage</h1>
          <div className="flex space-x-6">
            <UserRound />
            <Search />
            <ShoppingCart />
            <TextAlignEnd />
          </div>
        </div>

        <h1 className="hidden md:block text-2xl font-bold">Bandage</h1>

        {/* menu for mobile */}
        <ul className="flex flex-col md:hidden gap-y-2 text-center w-full">
          <li>
            <a
              href="/home"
              className="px-4 py-2 inline-block hover:text-gray-500"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/product"
              className="px-4 py-2 inline-block hover:text-gray-500"
            >
              Product
            </a>
          </li>
          <li>
            <a
              href="/pricing"
              className="px-4 py-2 inline-block hover:text-gray-500"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="px-4 py-2 inline-block hover:text-gray-500"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* menu for desktop */}
        <ul className="hidden md:flex flex-row text-center items-center text-gray-500 mr-18 font-semibold">
          <li>
            <Link to="/" className="px-2 py-2 inline-block hover:text-gray-500">
              Home
            </Link>
          </li>

          {/* dropdown part */}
          <li
            className="relative"
            onMouseEnter={() => setShopHover(true)}
            onMouseLeave={() => setShopHover(false)}
          >
            <Link
              to="/shop"
              className="px-2 py-2 inline-flex items-center space-x-1 hover:text-black-500 hover:font-normal"
            >
              <span>Shop</span>
              {shopHover ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </Link>

            <div
              className={`absolute left-0 mt-2 bg-white text-black rounded shadow-lg p-4
                grid grid-cols-2 gap-4 transition-all z-50 text-left min-w-130
                ${shopHover ? "opacity-100 visible" : "opacity-0 invisible"}
              `}
            >
              {/* 2 x 6 */}
              <a href="/cat1" className="px-4 py-4 rounded font-bold">
                Kadın
              </a>
              <a href="/cat2" className="px-4 py-4 rounded font-bold">
                Erkek
              </a>
              <a href="/cat3" className="px-4 py-2 rounded">
                Bags
              </a>
              <a href="/cat4" className="px-4 py-2 rounded">
                Bags
              </a>
              <a href="/cat5" className="px-4 py-2 rounded">
                Belts
              </a>
              <a href="/cat6" className="px-4 py-2 rounded">
                Belts
              </a>

              <a href="/cat7" className="px-4 py-2 rounded">
                Cosmetics
              </a>
              <a href="/cat8" className="px-4 py-2 rounded">
                Cosmetics
              </a>
              <a href="/cat9" className="px-4 py-2 rounded">
                Bags
              </a>
              <a href="/cat10" className="px-4 py-2 rounded">
                Bags
              </a>
              <a href="/cat11" className="px-4 py-2 rounded">
                Hats
              </a>
              <a href="/cat12" className="px-4 py-2 rounded">
                Hats
              </a>
            </div>
          </li>

          <li>
            <a
              href="/about"
              className="px-2 py-2 inline-block hover:text-gray-500"
            >
              About
            </a>
          </li>
          <li>
            <Link
              to="/team"
              className="px-2 py-2 inline-block hover:text-gray-500"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="px-2 py-2 inline-block hover:text-gray-500"
            >
              Contact
            </Link>
          </li>
          <li>
            <a
              href="/pages"
              className="px-2 py-2 inline-block hover:text-gray-500"
            >
              Pages
            </a>
          </li>
        </ul>

        {/* icons for desktop */}
        <div className="hidden md:flex space-x-8 text-[#23A6F0]">
          <div className="flex items-center space-x-1">
            <UserRound className="w-6 h-6 lg:w-4 lg:h-5" />
            <p className="hidden lg:flex">Login / Register</p>
          </div>
          <Search />
          <ShoppingCart />
          <Heart />
        </div>
      </div>
    </nav>
  );
}
