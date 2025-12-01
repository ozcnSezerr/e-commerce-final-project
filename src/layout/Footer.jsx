import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white">
      {/* --- footer header ---- */}
      <div className="max-w-6xl mx-auto pt-20 px-16 lg:px-2 pb-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-7 md:gap-0">
          <h3 className="text-2xl font-bold text-slate-800">Bandage</h3>

          {/* icons*/}
          <div className="flex gap-6 text-sky-500">
            <a href="#" className="text-xl hover:text-sky-600 transition">
              <Facebook />
            </a>
            <a href="#" className="text-xl hover:text-sky-600 transition">
              <Instagram />
            </a>
            <a href="#" className="text-xl hover:text-sky-600 transition">
              <Twitter />
            </a>
          </div>
        </div>

        {/* hr */}
        <div className="border-b border-white md:border-gray-200 my-10 "></div>

        <div className="flex flex-wrap lg:flex-nowrap justify-between gap-8 lg:gap-0">
          {/* 1 */}
          <div className="flex flex-col gap-4 w-full lg:max-w-50 md:w-[44%] lg:w-auto lg:flex-1">
            <h5 className="font-bold text-slate-800">Company Info</h5>
            <nav className="flex flex-col gap-3 text-sm font-semibold text-gray-500">
              <a href="#" className="hover:text-sky-500 transition">
                About Us
              </a>
              <a href="#" className="hover:text-sky-500 transition">
                Carrier
              </a>
              <a href="#" className="hover:text-sky-500 transition">
                We are hiring
              </a>
              <a href="#" className="hover:text-sky-500 transition">
                Blog
              </a>
            </nav>
          </div>

          {/* 2 */}
          <div className="flex flex-col gap-4 w-full lg:max-w-50 md:w-[44%] lg:w-auto lg:flex-1">
            <h5 className="font-bold text-slate-800">Legal</h5>
            <nav className="flex flex-col gap-3 text-sm font-semibold text-gray-500">
              <a href="#" className="hover:text-sky-500 transition">
                About Us
              </a>
              <a href="#" className="hover:text-sky-500 transition">
                Carrier
              </a>
              <a href="#" className="hover:text-sky-500 transition">
                We are hiring
              </a>
              <a href="#" className="hover:text-sky-500 transition">
                Blog
              </a>
            </nav>
          </div>

          {/* 3 */}
          <div className="flex flex-col gap-4 w-full lg:max-w-50 md:w-[44%] lg:w-auto lg:flex-1">
            <h5 className="font-bold text-slate-800">Features</h5>
            <nav className="flex flex-col gap-3 text-sm font-semibold text-gray-500">
              <a href="#" className="hover:text-sky-500 transition">
                Business Marketing
              </a>
              <a href="#" className="hover:text-sky-500 transition">
                User Analytic
              </a>
              <a href="#" className="hover:text-sky-500 transition">
                Live Chat
              </a>
              <a href="#" className="hover:text-sky-500 transition">
                Unlimited Support
              </a>
            </nav>
          </div>

          {/* 4 */}
          <div className="flex flex-col gap-4 w-full lg:max-w-50 md:w-[44%] lg:w-auto lg:flex-1">
            <h5 className="font-bold text-slate-800">Resources</h5>
            <nav className="flex flex-col gap-3 text-sm font-semibold text-gray-500">
              <a href="#" className="hover:text-sky-500 transition">
                IOS & Android
              </a>
              <a href="#" className="hover:text-sky-500 transition">
                Watch a Demo
              </a>
              <a href="#" className="hover:text-sky-500 transition">
                Customers
              </a>
              <a href="#" className="hover:text-sky-500 transition">
                API
              </a>
            </nav>
          </div>

          {/* 5 */}
          <div className="flex flex-col gap-4 w-full md:w-[44%] lg:w-auto lg:min-w-50 lg:flex-[1.5]">
            <h5 className="font-bold text-slate-800">Get In Touch</h5>

            <form className="flex flex-row gap-0">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-l-md text-gray-600 placeholder-gray-400 lg:min-w-50 max-w-60 "
              />
              <button
                type="button"
                className="bg-sky-500 text-white rounded-r-md transition whitespace-nowrap w-full max-w-34"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-500">Lore imp sum dolor Amit</p>
          </div>
        </div>
      </div>

      {/* ---Copyright---- */}
      <div className="bg-[#FAFAFA] py-14 px-16 lg:px-2">
        <div className="mx-auto text-center md:text-left max-w-44 sm:max-w-6xl">
          <p className="text-sm font-bold text-gray-500 w-full md:w-8/12 ">
            Made With Love By Finland All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
