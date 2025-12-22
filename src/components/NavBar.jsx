import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import md5 from "md5";
import {
  UserRound,
  Search,
  ShoppingCart,
  Heart,
  ChevronDown,
  ChevronUp,
  LogOut,
  TextAlignEnd,
  Trash2,
} from "lucide-react";

import { logoutUser } from "../store/actions/clientActions";
import { fetchCategories } from "../store/actions/productActions";

export default function Navbar() {
  const [shopHover, setShopHover] = useState(false);
  const [cartOpen, setCartOpen] = useState(false); 

  const user = useSelector((store) => store.client.user);
  const categories = useSelector((store) => store.product.categories);
  const cart = useSelector((store) => store.shoppingCart.cart);
  const dispatch = useDispatch();

  const isLoggedIn = user && user.email;

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  // Kategorileri ayrıştırma
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

  
  const totalCartItems = cart.reduce((total, item) => total + item.count, 0);

  return (
    <nav className="text-black p-4 w-full md:px-8 relative z-50">
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
            <Link to="/cart" className="relative">
              <ShoppingCart className="w-6 h-6" />
              {totalCartItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#23A6F0] text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {totalCartItems}
                </span>
              )}
            </Link>
            <TextAlignEnd className="w-6 h-6 cursor-pointer" />
          </div>
        </div>

        {/* --- DESKTOP LOGO --- */}
        <Link to="/" className="hidden md:block text-2xl font-bold">
          Bandage
        </Link>

        {/* --- MOBILE MENU LIST --- */}
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

        {/* --- DESKTOP MENU LIST --- */}
        <ul className="hidden md:flex flex-row text-center items-center text-gray-500 mr-18 font-semibold">
          <li>
            <Link to="/" className="px-2 py-2 inline-block hover:text-gray-500">
              Home
            </Link>
          </li>

          {/* SHOP DROPDOWN */}
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

        {/* --- DESKTOP ICONS & ACTIONS --- */}
        <div className="hidden md:flex items-center space-x-6 text-[#23A6F0]">
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

          <Search className="w-5 h-5 cursor-pointer" />

          {/* --- shopping cart dropdown*/}
          <div className="relative group">
            <button
              className="flex items-center relative py-2"
              onClick={() => setCartOpen(!cartOpen)}
            >
              <ShoppingCart className="w-5 h-5 cursor-pointer" />
              {totalCartItems > 0 && (
                <span className="absolute -top-1 -right-2 bg-[#23A6F0] text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {totalCartItems}
                </span>
              )}
            </button>

            {/* sepet */}
            <div className="absolute right-0 top-full mt-0 w-80 bg-white shadow-xl border border-gray-200 rounded-lg z-50 hidden group-hover:block transition-all duration-300">
              <div className="p-4">
                <h3 className="font-bold text-lg mb-3 border-b pb-2 text-[#252B42]">
                  Sepetim ({totalCartItems} Ürün)
                </h3>

                <div className="max-h-60 overflow-y-auto flex flex-col gap-3 custom-scrollbar">
                  {cart.length === 0 ? (
                    <div className="py-4 text-center text-gray-500 text-sm flex flex-col items-center">
                      <ShoppingCart size={32} className="text-gray-300 mb-2" />
                      <p>Sepetiniz boş.</p>
                    </div>
                  ) : (
                    cart.map((item, index) => (
                      <div
                        key={index}
                        className="flex gap-3 items-center justify-between border-b border-gray-100 pb-2 last:border-0"
                      >
                        <img
                          src={item.product.images?.[0]?.url}
                          alt={item.product.name}
                          className="w-12 h-16 object-cover rounded border border-gray-100"
                        />
                        <div className="flex-1 flex flex-col">
                          <span
                            className="text-sm font-bold text-[#252B42] line-clamp-1"
                            title={item.product.name}
                          >
                            {item.product.name}
                          </span>
                          <span className="text-xs text-gray-500">
                            Adet: {item.count}
                          </span>
                          <span className="text-[#23A6F0] font-bold text-sm">
                            ${(item.product.price * item.count).toFixed(2)}
                          </span>
                        </div>
                        <button className="text-gray-300 hover:text-red-500">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    ))
                  )}
                </div>

                <div className="flex gap-2 mt-4">
                  <Link
                    to="/cart"
                    className="flex-1 border border-gray-300 text-center py-2 rounded text-sm font-bold text-[#252B42] hover:bg-gray-50 transition-colors flex items-center justify-center"
                  >
                    Sepete Git
                  </Link>
                  <Link
                    to="/cart"
                    className="flex-1 bg-[#F27A1A] text-white text-center py-2 rounded text-sm font-bold hover:bg-orange-600 transition-colors flex items-center justify-center"
                  >
                    Siparişi Tamamla
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* ----------------------------------------------- */}

          <Heart className="w-5 h-5 cursor-pointer" />
        </div>
      </div>
    </nav>
  );
}
