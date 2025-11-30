import React from "react";
import { AlarmClock, ChartColumn, ChevronRight } from "lucide-react";

const BlogPostCard = ({ post }) => {
  return (
    <div
      className={`flex-1 
       sm:max-w-[60%]
       min-w-full sm:min-w-[47%] lg:min-w-[30%] bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_20px_rgba(0,0,0,0.15)] transition-shadow duration-300 flex flex-col`}
    >
      <div className="relative h-80">
        <span className="absolute top-5 left-5 bg-[#E74040] text-white text-sm font-bold px-3 py-1 rounded shadow-sm z-10">
          NEW
        </span>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* --- card links --- */}
      <div className="p-6 flex flex-col gap-4">
        <div className="flex items-center gap-4 text-xs">
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className={`${
                index === 0 ? "text-[#8EC2F2]" : "text-[#737373]"
              } cursor-pointer hover:underline`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* --- card text -- */}
        <h3 className="text-[#252B42] text-xl font-bold leading-snug transition-colors cursor-pointer">
          {post.title}
        </h3>

        <p className="text-[#737373] text-sm leading-relaxed line-clamp-2">
          {post.desc}
        </p>

        {/* -- card info --- */}
        <div className="flex justify-between items-center py-4 mt-auto">
          <div className="flex items-center gap-1 text-[#737373] text-xs">
            <AlarmClock className="w-4 h-4 text-[#23A6F0]" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-1 text-[#737373] text-xs">
            <ChartColumn className="w-4 h-4 text-[#23856D]" />
            <span>{post.comments} comments</span>
          </div>
        </div>

        <div className="pt-2">
          <a
            href="#"
            className="flex items-center gap-1 text-[#737373] font-bold text-sm hover:text-[#23A6F0] transition-colors tracking-wider"
          >
            <span>Learn More</span>
            <ChevronRight className="w-7 h-7 text-[#23A6F0] -mb-0.5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;
