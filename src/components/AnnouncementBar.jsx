import React from "react";
import { Phone, Mail } from "lucide-react";
import Img1 from "../assets/SocialMedia/social-1.svg";
import Img2 from "../assets/SocialMedia/social-2.svg";
import Img3 from "../assets/SocialMedia/social-3.svg";
import Img4 from "../assets/SocialMedia/social-4.svg";

export default function AnnouncementBar() {
  return (
    <section className="hidden md:flex font-bold bg-[#252B42] justify-between text-white p-4 text-sm md:px-8">
      <div className="flex gap-10">
        <div className="flex gap-2">
          <Phone className="w-4" />
          <p>(225) 555-0118</p>
        </div>
        <div className="flex gap-2">
          <Mail className="w-4 " />
          <p>michelle.rivera@example.com</p>
        </div>
      </div>
      <div className="hidden lg:flex">
        <p>Follow Us and get a chance to win 80% off</p>
      </div>
      <div className="flex gap-2 items-center">
        <p>Follow Us:</p>
        <a href="" target="_blank" rel="noopener noreferrer">
          <img src={Img4} alt="LinkedIn" className="w-4" />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <img src={Img3} alt="Twitter" className="w-4" />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <img src={Img1} alt="Facebook" className="w-4" />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <img src={Img2} alt="Instagram" className="w-4" />
        </a>
      </div>
    </section>
  );
}
