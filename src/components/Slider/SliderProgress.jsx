export default function SliderProgress({ progress }) {
  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-36 h-2 bg-white/40 overflow-hidden">
      <div
        className="h-full bg-white transition-all duration-400"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}
