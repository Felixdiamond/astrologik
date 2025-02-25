"use client"

import { useState } from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import PlayerLeaderboard from "@/components/leaderboard/PlayerLeaderboard"
import TeamLeaderboard from "@/components/leaderboard/TeamLeaderboard"

export default function LeaderboardPage() {
  const [activeTab, setActiveTab] = useState("players")

  return (
    <div className="space-y-6">
      {/* Page Title */}
      <div>
        <h1 className="font-bicyclette-bold text-3xl">
          Leaderboards
        </h1>
        <p className="mt-2 text-muted-foreground">
          Track the top players and teams in our gaming community
        </p>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1">
          <TabsTrigger
            value="players"
            className="rounded-md px-6 py-1.5 text-sm font-medium transition-colors data-[state=active]:bg-background data-[state=active]:text-primary"
          >
            Players
          </TabsTrigger>
          <TabsTrigger
            value="teams"
            className="rounded-md px-6 py-1.5 text-sm font-medium transition-colors data-[state=active]:bg-background data-[state=active]:text-primary"
          >
            Teams
          </TabsTrigger>
        </TabsList>

        <TabsContent
          value="players"
          className="mt-0 focus-visible:outline-none focus-visible:ring-0"
        >
          <PlayerLeaderboard />
        </TabsContent>

        <TabsContent
          value="teams"
          className="mt-0 focus-visible:outline-none focus-visible:ring-0"
        >
          <TeamLeaderboard />
        </TabsContent>
      </Tabs>
    </div>
  )
}
