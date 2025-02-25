import { getRankColor } from "@/lib/rankColors";
import { PlayerCard } from "./PlayerCard";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";

export const StatsTable = ({ players }) => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-4 mb-6">
        <div className="flex gap-4">
          <Button variant="ghost" className="text-sm">
            24h
          </Button>
          <Button variant="ghost" className="text-sm">
            7D
          </Button>
          <Button variant="ghost" className="text-sm">
            30D
          </Button>
          <Button variant="ghost" className="text-sm">
            Seasonal
          </Button>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <Select defaultValue="queue">
            <SelectTrigger className="w-[120px] bg-transparent">
              <SelectValue placeholder="Queue" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="queue">Queue</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="ghost" className="text-sm">
            Show my place
          </Button>
        </div>
      </div>

      {/* Top Players Cards */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {players.slice(0, 3).map((player, index) => (
          <PlayerCard key={index} player={player} />
        ))}
      </div>

      {/* Players Table */}
      <div className="bg-[#1E1E1E] rounded-lg">
        <Table className="w-full">
          <TableHeader>
            <TableRow className="text-gray-400 text-sm">
              <TableHead className="text-left p-4">Place</TableHead>
              <TableHead className="text-left">Player name</TableHead>
              <TableHead className="text-left">Lokat stats</TableHead>
              <TableHead className="text-left">Winrate</TableHead>
              <TableHead className="text-left">KDA</TableHead>
              <TableHead className="text-left">Rank</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {players.slice(3).map((player, index) => (
              <TableRow key={index} className="border-t border-gray-800">
                <TableCell className="p-4">{player.place}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <img
                      src={player.avatar}
                      alt=""
                      className="w-6 h-6 rounded-full"
                    />
                    {player.name}
                  </div>
                </TableCell>
                <TableCell>{player.stats}</TableCell>
                <TableCell>{player.winrate}</TableCell>
                <TableCell>{player.kda}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-2 h-2 rounded-full ${getRankColor(
                        player.rank
                      )}`}
                    />
                    {player.rank}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};