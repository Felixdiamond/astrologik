import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Home | Not the FNGs",
  description: "Welcome to your gaming community hub",
}

const featuredCompetition = {
  title: "Winter Championship 2024",
  description: "The biggest tournament of the season with $10,000 prize pool",
  date: "February 15, 2024",
  participants: 128,
  registrationEnds: "February 1, 2024",
}

const topPlayers = [
  {
    name: "NightHawk",
    rank: 1,
    score: 2500,
    winRate: "68%",
    avatar: "/players/player1.jpg",
  },
  {
    name: "BlitzKing",
    rank: 2,
    score: 2450,
    winRate: "65%",
    avatar: "/players/player2.jpg",
  },
  {
    name: "Valkyrie",
    rank: 3,
    score: 2400,
    winRate: "63%",
    avatar: "/players/player3.jpg",
  },
]

const latestNews = [
  {
    title: "New Ranking System Announced",
    category: "News",
    date: "2 hours ago",
    description: "We're introducing a new competitive ranking system with seasonal rewards.",
  },
  {
    title: "Community Tournament Results",
    category: "Competitions",
    date: "1 day ago",
    description: "Check out the winners and highlights from our latest community event.",
  },
  {
    title: "Game Balance Update",
    category: "Updates",
    date: "2 days ago",
    description: "Important changes to game mechanics and character abilities.",
  },
]

const quickStats = [
  { label: "Active Players", value: "10,234" },
  { label: "Tournaments", value: "156" },
  { label: "Total Prize Pool", value: "$50,000" },
  { label: "Community Members", value: "25,678" },
]

export default function HomePage() {
  return (
    <div className="container mx-auto py-8 space-y-8">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight animate-glow">
          Welcome to Not the FNGs
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Your hub for competitive gaming, tournaments, and community engagement.
          Join thousands of players in their journey to greatness.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" className="animate-pulse-slow">
            Join Now
          </Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {quickStats.map((stat) => (
          <Card key={stat.label} className="hover-glow">
            <CardHeader>
              <CardTitle className="text-center text-3xl font-bold text-primary">
                {stat.value}
              </CardTitle>
              <CardDescription className="text-center">
                {stat.label}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </section>

      {/* Featured Competition */}
      <section>
        <Card className="hover-glow overflow-hidden">
          <div className="md:grid md:grid-cols-2">
            <div className="aspect-video bg-muted animate-pulse relative">
              <div className="absolute top-4 left-4">
                <Badge className="animate-pulse">Featured</Badge>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <h2 className="text-2xl font-bold">{featuredCompetition.title}</h2>
                  <p className="text-muted-foreground">
                    {featuredCompetition.description}
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Date:</span>
                    <span>{featuredCompetition.date}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Participants:</span>
                    <span>{featuredCompetition.participants}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Registration Ends:</span>
                    <span>{featuredCompetition.registrationEnds}</span>
                  </div>
                </div>
                <Button className="w-full">Register Now</Button>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Top Players and News */}
      <div className="grid gap-8 md:grid-cols-2">
        {/* Top Players */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight">Top Players</h2>
            <Button variant="ghost">View All</Button>
          </div>
          <div className="space-y-4">
            {topPlayers.map((player) => (
              <Card key={player.name} className="hover-glow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-muted animate-pulse" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-lg">{player.name}</CardTitle>
                          <CardDescription>Rank #{player.rank}</CardDescription>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-primary">{player.score}</div>
                          <div className="text-sm text-muted-foreground">
                            Win Rate: {player.winRate}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Latest News */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight">Latest News</h2>
            <Button variant="ghost">View All</Button>
          </div>
          <div className="space-y-4">
            {latestNews.map((news) => (
              <Card key={news.title} className="hover-glow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge>{news.category}</Badge>
                    <span className="text-sm text-muted-foreground">{news.date}</span>
                  </div>
                  <CardTitle className="text-lg">{news.title}</CardTitle>
                  <CardDescription>{news.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>
      </div>

      {/* Quick Links */}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Link href="/competitions">
          <Card className="hover-glow h-full">
            <CardHeader>
              <CardTitle>Competitions</CardTitle>
              <CardDescription>
                Join tournaments and compete for prizes
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>
        <Link href="/streams">
          <Card className="hover-glow h-full">
            <CardHeader>
              <CardTitle>Live Streams</CardTitle>
              <CardDescription>
                Watch tournaments and community streams
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>
        <Link href="/forum">
          <Card className="hover-glow h-full">
            <CardHeader>
              <CardTitle>Community Forum</CardTitle>
              <CardDescription>
                Discuss strategies and connect with players
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>
        <Link href="/blog">
          <Card className="hover-glow h-full">
            <CardHeader>
              <CardTitle>Blog & News</CardTitle>
              <CardDescription>
                Stay updated with latest gaming content
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>
      </section>
    </div>
  )
}