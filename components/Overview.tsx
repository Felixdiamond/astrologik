import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "./ui/button"

const Overview = () => {
  const teams = [
    {
      id: 1,
      icon: "🛡️",
      name: "Mexico Winners",
      percentage: "51%",
      score: "4 - 2",
      scoreColor: "text-green-500"
    },
    {
      id: 2,
      icon: "🔵",
      name: "Silver Jackals",
      percentage: "51%",
      score: "3 - 2",
      scoreColor: "text-green-500"
    },
    {
      id: 3,
      icon: "🎮",
      name: "Elcar Gamers",
      percentage: "44%",
      score: "3 - 1",
      scoreColor: "text-green-500"
    },
    {
      id: 4,
      icon: "🔸",
      name: "Hot Roadrunners",
      percentage: "0%",
      score: "0 - 1",
      scoreColor: "text-red-500"
    }
  ]

  return (
    <div className="bg-[#16171B] rounded-2xl w-full h-full p-6 font-bicyclette-bold">
      <div className="flex justify-between items-center py-5">
        <h2 className="text-gray-200 text-3xl font-medium">Overview</h2>
        <div className="flex gap-4">
          <Button className="rounded-full bg-white text-black px-3 hover:text-white">
            <ChevronLeft />
          </Button>
          <Button className="rounded-full bg-white text-black px-3 hover:text-white">
            <ChevronRight />
          </Button>
        </div>
      </div>
      
      <div className="space-y-4 text-lg mt-5">
        {teams.map((team) => (
          <div key={team.id} className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <span className="text-xl">{team.icon}</span>
              <span className="text-gray-200">{team.name}</span>
            </div>
            <div className="flex items-center gap-10">
              <span className="text-gray-400 text-sm">{team.percentage}</span>
              <span className={`${team.scoreColor} text-sm`}>{team.score}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Overview