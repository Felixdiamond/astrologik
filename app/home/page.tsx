import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Trophy, 
  Users, 
  Newspaper, 
  PlayCircle, 
  ArrowRight, 
  TrendingUp, 
  Calendar, 
  Award,
  Flame,
  ChevronRight,
  Clock,
  Star
} from "lucide-react"

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
  { 
    label: "Active Players", 
    value: "10,234", 
    icon: Users, 
    change: "+12%",
    trend: "up",
    description: "Players online this week"
  },
  { 
    label: "Tournaments", 
    value: "156", 
    icon: Trophy, 
    change: "+8",
    trend: "up",
    description: "Active competitions"
  },
  { 
    label: "Prize Pool", 
    value: "$50,000", 
    icon: Award, 
    change: "+$5,000",
    trend: "up",
    description: "Total rewards available"
  },
  { 
    label: "Community", 
    value: "25,678", 
    icon: TrendingUp, 
    change: "+342",
    trend: "up",
    description: "New members this month"
  },
]

export default function HomePage() {
  return (
    <div className="container mx-auto py-12">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1 className="text-5xl font-bold tracking-tight mb-6">
          Welcome to <span className="text-gradient">Not the FNGs</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-10 text-lg">
          Your hub for competitive gaming, tournaments, and community engagement.
          Join thousands of players in their journey to greatness.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" className="px-8 py-6 text-base font-medium">
            Join Now
          </Button>
          <Button size="lg" variant="outline" className="px-8 py-6 text-base font-medium">
            Learn More
          </Button>
        </div>
      </section>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-5 auto-rows-[minmax(120px,auto)]">
        {/* Featured Competition - Spans 6 columns and 2 rows */}
        <Card className="md:col-span-6 lg:col-span-6 md:row-span-2 overflow-hidden border-0 shadow-lg bg-gradient-to-br from-background via-background to-background/80">
          <div className="h-full flex flex-col">
            <div className="aspect-video bg-gradient-to-br from-primary/5 to-secondary/5 relative">
              <div className="absolute inset-0 bg-[url('/tournament-bg.jpg')] bg-cover bg-center opacity-20 mix-blend-luminosity"></div>
              <div className="absolute top-4 left-4">
                <Badge variant="secondary" className="backdrop-blur-sm bg-secondary/10 border-0 px-3 py-1 font-medium">Featured</Badge>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
            </div>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 rounded-full bg-primary/10">
                  <Trophy className="h-4 w-4 text-primary" />
                </div>
                <CardTitle className="text-2xl">{featuredCompetition.title}</CardTitle>
              </div>
              <CardDescription className="text-base">
                {featuredCompetition.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 flex-grow pb-2">
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Date:</span>
                <span className="ml-auto font-medium">{featuredCompetition.date}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Participants:</span>
                <span className="ml-auto font-medium">{featuredCompetition.participants}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Registration Ends:</span>
                <span className="ml-auto font-medium">{featuredCompetition.registrationEnds}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-gradient-to-r from-primary to-primary hover:from-primary/90 hover:to-primary">
                Register Now
              </Button>
            </CardFooter>
          </div>
        </Card>

        {/* Quick Stats - Each in its own card */}
        {quickStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label} className="md:col-span-3 lg:col-span-3 border-0 shadow-md bg-gradient-to-br from-background via-background to-background/90 group overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/15 transition-colors duration-300">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex items-center gap-1 text-xs font-medium">
                    <span className={`${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                      {stat.change}
                    </span>
                    <TrendingUp className={`h-3 w-3 ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`} />
                  </div>
                </div>
                <CardTitle className="text-3xl font-bold">
                  {stat.value}
                </CardTitle>
                <CardDescription className="text-sm mt-1 flex justify-between items-center">
                  <span>{stat.label}</span>
                  <div className="h-1 w-16 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-secondary w-3/4"></div>
                  </div>
                </CardDescription>
                <p className="text-xs text-muted-foreground mt-2">{stat.description}</p>
              </CardHeader>
            </Card>
          );
        })}

        {/* Latest News - Spans 6 columns */}
        <Card className="md:col-span-6 lg:col-span-6 border-0 shadow-md bg-gradient-to-br from-background via-background to-background/90">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-full bg-primary/10">
                  <Newspaper className="h-4 w-4 text-primary" />
                </div>
                <CardTitle className="text-xl">Latest News</CardTitle>
              </div>
              <Button variant="ghost" size="sm" className="gap-1 text-xs font-medium">
                View All <ChevronRight className="h-3 w-3" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {latestNews.map((news, index) => (
              <div key={news.title} className="group cursor-pointer">
                <div className="flex items-center justify-between mb-1">
                  <Badge variant="outline" className="text-xs border-primary/20 bg-primary/5 text-primary">{news.category}</Badge>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {news.date}
                  </span>
                </div>
                <h3 className="font-medium group-hover:text-primary transition-colors duration-300 flex items-center gap-1">
                  {news.title}
                  <ChevronRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-1">{news.description}</p>
                {index < latestNews.length - 1 && <div className="h-px w-full bg-border/30 mt-4"></div>}
          </div>
            ))}
          </CardContent>
        </Card>

        {/* Top Players - Spans 6 columns */}
        <Card className="md:col-span-6 lg:col-span-6 border-0 shadow-md bg-gradient-to-br from-background via-background to-background/90">
          <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-full bg-primary/10">
                  <Award className="h-4 w-4 text-primary" />
                </div>
                <CardTitle className="text-xl">Top Players</CardTitle>
              </div>
              <Button variant="ghost" size="sm" className="gap-1 text-xs font-medium">
                View All <ChevronRight className="h-3 w-3" />
              </Button>
          </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {topPlayers.map((player, index) => (
              <div key={player.name} className="group cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                      {index === 0 && (
                        <div className="absolute -top-1 -right-1">
                          <Flame className="h-4 w-4 text-amber-500" />
                        </div>
                      )}
                      <span className="font-bold text-sm">{player.rank}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium group-hover:text-primary transition-colors duration-300 flex items-center gap-1">
                        {player.name}
                        <ChevronRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </h3>
                        <div className="text-right">
                        <div className="font-bold text-primary flex items-center gap-1">
                          {player.score}
                          <div className="flex">
                            {[...Array(Math.min(player.rank, 3))].map((_, i) => (
                              <Star key={i} className="h-3 w-3 text-amber-500 fill-amber-500" />
                            ))}
                          </div>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Win Rate: {player.winRate}
                        </div>
                      </div>
                    </div>
                  </div>
          </div>
                {index < topPlayers.length - 1 && <div className="h-px w-full bg-border/30 mt-4"></div>}
                  </div>
            ))}
          </CardContent>
        </Card>

        {/* Quick Links - Each in its own card */}
        <Link href="/competitions" className="group md:col-span-3 lg:col-span-3">
          <Card className="h-full border-0 shadow-md bg-gradient-to-br from-background via-background to-background/90 flex flex-col overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardHeader className="p-5 flex-grow">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 rounded-full bg-primary/10 group-hover:bg-primary/15 transition-colors duration-300">
                  <Trophy className="h-4 w-4 text-primary" />
          </div>
                <CardTitle className="text-lg">Competitions</CardTitle>
      </div>
              <CardDescription className="text-sm">
                Join tournaments and compete for prizes
              </CardDescription>
              <div className="mt-4 flex justify-end">
                <div className="p-1 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <ChevronRight className="h-4 w-4 text-primary" />
                </div>
              </div>
            </CardHeader>
          </Card>
        </Link>
        
        <Link href="/streams" className="group md:col-span-3 lg:col-span-3">
          <Card className="h-full border-0 shadow-md bg-gradient-to-br from-background via-background to-background/90 flex flex-col overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardHeader className="p-5 flex-grow">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 rounded-full bg-primary/10 group-hover:bg-primary/15 transition-colors duration-300">
                  <PlayCircle className="h-4 w-4 text-primary" />
                </div>
                <CardTitle className="text-lg">Live Streams</CardTitle>
              </div>
              <CardDescription className="text-sm">
                Watch tournaments and community streams
              </CardDescription>
              <div className="mt-4 flex justify-end">
                <div className="p-1 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <ChevronRight className="h-4 w-4 text-primary" />
                </div>
              </div>
            </CardHeader>
          </Card>
        </Link>
        
        <Link href="/forum" className="group md:col-span-3 lg:col-span-3">
          <Card className="h-full border-0 shadow-md bg-gradient-to-br from-background via-background to-background/90 flex flex-col overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardHeader className="p-5 flex-grow">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 rounded-full bg-primary/10 group-hover:bg-primary/15 transition-colors duration-300">
                  <Users className="h-4 w-4 text-primary" />
                </div>
                <CardTitle className="text-lg">Community</CardTitle>
              </div>
              <CardDescription className="text-sm">
                Discuss strategies and connect with players
              </CardDescription>
              <div className="mt-4 flex justify-end">
                <div className="p-1 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <ChevronRight className="h-4 w-4 text-primary" />
                </div>
              </div>
            </CardHeader>
          </Card>
        </Link>
        
        <Link href="/blog" className="group md:col-span-3 lg:col-span-3">
          <Card className="h-full border-0 shadow-md bg-gradient-to-br from-background via-background to-background/90 flex flex-col overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardHeader className="p-5 flex-grow">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 rounded-full bg-primary/10 group-hover:bg-primary/15 transition-colors duration-300">
                  <Newspaper className="h-4 w-4 text-primary" />
                </div>
                <CardTitle className="text-lg">Blog & News</CardTitle>
              </div>
              <CardDescription className="text-sm">
                Stay updated with latest gaming content
              </CardDescription>
              <div className="mt-4 flex justify-end">
                <div className="p-1 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <ChevronRight className="h-4 w-4 text-primary" />
                </div>
              </div>
            </CardHeader>
          </Card>
        </Link>
      </div>
    </div>
  )
}