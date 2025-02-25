import { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Blog | Not the FNGs",
  description: "Latest news, guides, and interviews from our gaming community",
}

const posts = [
  {
    id: 1,
    title: "Top 10 Gaming Strategies for 2024",
    description: "Master these strategies to improve your gameplay and climb the ranks.",
    category: "Guide",
    author: "Pro Player X",
    date: "2024-01-15",
    readTime: "8 min read",
    image: "/blog/strategy-guide.jpg",
  },
  {
    id: 2,
    title: "Interview with Tournament Champion",
    description: "An exclusive interview with our latest tournament winner discussing their journey.",
    category: "Interview",
    author: "Gaming Staff",
    date: "2024-01-10",
    readTime: "12 min read",
    image: "/blog/champion-interview.jpg",
  },
  {
    id: 3,
    title: "Upcoming Game Updates: What to Expect",
    description: "A detailed breakdown of upcoming features and balance changes.",
    category: "News",
    author: "Game Analyst",
    date: "2024-01-05",
    readTime: "5 min read",
    image: "/blog/game-updates.jpg",
  },
  {
    id: 4,
    title: "Building the Perfect Gaming Setup",
    description: "Essential gear and setup tips for competitive gaming.",
    category: "Guide",
    author: "Tech Expert",
    date: "2024-01-01",
    readTime: "10 min read",
    image: "/blog/gaming-setup.jpg",
  },
]

const categories = [
  { name: "All", count: 12 },
  { name: "News", count: 4 },
  { name: "Guides", count: 5 },
  { name: "Interviews", count: 3 },
]

export default function BlogPage() {
  return (
    <div className="container mx-auto py-8 space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight animate-glow">Blog</h1>
        <p className="text-muted-foreground max-w-2xl">
          Stay up to date with the latest news, guides, and stories from our gaming community.
        </p>
      </div>

      {/* Categories */}
      <div className="flex gap-2 flex-wrap">
        {categories.map((category) => (
          <Button
            key={category.name}
            variant={category.name === "All" ? "default" : "outline"}
            className="hover-glow"
          >
            {category.name}
            <Badge variant="secondary" className="ml-2">
              {category.count}
            </Badge>
          </Button>
        ))}
      </div>

      {/* Featured Post */}
      <Card className="hover-glow overflow-hidden">
        <div className="md:grid md:grid-cols-2">
          <div className="aspect-video bg-muted animate-pulse" />
          <div className="p-6">
            <div className="space-y-4">
              <Badge>{posts[0].category}</Badge>
              <h2 className="text-2xl font-bold tracking-tight">{posts[0].title}</h2>
              <p className="text-muted-foreground">{posts[0].description}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>{posts[0].author}</span>
                <span>•</span>
                <span>{posts[0].date}</span>
                <span>•</span>
                <span>{posts[0].readTime}</span>
              </div>
              <Button>Read More</Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Post Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.slice(1).map((post) => (
          <Card key={post.id} className="hover-glow overflow-hidden">
            <div className="aspect-video bg-muted animate-pulse" />
            <CardHeader className="space-y-2">
              <div className="flex items-center justify-between">
                <Badge>{post.category}</Badge>
                <span className="text-sm text-muted-foreground">{post.readTime}</span>
              </div>
              <CardTitle className="line-clamp-2">{post.title}</CardTitle>
              <CardDescription className="line-clamp-2">
                {post.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  <span>{post.author}</span>
                  <span className="mx-2">•</span>
                  <span>{post.date}</span>
                </div>
                <Button variant="ghost" size="sm">
                  Read More
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <Button variant="outline" size="lg" className="animate-pulse-slow">
          Load More Posts
        </Button>
      </div>
    </div>
  )
} 