import { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "About Us | not the FNGs",
  description: "Learn about our gaming community's history, values, and achievements",
}

const champions = [
  {
    name: "Sarah 'NightHawk' Chen",
    title: "Solo Champion 2023",
    achievements: ["3x Tournament Winner", "World Record Holder", "Community Mentor"],
    image: "/champions/champion1.jpg",
  },
  {
    name: "Marcus 'BlitzKing' Thompson",
    title: "Team Leader - Elite Squad",
    achievements: ["5x Team Championship", "Strategy Guide Author", "Youth Coach"],
    image: "/champions/champion2.jpg",
  },
  {
    name: "Elena 'Valkyrie' Rodriguez",
    title: "Rising Star 2023",
    achievements: ["Rookie of the Year", "2x Tournament Finalist", "Content Creator"],
    image: "/champions/champion3.jpg",
  },
]

const milestones = [
  {
    year: "2020",
    title: "Community Founded",
    description: "Started with a small group of passionate gamers",
  },
  {
    year: "2021",
    title: "First Major Tournament",
    description: "Hosted our inaugural championship with 100+ participants",
  },
  {
    year: "2022",
    title: "Global Expansion",
    description: "Reached players from 50+ countries",
  },
  {
    year: "2023",
    title: "Professional League",
    description: "Launched our professional gaming league",
  },
]

export default function AboutPage() {
  return (
    <div className="container mx-auto py-8 space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight animate-glow">Our Gaming Community</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Founded by passionate gamers for gamers, we've built a thriving community where players
          can compete, learn, and grow together in a supportive environment.
        </p>
      </section>

      {/* Values Section */}
      <section className="grid gap-6 md:grid-cols-3">
        <Card className="hover-glow">
          <CardHeader>
            <CardTitle>Competition</CardTitle>
            <CardDescription>
              We foster healthy competition that brings out the best in every player
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="hover-glow">
          <CardHeader>
            <CardTitle>Community</CardTitle>
            <CardDescription>
              Building lasting friendships and connections through gaming
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="hover-glow">
          <CardHeader>
            <CardTitle>Growth</CardTitle>
            <CardDescription>
              Supporting players in their journey to improve and achieve their goals
            </CardDescription>
          </CardHeader>
        </Card>
      </section>

      {/* Timeline Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">Our Journey</h2>
        <div className="grid gap-6 md:grid-cols-4">
          {milestones.map((milestone) => (
            <Card key={milestone.year} className="hover-glow">
              <CardHeader>
                <CardTitle className="text-primary">{milestone.year}</CardTitle>
                <CardDescription className="font-semibold">{milestone.title}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{milestone.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Champions Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">Our Champions</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {champions.map((champion) => (
            <Card key={champion.name} className="hover-glow overflow-hidden">
              <CardHeader>
                <div className="aspect-video rounded-md overflow-hidden mb-4">
                  <div className="w-full h-full bg-muted animate-pulse" />
                </div>
                <CardTitle className="text-xl">{champion.name}</CardTitle>
                <CardDescription>{champion.title}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {champion.achievements.map((achievement) => (
                    <li key={achievement} className="text-sm text-muted-foreground">
                      • {achievement}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Join Section */}
      <section className="text-center space-y-4 py-8">
        <h2 className="text-3xl font-bold tracking-tight">Join Our Community</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Whether you're a casual player or aspiring pro, there's a place for you in our community.
          Join us and be part of something special.
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
    </div>
  )
} 