import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import md5 from "md5";
import {
  UserRound,
  Search,
  ShoppingCart,
  TextAlignEnd,
  Heart,
  ChevronDown,
  ChevronUp,
  LogOut,
} from "lucide-react";

import { logoutUser } from "../store/actions/clientActions";
import { fetchCategories } from "../store/actions/productActions";

export default function Navbar() {
  const [shopHover, setShopHover] = useState(false);

  const user = useSelector((store) => store.client.user);
  const categories = useSelector((store) => store.product.categories);
  const dispatch = useDispatch();

  const isLoggedIn = user && user.email;

  // kategorileri getirme
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  // --- kategorileri ayrıştırma ---
  const womenCategories = categories.filter((cat) => cat.code.startsWith("k:"));
  const menCategories = categories.filter((cat) => cat.code.startsWith("e:"));

  let gravatarUrl = "";
  if (isLoggedIn) {
    const emailHash = md5(user.email.trim().toLowerCase());
    gravatarUrl = `https://www.gravatar.com/avatar/${emailHash}?d=mp`;
  }

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <nav className="text-black p-4 w-full md:px-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full">
        {/* --- MOBILE HEADER --- */}
        <div className="flex items-center justify-between md:hidden w-full mb-4">
          <Link to="/" className="text-2xl font-bold">
            Bandage
          </Link>
          <div className="flex items-center gap-4">
            {isLoggedIn ? (
              <img
                src={gravatarUrl}
                alt="user"
                className="w-6 h-6 rounded-full border border-gray-300"
              />
            ) : (
              <Link to="/login">
                <UserRound className="w-6 h-6" />
              </Link>
            )}
            <Search className="w-6 h-6" />
            <ShoppingCart className="w-6 h-6" />
            <TextAlignEnd className="w-6 h-6 cursor-pointer" />
          </div>
        </div>

        <Link to="/" className="hidden md:block text-2xl font-bold">
          Bandage
        </Link>

        {/* --- MOBILE MENU --- */}
        <ul className="flex flex-col md:hidden gap-y-4 text-center w-full text-xl text-gray-500 font-medium py-4">
          <li>
            <Link to="/" className="hover:text-black">
              Home
            </Link>
          </li>
          <li>
            <Link to="/product" className="hover:text-black">
              Product
            </Link>
          </li>
          <li>
            <Link to="/pricing" className="hover:text-black">
              Pricing
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-black">
              Contact
            </Link>
          </li>
          {isLoggedIn ? (
            <li className="flex justify-center border-t border-gray-200 pt-4">
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-red-600 font-bold"
              >
                <LogOut size={20} /> Log Out
              </button>
            </li>
          ) : (
            <li className="text-[#23A6F0] font-bold mt-2 text-2xl">
              <Link to="/login" className="mr-2">
                Login
              </Link>{" "}
              /{" "}
              <Link to="/signup" className="ml-2">
                Register
              </Link>
            </li>
          )}
        </ul>

        {/* --- DESKTOP MENU --- */}
        <ul className="hidden md:flex flex-row text-center items-center text-gray-500 mr-18 font-semibold">
          <li>
            <Link to="/" className="px-2 py-2 inline-block hover:text-gray-500">
              Home
            </Link>
          </li>

          {/* DROPDOWN */}
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
              className={`absolute left-0 mt-2 bg-white text-black rounded shadow-lg p-6 flex gap-12 transition-all z-50 text-left min-w-[300px] border border-gray-100 ${
                shopHover ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              {/* KADIN KOLONU */}
              <div className="flex flex-col">
                <h3 className="font-bold text-lg mb-3 text-gray-800 border-b pb-2">
                  Kadın
                </h3>
                {womenCategories.map((cat) => (
                  <Link
                    key={cat.id}
                    to={`/shop/kadin/${cat.title.toLowerCase()}/${cat.id}`}
                    className="py-1 hover:text-[#23A6F0] text-sm text-gray-600"
                  >
                    {cat.title}
                  </Link>
                ))}
              </div>

              {/* ERKEK KOLONU */}
              <div className="flex flex-col">
                <h3 className="font-bold text-lg mb-3 text-gray-800 border-b pb-2">
                  Erkek
                </h3>
                {menCategories.map((cat) => (
                  <Link
                    key={cat.id}
                    to={`/shop/erkek/${cat.title.toLowerCase()}/${cat.id}`}
                    className="py-1 hover:text-[#23A6F0] text-sm text-gray-600"
                  >
                    {cat.title}
                  </Link>
                ))}
              </div>
            </div>
          </li>

          <li>
            <Link
              to="/about"
              className="px-2 py-2 inline-block hover:text-gray-500"
            >
              About
            </Link>
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
            <Link
              to="/pages"
              className="px-2 py-2 inline-block hover:text-gray-500"
            >
              Pages
            </Link>
          </li>
        </ul>

        {/* --- ICONS --- */}
        <div className="hidden md:flex items-center space-x-8 text-[#23A6F0]">
          {isLoggedIn ? (
            <div className="flex items-center gap-2">
              <img
                src={gravatarUrl}
                alt={user.name}
                className="w-8 h-8 rounded-full border border-gray-300 object-cover"
              />
              <p className="hidden lg:block font-medium text-gray-700">
                {user.name}
              </p>
              <button
                onClick={handleLogout}
                className="ml-1 p-1 rounded-md text-gray-500 hover:text-red-600 hover:bg-gray-100 transition-colors"
                title="Log Out"
              >
                <LogOut size={18} />
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-1">
              <UserRound className="w-6 h-6 lg:w-4 lg:h-5" />
              <div className="hidden lg:flex gap-1 font-bold text-sm">
                <Link to="/login" className="hover:underline">
                  Login
                </Link>
                <span>/</span>
                <Link to="/signup" className="hover:underline">
                  Register
                </Link>
              </div>
            </div>
          )}
          <Search />
          <ShoppingCart />
          <Heart />
        </div>
      </div>
    </nav>
  );
}
