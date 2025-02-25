import { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Trophy, Users, Calendar, Target, Zap, Globe, Award, ArrowRight, ChevronRight, Star, Heart, Shield } from "lucide-react"

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
    quote: "Gaming isn't just about winning, it's about pushing your limits and growing with every match.",
    game: "Battle Royale",
  },
  {
    name: "Marcus 'BlitzKing' Thompson",
    title: "Team Leader - Elite Squad",
    achievements: ["5x Team Championship", "Strategy Guide Author", "Youth Coach"],
    image: "/champions/champion2.jpg",
    quote: "The best teams aren't just skilled individuals, they're players who understand the power of coordination and trust.",
    game: "Team Tactics",
  },
  {
    name: "Elena 'Valkyrie' Rodriguez",
    title: "Rising Star 2023",
    achievements: ["Rookie of the Year", "2x Tournament Finalist", "Content Creator"],
    image: "/champions/champion3.jpg",
    quote: "I never expected to go pro, but with the support of this community, I found my path to success.",
    game: "Arena Legends",
  },
]

const milestones = [
  {
    year: "2020",
    title: "Community Founded",
    description: "Started with a small group of passionate gamers who shared a vision of creating an inclusive competitive environment.",
    icon: <Users className="h-5 w-5" />,
    color: "from-violet-500 to-indigo-500",
  },
  {
    year: "2021",
    title: "First Major Tournament",
    description: "Hosted our inaugural championship with 100+ participants from across the country, setting the standard for our future events.",
    icon: <Trophy className="h-5 w-5" />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    year: "2022",
    title: "Global Expansion",
    description: "Reached players from 50+ countries, establishing international tournaments and cross-regional competitions.",
    icon: <Globe className="h-5 w-5" />,
    color: "from-green-500 to-emerald-500",
  },
  {
    year: "2023",
    title: "Professional League",
    description: "Launched our professional gaming league with sponsored teams, regular seasons, and championship finals with prize pools.",
    icon: <Award className="h-5 w-5" />,
    color: "from-amber-500 to-orange-500",
  },
]

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "Founder & CEO",
    bio: "Former esports pro with a vision to create the most supportive gaming community in the world.",
    image: "/team/alex.jpg",
  },
  {
    name: "Mia Williams",
    role: "Tournament Director",
    bio: "Experienced event organizer who has managed gaming events with 10,000+ attendees.",
    image: "/team/mia.jpg",
  },
  {
    name: "David Park",
    role: "Community Manager",
    bio: "Passionate gamer focused on fostering positive interactions and supporting new members.",
    image: "/team/david.jpg",
  },
  {
    name: "Sophia Garcia",
    role: "Content Creator",
    bio: "Award-winning streamer who produces our tutorials, event highlights, and community spotlights.",
    image: "/team/sophia.jpg",
  },
]

