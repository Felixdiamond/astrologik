import { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

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
    replies: 24,
    views: 156,
    lastReply: "2 hours ago",
    category: "Strategy & Tips",
  },
  {
    id: 2,
    title: "Game crashing after latest update",
    author: "TechUser",
    replies: 15,
    views: 89,
    lastReply: "4 hours ago",
    category: "Technical Support",
  },
  {
    id: 3,
    title: "Looking for squad members",
    author: "TeamPlayer",
    replies: 32,
    views: 245,
    lastReply: "1 hour ago",
    category: "General Discussion",
  },
]

export default function ForumPage() {
  return (
    <div className="container mx-auto py-8 space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight animate-glow">Community Forum</h1>
        <p className="text-muted-foreground max-w-2xl">
          Join discussions, share your experiences, and connect with fellow gamers.
        </p>
      </div>

      {/* Search and Actions */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Input
          placeholder="Search topics..."
          className="sm:max-w-[300px]"
        />
        <Button className="animate-pulse-slow">New Topic</Button>
      </div>

      {/* Categories */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Categories</h2>
        <div className="grid gap-4">
          {categories.map((category) => (
            <Card key={category.id} className="hover-glow">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-primary">{category.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <CardTitle>{category.name}</CardTitle>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{category.topics} topics</span>
                        <span>•</span>
                        <span>{category.posts} posts</span>
                      </div>
                    </div>
                    <CardDescription>{category.description}</CardDescription>
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
          <h2 className="text-2xl font-bold tracking-tight">Recent Topics</h2>
          <Button variant="ghost">View All</Button>
        </div>
        <div className="grid gap-4">
          {recentTopics.map((topic) => (
            <Card key={topic.id} className="hover-glow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <CardTitle className="text-xl">{topic.title}</CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>by {topic.author}</span>
                      <span>•</span>
                      <Badge variant="secondary">{topic.category}</Badge>
                    </div>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">
                    <div>{topic.replies} replies</div>
                    <div>{topic.views} views</div>
                    <div>Last reply {topic.lastReply}</div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      {/* Community Stats */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card className="hover-glow">
          <CardHeader>
            <CardTitle className="text-center text-4xl font-bold text-primary">1,234</CardTitle>
            <CardDescription className="text-center">Members</CardDescription>
          </CardHeader>
        </Card>
        <Card className="hover-glow">
          <CardHeader>
            <CardTitle className="text-center text-4xl font-bold text-primary">479</CardTitle>
            <CardDescription className="text-center">Topics</CardDescription>
          </CardHeader>
        </Card>
        <Card className="hover-glow">
          <CardHeader>
            <CardTitle className="text-center text-4xl font-bold text-primary">2,867</CardTitle>
            <CardDescription className="text-center">Posts</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  )
} 