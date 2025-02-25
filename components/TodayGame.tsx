import { PlusIcon } from "lucide-react";
import { Button } from "./ui/button";

// components/TodayGame.tsx
export default function TodayGame() {
  return (
    <div className="rounded-2xl bg-[#16171B] w-full h-full p-5 flex items-center flex-col text-white font-bicyclette-bold text-lg">
        <div className="flex items-center justify-between w-full">
            <h1 className="text-xl">
              Today's Game
            </h1>
            <Button className="px-3 bg-white rounded-full text-black hover:text-white">
              <PlusIcon size={24} />
            </Button>
        </div>
        <div className="flex items-center justify-between w-4/5 bg-gray-900 rounded-xl py-5 px-2 mt-6">
            <div className="flex items-center justify-center ">
                <img src="https://cdn.nba.com/logos/nba/1610612737/primary/L/logo.svg" alt="team-logo" className="w-24 h-24" />
            </div>
            <span className="text-5xl">
              VS
            </span>
            <div className="flex items-center justify-center ">
                <img src="https://cdn.nba.com/logos/nba/1610612737/primary/L/logo.svg" alt="team-logo" className="w-24 h-24" />
            </div>
        </div>
        <div className="flex items-center justify-center flex-col w-full mt-10 gap-4">
          <div className="flex items-center justify-between w-full">
            <span>
              Mexico winners
            </span>
            <div className="w-14 h-7 bg-gray-600 rounded-lg text-center">
              2.5
            </div>
          </div>
          <div className="flex items-center justify-between w-full">
            <span>
              Elcor gamers
            </span>
            <div className="w-14 h-7 bg-gray-600 rounded-lg text-center">
              3.1
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center mt-10">
          <Button className="bg-gradient-to-tr from-blue-500 to-purple-700 py-8 w-4/5 rounded-xl text-xl">
              Live Stream
          </Button>
        </div>
    </div>
  );
}