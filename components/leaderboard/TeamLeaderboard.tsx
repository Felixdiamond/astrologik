"use client"

import { cn } from "@/lib/utils"
import { Trophy, Users, Target, Medal, Flame } from "lucide-react"

interface TeamStats {
  rank: number
  name: string
  logo: string
  members: number
  wins: number
  winRate: number
  score: number
  streak: number
}

const teams: TeamStats[] = [
  {
    rank: 1,
    name: "Not the FNGs",
    logo: "/nottfngs.jpg",
    members: 6,
    wins: 89,
    winRate: 78.5,
    score: 285750,
    streak: 12,
  },
  {
    rank: 2,
    name: "Neon Dragons",
    logo: "/neon.jpg",
    members: 5,
    wins: 76,
    winRate: 72.3,
    score: 245420,
    streak: 8,
  },
  {
    rank: 3,
    name: "Quantum Raiders",
    logo: "/R.jpeg",
    members: 6,
    wins: 71,
    winRate: 68.9,
    score: 228900,
    streak: 5,
  },
  // Add more teams as needed
]

export default function TeamLeaderboard() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />

      {/* Content */}
      <div className="relative">
        {/* Header */}
        <div className="border-b border-border/50 bg-background/50 p-4">
          <h2 className="font-bicyclette-bold text-lg">Team Rankings</h2>
        </div>

        {/* Table */}
        <div className="p-4">
          <div className="space-y-2">
            {teams.map((team, index) => (
              <div
                key={team.name}
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
                        #{team.rank}
                      </span>
                    )}
                  </div>

                  {/* Team Logo */}
                  <div className="h-12 w-12 overflow-hidden rounded-lg border border-border/50">
                    <img src={team.logo} alt={team.name} className="h-full w-full object-cover" />
                  </div>

                  {/* Name and Members */}
                  <div className="flex-1">
                    <span className={cn(
                      "block font-medium",
                      index === 0 ? "text-primary" : "text-foreground"
                    )}>
                      {team.name}
                    </span>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Users className="h-3 w-3" />
                      <span>{team.members} members</span>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <Medal className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{team.wins}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Target className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{team.winRate}%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Flame className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{team.streak}</span>
                    </div>
                    <div className="w-28 text-right">
                      <span className={cn(
                        "font-bicyclette-bold",
                        index === 0 ? "text-primary" :
                        index === 1 ? "text-secondary" :
                        index === 2 ? "text-accent" :
                        "text-muted-foreground"
                      )}>
                        {team.score.toLocaleString()}
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