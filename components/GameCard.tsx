import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { FaFlagUsa } from "react-icons/fa";

export default function GameCard() {
    return (
      <div className="h-full w-full rounded-2xl bg-gradient-to-tr from-blue-500 to-purple-700 flex items-center justify-center box-border text-2xl">
        <div className="w-full h-full flex flex-col items-start justify-center text-white pl-6">
          <div className="flex items-center justify-center mb-6 font-bicyclette-regular text-xl">
            <span className="flex items-center justify-center">
              <img src="/avatar2.png" className="w-8 h-8 rounded-full mr-2" />
              Alex Murray
            </span>
            <Separator className="h-1/2 mx-2" orientation="vertical" />
            <span className="flex items-center justify-center">
            <FaFlagUsa className="mr-2" />
            English
            </span>
          </div>
          <div className="mb-7">
            <h1 className="text-center text-5xl whitespace-nowrap font-bicyclette-bold">
              Assassin's Creed Valhalla
            </h1>
          </div>
          <div className="flex items-center justify-center mb-7 font-bicyclette-bold">
            <span>
              Silver Jackals
            </span>
            <span className="mx-3 font-bicyclette-regular text-lg">
              VS
            </span>
            <span>
              Hot Roadrunners
            </span>
          </div>
          <div className="flex items-center justify-center mt-3">
            <Button className="w-full py-7 px-28 rounded-[1rem] bg-white text-black hover:bg-gray-100 text-lg font-bicyclette-bold">
              Live Stream
            </Button>
          </div>
        </div>
        <div className="w-full h-full cl">
        <img
          src="/hutao.png"
          alt="ghost"
          className="w-full h-full object-contain"
        />
        </div>
      </div>
    );
  }