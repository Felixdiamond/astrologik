import { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Play, Users, Calendar, Clock, Bell, ExternalLink, Heart, MessageSquare, Eye, TrendingUp } from "lucide-react"

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
    tags: ["Tournament", "Finals", "Competitive"],
  },
  {
    id: 2,
    title: "Community Play Session - Join Now!",
    streamer: "CommunityHost",
    viewers: 567,
    game: "Team Tactics",
    thumbnail: "/streams/community-session.jpg",
    tags: ["Community", "Casual", "Open Lobby"],
  },
  {
    id: 3,
    title: "Pro Tips & Tricks - Improve Your Game",
    streamer: "ProCoach",
    viewers: 892,
    game: "Battle Royale",
    thumbnail: "/streams/pro-tips.jpg",
    tags: ["Tutorial", "Tips", "Pro Level"],
  },
]

const upcomingStreams = [
  {
    id: 3,
    title: "Semi-Finals - Winners Bracket",
    date: "2024-02-01",
    time: "18:00 EST",
    game: "Battle Royale",
    description: "Watch the top teams battle for a spot in the finals. High stakes gameplay with our best commentators.",
  },
  {
    id: 4,
    title: "Community Training Session",
    date: "2024-02-02",
    time: "20:00 EST",
    game: "Team Tactics",
    description: "Learn advanced strategies from our community coaches. Perfect for intermediate players looking to level up.",
  },
  {
    id: 5,
    title: "Casual Friday Game Night",
    date: "2024-02-03",
    time: "19:00 EST",
    game: "Various Games",
    description: "Join us for a relaxed evening of gaming. Everyone is welcome, bring your friends and have fun!",
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
    description: "Top-ranked competitive player known for aggressive strategies and clutch plays.",
  },
  {
    id: 2,
    name: "StrategyMaster",
    game: "Team Tactics",
    followers: "35K",
    status: "Offline",
    avatar: "/streamers/strategy.jpg",
    description: "Analytical player focusing on team coordination and advanced tactical approaches.",
  },
  {
    id: 3,
    name: "SpeedRunner",
    game: "Various Games",
    followers: "25K",
    status: "Live",
    avatar: "/streamers/speedrun.jpg",
    description: "World record holder in multiple games. Known for incredible reflexes and game knowledge.",
  },
]

