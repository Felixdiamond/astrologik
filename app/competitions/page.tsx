import { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Competitions | Not the FNGs",
  description: "Join exciting gaming competitions and tournaments",
}

const competitions = [
  {
    id: 1,
    title: "Solo Showdown",
    description: "Battle it out in intense 1v1 matches",
    format: "1v1",
    startDate: "2024-02-01",
    prizePool: "$1,000",
    registrationOpen: true,
    participants: 64,
    maxParticipants: 128,
  },
  {
    id: 2,
    title: "Duo Domination",
    description: "Team up with a partner for epic 2v2 battles",
    format: "2v2",
    startDate: "2024-02-15",
    prizePool: "$2,000",
    registrationOpen: true,
    participants: 32,
    maxParticipants: 64,
  },
  {
    id: 3,
    title: "Squad Wars",
    description: "Form a squad of 4 and compete for glory",
    format: "4v4",
    startDate: "2024-03-01",
    prizePool: "$5,000",
    registrationOpen: false,
    participants: 16,
    maxParticipants: 32,
  },
]

const pastCompetitions = [
  {
    id: 4,
    title: "Winter Championship",
    description: "The ultimate winter gaming showdown",
    format: "1v1",
    date: "2023-12-15",
    prizePool: "$3,000",
    winner: "ProGamer123",
    participants: 128,
  },
  {
    id: 5,
    title: "Team Tactics",
    description: "Strategic 3v3 team battles",
    format: "3v3",
    date: "2023-11-30",
    prizePool: "$4,000",
    winner: "TeamElite",
    participants: 48,
  },
]

export default function CompetitionsPage() {
  return (
    <div className="container mx-auto py-8 space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight animate-glow">Competitions</h1>
        <p className="text-muted-foreground">
          Join our exciting tournaments and compete with players from around the world
        </p>
      </div>

      <Tabs defaultValue="upcoming" className="space-y-4">
        <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
          <TabsTrigger value="upcoming" className="hover-glow">Upcoming</TabsTrigger>
          <TabsTrigger value="past" className="hover-glow">Past Events</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {competitions.map((competition) => (
              <Card key={competition.id} className="hover-glow overflow-hidden">
                <CardHeader className="space-y-1">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl">{competition.title}</CardTitle>
                    <Badge variant={competition.registrationOpen ? "default" : "secondary"}>
                      {competition.registrationOpen ? "Open" : "Coming Soon"}
                    </Badge>
                  </div>
                  <CardDescription>{competition.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Format:</span>
                        <span className="font-medium">{competition.format}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Start Date:</span>
                        <span className="font-medium">{competition.startDate}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Prize Pool:</span>
                        <span className="font-medium">{competition.prizePool}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Participants:</span>
                        <span className="font-medium">
                          {competition.participants}/{competition.maxParticipants}
                        </span>
                      </div>
                    </div>
                    <Button className="w-full animate-pulse-slow" disabled={!competition.registrationOpen}>
                      {competition.registrationOpen ? "Register Now" : "Coming Soon"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="past" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pastCompetitions.map((competition) => (
              <Card key={competition.id} className="hover-glow overflow-hidden">
                <CardHeader className="space-y-1">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl">{competition.title}</CardTitle>
                    <Badge variant="secondary">Completed</Badge>
                  </div>
                  <CardDescription>{competition.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Format:</span>
                        <span className="font-medium">{competition.format}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Date:</span>
                        <span className="font-medium">{competition.date}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Prize Pool:</span>
                        <span className="font-medium">{competition.prizePool}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Winner:</span>
                        <span className="font-medium">{competition.winner}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Participants:</span>
                        <span className="font-medium">{competition.participants}</span>
                      </div>
                    </div>
                    <Button variant="secondary" className="w-full">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
} 