import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    username: "Username",
    profession: "Profession",
    image: "./Team/team-1.jpg",
  },
  {
    id: 2,
    username: "Username",
    profession: "Profession",
    image: "./Team/team-2.jpg",
  },
  {
    id: 3,
    username: "Username",
    profession: "Profession",
    image: "./Team/team-3.jpg",
  },
];

const TeamPage = () => {
  return (
    <section className="py-20 bg-white font-sans">
      <div className="container mx-auto px-4">
        {/* --- header ---- */}
        <div className="text-center mb-16 max-w-xl mx-auto">
          <h2 className="text-[#252B42] text-4xl font-bold mb-4">
            Meet Our <br className="block sm:hidden" /> Team
          </h2>
          <p className="text-[#737373] text-sm leading-relaxed px-2">
            Problems trying to resolve
            <br className="block sm:hidden" /> the conflict between the two
            major <br className="block sm:hidden" />
            realms of Classical physics:
            <br className="block sm:hidden" /> Newtonian mechanics
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-10 max-w-6xl mx-auto">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="flex flex-col items-center w-full max-w-[350px]"
            >
              <div className="w-full aspect-4/3 overflow-hidden mb-6 bg-gray-50">
                {/* image */}
                <img
                  src={member.image}
                  alt={member.username}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* information */}
              <h3 className="text-[#252B42] font-bold text-lg mb-2">
                {member.username}
              </h3>
              <p className="text-[#737373] text-sm font-semibold mb-4">
                {member.profession}
              </p>

              {/* icons */}
              <div className="flex space-x-5 text-[#23A6F0]">
                <a href="#" className="hover:text-blue-700 transition">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-pink-600 transition">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-blue-700 transition">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamPage;
