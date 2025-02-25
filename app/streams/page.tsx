import { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Live Streams | Gaming Community",
  description: "Watch live streams of tournaments and community play sessions",
}

const liveStreams = [
  {
    id: 1,
    title: "Tournament Finals - Team Alpha vs Team Beta",
    streamer: "OfficialGamingCommunity",
    viewers: 1234,
    game: "Battle Royale",
    thumbnail: "/streams/tournament-finals.jpg",
  },
  {
    id: 2,
    title: "Community Play Session - Join Now!",
    streamer: "CommunityHost",
    viewers: 567,
    game: "Team Tactics",
    thumbnail: "/streams/community-session.jpg",
  },
]

const upcomingStreams = [
  {
    id: 3,
    title: "Semi-Finals - Winners Bracket",
    date: "2024-02-01",
    time: "18:00 EST",
    game: "Battle Royale",
  },
  {
    id: 4,
    title: "Community Training Session",
    date: "2024-02-02",
    time: "20:00 EST",
    game: "Team Tactics",
  },
  {
    id: 5,
    title: "Casual Friday Game Night",
    date: "2024-02-03",
    time: "19:00 EST",
    game: "Various Games",
  },
]

const featuredStreamers = [
  {
    id: 1,
    name: "ProPlayer123",
    game: "Battle Royale",
    followers: "50K",
    status: "Live",
    avatar: "/streamers/proplayer.jpg",
  },
  {
    id: 2,
    name: "StrategyMaster",
    game: "Team Tactics",
    followers: "35K",
    status: "Offline",
    avatar: "/streamers/strategy.jpg",
  },
  {
    id: 3,
    name: "SpeedRunner",
    game: "Various Games",
    followers: "25K",
    status: "Live",
    avatar: "/streamers/speedrun.jpg",
  },
]

export default function StreamsPage() {
  return (
    <div className="container mx-auto py-8 space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight animate-glow">Live Streams</h1>
        <p className="text-muted-foreground max-w-2xl">
          Watch live tournaments, community events, and featured streamers.
        </p>
      </div>

      {/* Featured Stream */}
      {liveStreams[0] && (
        <Card className="hover-glow overflow-hidden">
          <div className="aspect-video bg-muted animate-pulse relative">
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <Badge variant="destructive" className="animate-pulse">LIVE</Badge>
              <Badge variant="secondary">{liveStreams[0].viewers} viewers</Badge>
            </div>
          </div>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <CardTitle>{liveStreams[0].title}</CardTitle>
                <CardDescription>
                  Streaming {liveStreams[0].game} • {liveStreams[0].streamer}
                </CardDescription>
              </div>
              <Button>Watch Now</Button>
            </div>
          </CardHeader>
        </Card>
      )}

      {/* Stream Categories */}
      <Tabs defaultValue="live" className="space-y-4">
        <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
          <TabsTrigger value="live" className="hover-glow">Live Now</TabsTrigger>
          <TabsTrigger value="upcoming" className="hover-glow">Upcoming</TabsTrigger>
        </TabsList>

        <TabsContent value="live" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {liveStreams.slice(1).map((stream) => (
              <Card key={stream.id} className="hover-glow overflow-hidden">
                <div className="aspect-video bg-muted animate-pulse relative">
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <Badge variant="destructive" className="animate-pulse">LIVE</Badge>
                    <Badge variant="secondary">{stream.viewers} viewers</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-1">{stream.title}</CardTitle>
                  <CardDescription>
                    Streaming {stream.game} • {stream.streamer}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="upcoming" className="space-y-4">
          <div className="grid gap-4">
            {upcomingStreams.map((stream) => (
              <Card key={stream.id} className="hover-glow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <CardTitle>{stream.title}</CardTitle>
                      <CardDescription>
                        {stream.game} • {stream.date} at {stream.time}
                      </CardDescription>
                    </div>
                    <Button variant="outline">Set Reminder</Button>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Featured Streamers */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Featured Streamers</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredStreamers.map((streamer) => (
            <Card key={streamer.id} className="hover-glow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-muted animate-pulse" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{streamer.name}</CardTitle>
                      <Badge
                        variant={streamer.status === "Live" ? "destructive" : "secondary"}
                        className={streamer.status === "Live" ? "animate-pulse" : ""}
                      >
                        {streamer.status}
                      </Badge>
                    </div>
                    <CardDescription>
                      {streamer.game} • {streamer.followers} followers
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      {/* Community Guidelines */}
      <Card className="hover-glow">
        <CardHeader>
          <CardTitle>Stream Guidelines</CardTitle>
          <CardDescription>
            Please follow our community guidelines when streaming or participating in chat:
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
            <li>Be respectful to all participants</li>
            <li>No hate speech or harassment</li>
            <li>Keep chat family-friendly</li>
            <li>Follow game-specific rules</li>
            <li>Report any violations to moderators</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
} 