export default function AboutPage() {
  return (
    <div className="container mx-auto py-10 space-y-16 px-4 sm:px-6">
      {/* Hero Section */}
      <section className="relative rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background z-0"></div>
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,transparent,#000000,transparent)]"></div>
        
        <div className="relative z-10 py-16 px-6 md:px-10 max-w-4xl mx-auto text-center space-y-6">
          <Badge variant="outline" className="bg-primary/10 text-primary-foreground border-primary/20 mb-4 py-1.5 px-4">
            Established 2020
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gradient">
            We Are Not The FNGs
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Founded by passionate gamers for gamers, we've built a thriving community where players
            can compete, learn, and grow together in a supportive environment.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Button size="lg" className="gap-2">
              Join Our Community <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              Our Discord <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <Card className="text-center bg-gradient-to-br from-background to-muted/20 border-primary/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-3xl md:text-4xl font-bold text-primary">10K+</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Active Members</p>
          </CardContent>
        </Card>
        <Card className="text-center bg-gradient-to-br from-background to-muted/20 border-primary/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-3xl md:text-4xl font-bold text-primary">50+</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Countries</p>
          </CardContent>
        </Card>
        <Card className="text-center bg-gradient-to-br from-background to-muted/20 border-primary/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-3xl md:text-4xl font-bold text-primary">200+</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Tournaments</p>
          </CardContent>
        </Card>
        <Card className="text-center bg-gradient-to-br from-background to-muted/20 border-primary/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-3xl md:text-4xl font-bold text-primary">$1M+</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Prize Money</p>
          </CardContent>
        </Card>
      </section>

      {/* Values Section */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Our Core Values</h2>
          <p className="text-muted-foreground">
            These principles guide everything we do, from tournament organization to community management.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="overflow-hidden transition-all duration-300 hover:shadow-md hover:shadow-primary/10 hover:border-primary/20 group">
            <div className="h-2 bg-gradient-to-r from-primary to-primary/50"></div>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <Target className="h-5 w-5" />
                </div>
                <CardTitle>Competition</CardTitle>
              </div>
              <CardDescription className="text-base">
                We foster healthy competition that brings out the best in every player, with fair play and respect at the core.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="overflow-hidden transition-all duration-300 hover:shadow-md hover:shadow-primary/10 hover:border-primary/20 group">
            <div className="h-2 bg-gradient-to-r from-secondary to-secondary/50"></div>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-full bg-secondary/10 text-secondary group-hover:bg-secondary/20 transition-colors">
                  <Heart className="h-5 w-5" />
                </div>
                <CardTitle>Community</CardTitle>
              </div>
              <CardDescription className="text-base">
                Building lasting friendships and connections through gaming, creating a space where everyone feels welcome.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="overflow-hidden transition-all duration-300 hover:shadow-md hover:shadow-primary/10 hover:border-primary/20 group">
            <div className="h-2 bg-gradient-to-r from-accent to-accent/50"></div>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-full bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors">
                  <Zap className="h-5 w-5" />
                </div>
                <CardTitle>Growth</CardTitle>
              </div>
              <CardDescription className="text-base">
                Supporting players in their journey to improve and achieve their goals, with resources and mentorship.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Our Journey</h2>
          <p className="text-muted-foreground">
            From humble beginnings to a global community, here's how we've grown over the years.
          </p>
        </div>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary/50 via-secondary/50 to-accent/50 rounded-full hidden md:block"></div>
          
          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <div 
                key={milestone.year} 
                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} group`}
              >
                {/* Timeline marker dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-6 hidden md:block">
                  <div className="w-3 h-3 rounded-full bg-primary group-hover:scale-150 group-hover:bg-secondary transition-all duration-500"></div>
                </div>
                
                {/* Content side */}
                <div className="md:w-1/2 flex justify-center md:justify-end">
                  <Card 
                    className="w-full md:max-w-md overflow-hidden transition-all duration-500 hover:shadow-lg hover:shadow-primary/20 hover:border-primary/30 group-hover:translate-y-[-4px]"
                  >
                    <div className={`h-1.5 bg-gradient-to-r ${milestone.color}`}></div>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors duration-300">
                          {milestone.icon}
                        </div>
                        <div>
                          <Badge variant="outline" className="mb-1 bg-primary/5 text-primary-foreground border-primary/20">
                            {milestone.year}
                          </Badge>
                          <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">{milestone.title}</CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Empty side */}
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Meet Our Team</h2>
          <p className="text-muted-foreground">
            The passionate individuals who work tirelessly to make our community thrive.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <Card key={member.name} className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/15 hover:border-primary/30 group">
              <div className="aspect-square bg-muted/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent bottom-0 h-1/2"></div>
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-0 group-hover:translate-y-[-8px] transition-transform duration-500">
                  <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-300">{member.name}</h3>
                  <p className="text-primary text-sm">{member.role}</p>
                </div>
              </div>
              <CardContent className="p-5 relative overflow-hidden">
                <div className="absolute w-1 h-0 group-hover:h-full bg-primary left-0 top-0 transition-all duration-500"></div>
                <p className="text-sm text-muted-foreground group-hover:pl-3 transition-all duration-500">{member.bio}</p>
                <div className="flex gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Champions Section */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Our Champions</h2>
          <p className="text-muted-foreground">
            Meet the elite players who have risen to the top of our competitive scene.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {champions.map((champion) => (
            <Card key={champion.name} className="overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-primary/15 hover:border-primary/30 group">
              <div className="aspect-video bg-muted/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent bottom-0 h-1/2"></div>
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <Badge className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm border-white/10">
                  {champion.game}
                </Badge>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Button variant="premium" size="sm" className="rounded-full px-4">View Profile</Button>
                </div>
              </div>
              <CardHeader className="pb-2 relative">
                <div className="absolute w-full h-0.5 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 top-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{champion.name}</CardTitle>
                    <CardDescription>{champion.title}</CardDescription>
                  </div>
                  <div className="p-2 rounded-full bg-primary/10 text-primary transform rotate-0 group-hover:rotate-[360deg] transition-transform duration-1000">
                    <Trophy className="h-5 w-5" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pb-4">
                <div className="mb-3 relative overflow-hidden">
                  <p className="text-sm text-muted-foreground italic transform translate-y-0 group-hover:translate-y-[-4px] transition-transform duration-300">"{champion.quote}"</p>
                </div>
                <div className="space-y-1">
                  {champion.achievements.map((achievement, i) => (
                    <div key={achievement} className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity" style={{ transitionDelay: `${i * 100}ms` }}>
                      <div className="p-1 rounded-full bg-primary/10 text-primary transform scale-100 group-hover:scale-110 transition-transform" style={{ transitionDelay: `${i * 100}ms` }}>
                        <Star className="h-3 w-3" />
                      </div>
                      <span className="text-sm transform translate-x-0 group-hover:translate-x-1 transition-transform" style={{ transitionDelay: `${i * 100}ms` }}>{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="pt-0 pb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Button variant="ghost" size="sm" className="w-full gap-2">
                  <span>View Tournament History</span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Join Section */}
      <section className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="absolute inset-0 bg-grid-white/5"></div>
        <div className="relative z-10 py-16 px-6 md:px-10 max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Join Our Community</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you're a casual player or aspiring pro, there's a place for you in our community.
            Join us and be part of something special.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="premium" className="gap-2">
              Join Now <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              Contact Us <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 