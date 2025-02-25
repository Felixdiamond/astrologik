// components/FeaturedGame.tsx
export default function FeaturedGame() {
  return (
    <div className="h-[220px] rounded-[20px] bg-[#6C5DD3] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#6C5DD3] to-transparent" />

      <div className="relative z-10 p-8">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-white/20" />
          <span className="text-white">Alex Murray</span>
          <span className="text-white/60 text-sm">English</span>
        </div>

        <h1 className="text-[32px] font-bold text-white mt-4">
          Assassin's Creed Valhalla
        </h1>

        <div className="flex items-center space-x-2 mt-2">
          <span className="text-white/60">Silver Jackals</span>
          <span className="text-white/60">vs</span>
          <span className="text-white/60">Hot Roadrunners</span>
        </div>

        <button className="mt-4 px-8 h-12 bg-white rounded-xl text-[#6C5DD3] font-medium">
          Live Stream
        </button>
      </div>

      <img
        src="/avatar1.png"
        alt=""
        className="absolute right-0 top-0 h-full object-contain"
      />
    </div>
  );
}