export default function StreamsPage() {
  return (
    <div className="container mx-auto py-10 space-y-12 px-4 sm:px-6">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-gradient">Live Streams</h1>
        <p className="text-muted-foreground max-w-2xl">
          Watch live tournaments, community events, and featured streamers from our gaming community.
        </p>
      </div>

      {/* Featured Stream */}
      {liveStreams[0] && (
        <div className="relative rounded-xl overflow-hidden border border-border/40 bg-gradient-to-br from-muted/30 via-muted/20 to-background/80 backdrop-blur-sm">
          <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,#000000,transparent)]"></div>
          <div className="grid lg:grid-cols-5 gap-0">
            <div className="lg:col-span-3 aspect-video bg-muted/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
              <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
                <Badge variant="destructive" className="animate-pulse-glow px-3 py-1">
                  <div className="w-2 h-2 rounded-full bg-white mr-1.5 animate-pulse"></div>
                  LIVE
                </Badge>
                <Badge variant="secondary" className="bg-black/50 backdrop-blur-md border-white/10">
                  <Eye className="h-3 w-3 mr-1" />
                  {liveStreams[0].viewers.toLocaleString()} viewers
                </Badge>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Button size="lg" variant="premium" className="rounded-full w-16 h-16 p-0">
                  <Play className="h-6 w-6" />
                </Button>
              </div>
            </div>
            <div className="lg:col-span-2 p-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    {liveStreams[0].tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="bg-primary/5 hover:bg-primary/10 transition-colors">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight">{liveStreams[0].title}</h2>
                  <p className="text-muted-foreground">
                    Streaming {liveStreams[0].game} • {liveStreams[0].streamer}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Join us for the epic conclusion of our tournament series! Watch as Team Alpha and Team Beta battle it out for the championship title and a prize pool of $10,000.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <Button className="flex-1 gap-2">
                  <Play className="h-4 w-4" />
                  Watch Now
                </Button>
                <Button variant="outline" className="flex-1 gap-2">
                  <Bell className="h-4 w-4" />
                  Remind Me
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stream Categories */}
      <Tabs defaultValue="live" className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">Streams</h2>
          <TabsList className="grid grid-cols-2 w-[240px]">
            <TabsTrigger value="live">Live Now</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="live" className="space-y-6 mt-0">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {liveStreams.slice(1).map((stream) => (
              <Card key={stream.id} className="overflow-hidden transition-all duration-300 hover:shadow-md hover:shadow-primary/10 hover:border-primary/20 group">
                <div className="aspect-video bg-muted/50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                  <div className="absolute top-3 left-3 flex items-center gap-2 z-10">
                    <Badge variant="destructive" className="animate-pulse-glow">
                      <div className="w-1.5 h-1.5 rounded-full bg-white mr-1 animate-pulse"></div>
                      LIVE
                    </Badge>
                  </div>
                  <div className="absolute bottom-3 left-3 flex items-center gap-2 z-10">
                    <Badge variant="secondary" className="bg-black/50 backdrop-blur-md border-white/10">
                      <Eye className="h-3 w-3 mr-1" />
                      {stream.viewers}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="sm" variant="premium" className="rounded-full w-12 h-12 p-0">
                      <Play className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
                <CardHeader className="p-4">
                  <div className="space-y-2">
                    <CardTitle className="line-clamp-1 group-hover:text-primary transition-colors">{stream.title}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <span>{stream.game}</span>
                      <span>•</span>
                      <span>{stream.streamer}</span>
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardFooter className="p-4 pt-0 flex justify-between">
                  <div className="flex items-center gap-3">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MessageSquare className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button variant="outline" size="sm">Watch</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="flex justify-center">
            <Button variant="outline">View All Streams</Button>
          </div>
        </TabsContent>

        <TabsContent value="upcoming" className="space-y-6 mt-0">
          <div className="grid gap-4">
            {upcomingStreams.map((stream) => (
              <Card key={stream.id} className="overflow-hidden transition-all duration-300 hover:shadow-md hover:shadow-primary/10 hover:border-primary/20">
                <CardHeader className="p-5">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="bg-primary/5">{stream.game}</Badge>
                      </div>
                      <CardTitle>{stream.title}</CardTitle>
                      <CardDescription className="max-w-2xl">
                        {stream.description}
                      </CardDescription>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground pt-1">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span>{stream.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4 text-primary" />
                          <span>{stream.time}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 md:flex-col lg:flex-row">
                      <Button variant="outline" size="sm" className="flex-1 gap-1">
                        <Bell className="h-4 w-4" />
                        <span>Remind</span>
                      </Button>
                      <Button variant="premium" size="sm" className="flex-1 gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>Add to Calendar</span>
                      </Button>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Featured Streamers */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            Featured Streamers
          </h2>
          <Button variant="outline" size="sm">View All</Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredStreamers.map((streamer) => (
            <Card key={streamer.id} className="overflow-hidden transition-all duration-300 hover:shadow-md hover:shadow-primary/10 hover:border-primary/20">
              <CardHeader className="p-5">
                <div className="flex items-start gap-4">
                  <Avatar className="h-12 w-12 border-2 border-primary/20">
                    <AvatarFallback className="bg-primary/10">{streamer.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{streamer.name}</CardTitle>
                      <Badge
                        variant={streamer.status === "Live" ? "destructive" : "secondary"}
                        className={streamer.status === "Live" ? "animate-pulse-glow" : ""}
                      >
                        {streamer.status === "Live" && (
                          <div className="w-1.5 h-1.5 rounded-full bg-white mr-1 animate-pulse"></div>
                        )}
                        {streamer.status}
                      </Badge>
                    </div>
                    <CardDescription>
                      {streamer.game} • {streamer.followers} followers
                    </CardDescription>
                    <p className="text-sm text-muted-foreground pt-1 line-clamp-2">
                      {streamer.description}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardFooter className="p-5 pt-0 flex justify-between">
                <Button variant="ghost" size="sm" className="gap-1">
                  <Heart className="h-4 w-4" />
                  <span>Follow</span>
                </Button>
                <Button variant="outline" size="sm" className="gap-1">
                  <ExternalLink className="h-4 w-4" />
                  <span>Visit Channel</span>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Community Guidelines */}
      <Card className="overflow-hidden border-primary/10">
        <CardHeader className="bg-muted/30 pb-2">
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            Stream Guidelines
          </CardTitle>
          <CardDescription>
            Please follow our community guidelines when streaming or participating in chat:
          </CardDescription>
        </CardHeader>
        <CardContent className="p-5">
          <ul className="grid gap-3 sm:grid-cols-2">
            <li className="flex items-start gap-2">
              <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs">1</div>
              <span className="text-sm">Be respectful to all participants</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs">2</div>
              <span className="text-sm">No hate speech or harassment</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs">3</div>
              <span className="text-sm">Keep chat family-friendly</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs">4</div>
              <span className="text-sm">Follow game-specific rules</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs">5</div>
              <span className="text-sm">Report any violations to moderators</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs">6</div>
              <span className="text-sm">Respect streamers' content and decisions</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
} 