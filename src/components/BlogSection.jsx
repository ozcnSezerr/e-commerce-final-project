import React from "react";
import BlogPostCard from "./BlogPostCard";

export default function BlogSection() {
  const posts = [
    {
      id: 1,
      image: "/Feature/feature-1.jpg",
      tags: ["Google", "Trending", "New"],
      title: "Loudest à la Madison #1 (L'integral)",
      desc: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: 10,
    },
    {
      id: 2,
      image: "/Feature/feature-2.jpg",
      tags: ["Google", "Trending", "New"],
      title: "Loudest à la Madison #1 (L'integral)",
      desc: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: 10,
    },
    {
      id: 3,
      image: "/Feature/feature-3.jpg",
      tags: ["Google", "Trending", "New"],
      title: "Loudest à la Madison #1 (L'integral)",
      desc: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: 10,
    },
  ];

  return (
    <section className="py-24 bg-white font-sans">
      <div className="mx-auto max-w-6xl px-6">
        {/* --- header section ---- */}
        <div className="flex flex-col items-center text-center mb-16">
          <h3 className="text-[#23A6F0] font-bold text-sm mb-3 tracking-wide">
            Practice Advice
          </h3>
          <h2 className="text-[#252B42] text-4xl font-bold mb-4 tracking-wide">
            Featured Posts
          </h2>
          <p className="text-[#737373] text-sm leading-relaxed max-w-md w-60 sm:w-full tracking-wide">
            Problems trying to resolve the conflict between the two major
            <span className="hidden sm:inline">
              realms of Classical physics: Newtonian mechanics
            </span>
          </p>
        </div>

        {/* ---- card section ---- */}
        <div className="flex flex-wrap justify-center gap-8 sm:gap-7 md:gap-3 px-6 sm:px-0">
          {posts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
