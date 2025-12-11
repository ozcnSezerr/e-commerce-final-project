import { Play } from "lucide-react"; // İkonu içe aktardık

const VideoCard = () => {
  return (
    <div className="p-4 max-w-6xl mx-auto">
      <div
        className="group relative w-full overflow-hidden rounded-2xl shadow-lg cursor-pointer 
                   md:aspect-8/4 transition-all duration-300"
      >
        {/*--background image---*/}
        <img
          src="./Abouts/video-1.jpg"
          alt="Video Thumbnail"
          className="h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />

        {/* button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="flex items-center justify-center w-16 h-16 bg-sky-500 rounded-full text-white shadow-xl">
            <Play className="w-8 h-8 ml-1" fill="currentColor" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
