import { Trophy } from "lucide-react";

export const PlayerCard = ({ player }) => {
  return (
    <div className="bg-[#1E1E1E] rounded-lg p-4 flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        <img src={player.avatar} alt="" className="w-8 h-8 rounded-full" />
        <span className="font-medium">{player.name}</span>
        <Trophy
          className={`w-5 h-5 ml-auto ${
            player.place === 1
              ? "text-yellow-500"
              : player.place === 2
              ? "text-gray-400"
              : player.place === 3
              ? "text-amber-700"
              : ""
          }`}
        />
      </div>
      <div className="flex items-center gap-2 mb-2">
        <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-xs px-2 py-1 rounded">
          {player.rank}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 text-sm text-gray-400">
        <div>
          <div>Lokat stats</div>
          <div className="text-white">{player.stats}</div>
        </div>
        <div>
          <div>Winrate</div>
          <div className="text-white">{player.winrate}</div>
        </div>
        <div>
          <div>KDA</div>
          <div className="text-white">{player.kda}</div>
        </div>
      </div>
    </div>
  );
};
