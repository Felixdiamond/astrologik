import { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageSquare, TrendingUp, Clock, Users, Search, Plus, Filter } from "lucide-react"

export const metadata: Metadata = {
  title: "Forum | Not the FNGs",
  description: "Join discussions with fellow gamers in our community forum",
}

const categories = [
  {
    id: 1,
    name: "General Discussion",
    description: "Chat about anything gaming related",
    topics: 234,
    posts: 1543,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
        <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
      </svg>
    ),
  },
  {
    id: 2,
    name: "Strategy & Tips",
    description: "Share and learn gaming strategies",
    topics: 156,
    posts: 892,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 12c0-3.5 2.5-6 6.5-6 4 0 5.5 3 5.5 6s-1.5 6-5.5 6c-4 0-6.5-2.5-6.5-6Z" />
        <path d="M14 12c0-3.5 2-6 5-6 3.5 0 5 2.5 5 6s-1.5 6-5 6c-3 0-5-2.5-5-6Z" />
      </svg>
    ),
  },
  {
    id: 3,
    name: "Technical Support",
    description: "Get help with technical issues",
    topics: 89,
    posts: 432,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
]

const recentTopics = [
  {
    id: 1,
    title: "Best loadout for competitive play?",
    author: "ProGamer123",
    avatar: "/avatars/user1.png",
    replies: 24,
    views: 156,
    lastReply: "2 hours ago",
    category: "Strategy & Tips",
    isHot: true,
  },
  {
    id: 2,
    title: "Game crashing after latest update",
    author: "TechUser",
    avatar: "/avatars/user2.png",
    replies: 15,
    views: 89,
    lastReply: "4 hours ago",
    category: "Technical Support",
    isHot: false,
  },
  {
    id: 3,
    title: "Looking for squad members",
    author: "TeamPlayer",
    avatar: "/avatars/user3.png",
    replies: 32,
    views: 245,
    lastReply: "1 hour ago",
    category: "General Discussion",
    isHot: true,
  },
]

export default function ForumPage() {
  return (
    <div className="container mx-auto py-10 space-y-10 px-4 sm:px-6">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-gradient">Community Forum</h1>
        <p className="text-muted-foreground max-w-2xl">
          Join discussions, share your experiences, and connect with fellow gamers in our vibrant community.
        </p>
      </div>

      {/* Search and Actions */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative w-full sm:max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search topics..."
            className="pl-10 bg-background/50 border-border/60 focus-visible:ring-primary/40"
          />
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <Button variant="outline" size="sm" className="flex-1 sm:flex-none">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="premium" size="sm" className="flex-1 sm:flex-none">
            <Plus className="h-4 w-4 mr-2" />
            New Topic
          </Button>
        </div>
      </div>

      {/* Forum Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Categories */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight flex items-center">
              <MessageSquare className="h-5 w-5 mr-2 text-primary" />
              Categories
            </h2>
            <div className="grid gap-4">
              {categories.map((category) => (
                <Card key={category.id} className="overflow-hidden transition-all duration-300 hover:shadow-md hover:shadow-primary/10 hover:border-primary/20 group">
                  <CardHeader className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 p-2 rounded-md bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                        {category.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <CardTitle className="group-hover:text-primary transition-colors">{category.name}</CardTitle>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>{category.topics} topics</span>
                            <span>•</span>
                            <span>{category.posts} posts</span>
                          </div>
                        </div>
                        <CardDescription className="mt-1">{category.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* Recent Topics */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold tracking-tight flex items-center">
                <Clock className="h-5 w-5 mr-2 text-primary" />
                Recent Topics
              </h2>
              <Tabs defaultValue="recent" className="w-[300px]">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="recent">Recent</TabsTrigger>
                  <TabsTrigger value="popular">Popular</TabsTrigger>
                  <TabsTrigger value="unanswered">Unanswered</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            <div className="grid gap-4">
              {recentTopics.map((topic) => (
                <Card key={topic.id} className="overflow-hidden transition-all duration-300 hover:shadow-md hover:shadow-primary/10 hover:border-primary/20">
                  <CardHeader className="p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          {topic.isHot && (
                            <Badge variant="secondary" className="bg-accent/20 text-accent-foreground">
                              <TrendingUp className="h-3 w-3 mr-1" /> Hot
                            </Badge>
                          )}
                          <Badge variant="outline" className="bg-background/50">{topic.category}</Badge>
                        </div>
                        <CardTitle className="text-xl hover:text-primary transition-colors">{topic.title}</CardTitle>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>by {topic.author}</span>
                          <span>•</span>
                          <span>Last reply {topic.lastReply}</span>
                        </div>
                      </div>
                      <div className="text-right text-sm text-muted-foreground space-y-1">
                        <div className="flex items-center justify-end gap-1">
                          <MessageSquare className="h-3 w-3" />
                          <span>{topic.replies}</span>
                        </div>
                        <div className="flex items-center justify-end gap-1">
                          <Users className="h-3 w-3" />
                          <span>{topic.views}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
            <div className="flex justify-center mt-6">
              <Button variant="outline">Load More Topics</Button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Community Stats */}
          <Card className="overflow-hidden">
            <CardHeader className="bg-muted/30 pb-2">
              <CardTitle className="text-lg flex items-center">
                <Users className="h-4 w-4 mr-2 text-primary" />
                Community Stats
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Members</span>
                <span className="font-bold text-lg text-primary">1,234</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Topics</span>
                <span className="font-bold text-lg text-primary">479</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Posts</span>
                <span className="font-bold text-lg text-primary">2,867</span>
              </div>
            </CardContent>
          </Card>

          {/* Top Contributors */}
          <Card className="overflow-hidden">
            <CardHeader className="bg-muted/30 pb-2">
              <CardTitle className="text-lg">Top Contributors</CardTitle>
            </CardHeader>
            <CardContent className="p-4 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary/20"></div>
                  <span>ProGamer123</span>
                </div>
                <Badge variant="outline">156 posts</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary/20"></div>
                  <span>TechUser</span>
                </div>
                <Badge variant="outline">124 posts</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary/20"></div>
                  <span>TeamPlayer</span>
                </div>
                <Badge variant="outline">98 posts</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Forum Rules */}
          <Card className="overflow-hidden">
            <CardHeader className="bg-muted/30 pb-2">
              <CardTitle className="text-lg">Forum Rules</CardTitle>
            </CardHeader>
            <CardContent className="p-4 text-sm space-y-2">
              <p>• Be respectful to other members</p>
              <p>• No spamming or self-promotion</p>
              <p>• Keep discussions on-topic</p>
              <p>• No offensive language or content</p>
              <p>• Follow game-specific guidelines</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 