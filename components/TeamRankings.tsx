import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function TeamRankings() {
  const teams = [
    {
      id: 1,
      team: "Mexico Winners",
      player: "10",
      percentage: "0.0087%",
      points: "98"
    },
    {
      id: 2,
      team: "Silver Jackals",
      player: "27",
      percentage: "0.0014%",
      points: "111"
    },
    {
      id: 3,
      team: "Elcar Gamers",
      player: "8",
      percentage: "0.0056%",
      points: "32"
    },
    {
      id: 4,
      team: "Hot Roadrunners",
      player: "77",
      percentage: "0.0015%",
      points: "95"
    },
    {
      id: 5,
      team: "Wild Rift",
      player: "32",
      percentage: "0.0012%",
      points: "88"
    }
  ]
  return (
    <div className="rounded-2xl h-full bg-[#16171B] text-white w-full p-5 font-bicyclette-bold">
      <h1 className="text-2xl mb-4">
        Team Rankings
      </h1>
      <Table className="text-lg">
        <TableHeader>
          <TableRow className="border-none">
            <TableHead className="text-gray-400 w-16">No</TableHead>
            <TableHead className="text-gray-400">Team</TableHead>
            <TableHead className="text-gray-400">Player</TableHead>
            <TableHead className="text-gray-400">% Of Players</TableHead>
            <TableHead className="text-gray-400">Points</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {teams.map((team) => (
            <TableRow key={team.id} className="border-none">
              <TableCell className="text-gray-200">
                <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center">
                {team.id}
                </div>
              </TableCell>
              <TableCell className="text-gray-200">{team.team}</TableCell>
              <TableCell className="text-gray-200">{team.player}</TableCell>
              <TableCell className="text-gray-200">{team.percentage}</TableCell>
              <TableCell className="text-gray-200">{team.points}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}