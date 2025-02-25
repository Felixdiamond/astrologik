"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import { Trophy, Swords, Target, Medal } from "lucide-react"

interface PlayerStats {
  rank: number
  name: string
  avatar: string
  kills: number
  wins: number
  accuracy: number
  score: number
}

const players: PlayerStats[] = [
  {
    rank: 1,
    name: "Immaculate Gay",
    avatar: "/avatar1.png",
    kills: 2547,
    wins: 142,
    accuracy: 68.5,
    score: 125750,
  },
  {
    rank: 2,
    name: "ToxicKnight",
    avatar: "/avatar2.png",
    kills: 2341,
    wins: 128,
    accuracy: 65.2,
    score: 115420,
  },
  {
    rank: 3,
    name: "ShadowStrike",
    avatar: "/avatar3.png",
    kills: 2156,
    wins: 119,
    accuracy: 62.8,
    score: 108900,
  },
  // Add more players as needed
]

export default function PlayerLeaderboard() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />

      {/* Content */}
      <div className="relative">
        {/* Header */}
        <div className="border-b border-border/50 bg-background/50 p-4">
          <h2 className="font-bicyclette-bold text-lg">Player Rankings</h2>
        </div>

        {/* Table */}
        <div className="p-4">
          <div className="space-y-2">
            {players.map((player, index) => (
              <div
                key={player.name}
                className={cn(
                  "group relative overflow-hidden rounded-lg border border-border/50 bg-card/30 p-4 transition-all hover:bg-card/50",
                  index === 0 && "bg-primary/5"
                )}
              >
                {/* Rank indicator */}
                <div className="absolute left-0 top-0 h-full w-1">
                  <div className={cn(
                    "h-full w-full bg-gradient-to-b",
                    index === 0 ? "from-primary to-primary/50" :
                    index === 1 ? "from-secondary/70 to-secondary/30" :
                    index === 2 ? "from-accent/70 to-accent/30" :
                    "from-muted-foreground/30 to-muted-foreground/10"
                  )} />
                </div>

                <div className="flex items-center gap-4">
                  {/* Rank */}
                  <div className="flex h-8 w-8 items-center justify-center">
                    {index === 0 ? (
                      <Trophy className="h-5 w-5 text-primary" />
                    ) : (
                      <span className={cn(
                        "font-bicyclette-bold text-lg",
                        index === 1 ? "text-secondary" : 
                        index === 2 ? "text-accent" : 
                        "text-muted-foreground"
                      )}>
                        #{player.rank}
                      </span>
                    )}
                  </div>

                  {/* Avatar */}
                  <Avatar className="h-10 w-10 border border-border/50">
                    <AvatarImage src={player.avatar} alt={player.name} />
                    <AvatarFallback>FNG</AvatarFallback>
                  </Avatar>

                  {/* Name */}
                  <div className="flex-1">
                    <span className={cn(
                      "font-medium transition-colors",
                      index === 0 ? "text-primary" :
                      "text-foreground"
                    )}>
                      {player.name}
                    </span>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <Swords className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{player.kills}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Medal className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{player.wins}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Target className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{player.accuracy}%</span>
                    </div>
                    <div className="w-24 text-right">
                      <span className={cn(
                        "font-bicyclette-bold",
                        index === 0 ? "text-primary" :
                        index === 1 ? "text-secondary" :
                        index === 2 ? "text-accent" :
                        "text-muted-foreground"
                      )}>
                        {player.score.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 