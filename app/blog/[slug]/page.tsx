import Image from "next/image"
import { ArrowLeft, Calendar, Clock, Share2, ThumbsUp, BookmarkPlus, Twitter, Facebook, Linkedin } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

// This would typically come from a CMS or API
const posts = {
  "top-10-gaming-strategies-for-competitive-play": {
    title: "Top 10 Gaming Strategies for Competitive Play",
    excerpt: "Master these essential strategies to improve your competitive gaming performance and climb the ranks.",
    content: `
      <h2>1. Master Map Awareness</h2>
      <p>Map awareness is crucial in competitive gaming. Always keep an eye on the minimap and communicate enemy positions to your team. This simple habit can prevent ambushes and create opportunities for your team.</p>

      <h2>2. Economy Management</h2>
      <p>Whether you're playing MOBAs, FPS, or strategy games, managing your resources effectively is key to victory. Learn when to save and when to invest in equipment or upgrades.</p>

      <h2>3. Team Communication</h2>
      <p>Clear and concise communication can make or break a match. Use callouts, share information about cooldowns, and coordinate strategies with your teammates.</p>

      <h2>4. Practice Aim Training</h2>
      <p>For FPS games, regular aim training is essential. Use aim trainers and practice different scenarios to improve your accuracy and reaction time.</p>

      <h2>5. Study Pro Players</h2>
      <p>Watch professional matches and analyze their strategies, positioning, and decision-making. Try to understand why they make certain choices in different situations.</p>
    `,
    date: "Dec 19, 2023",
    readTime: "8 min read",
    category: "Strategy",
    imageUrl: "/blog/strategy.png",
    author: {
      name: "Alex Chen",
      avatar: "/avatars/alex.png",
      bio: "Professional esports coach and strategy analyst"
    }
  },
  "the-evolution-of-esports-past-present-and-future": {
    title: "The Evolution of Esports: Past, Present, and Future",
    excerpt: "A deep dive into how competitive gaming has transformed from small tournaments to filling stadiums.",
    content: `
      <h2>The Early Days</h2>
      <p>Esports began in small arcade competitions and LAN parties. The competitive spirit was there from the start, but the infrastructure was minimal.</p>

      <h2>The Rise of Professional Gaming</h2>
      <p>With the advent of online gaming and streaming platforms, esports exploded in popularity. Major tournaments began offering substantial prize pools.</p>

      <h2>Modern Esports</h2>
      <p>Today, esports fills stadiums and attracts millions of viewers online. Professional teams have sophisticated training facilities and support staff.</p>

      <h2>The Future</h2>
      <p>Virtual reality, mobile esports, and new game genres are shaping the future of competitive gaming. The industry continues to innovate and grow.</p>
    `,
    date: "Dec 18, 2023",
    readTime: "6 min read",
    category: "Esports",
    imageUrl: "/blog/esports.png",
    author: {
      name: "Sarah Johnson",
      avatar: "/avatars/sarah.png",
      bio: "Esports journalist and industry analyst"
    }
  },
  "gaming-setup-guide-build-your-perfect-battle-station": {
    title: "Gaming Setup Guide: Build Your Perfect Battle Station",
    excerpt: "Everything you need to know about creating the ultimate gaming setup for maximum performance.",
    content: `
      <h2>Choosing the Right Hardware</h2>
      <p>Your gaming PC is the heart of your setup. We'll guide you through selecting the perfect components for your needs and budget.</p>

      <h2>Ergonomics Matter</h2>
      <p>A comfortable gaming chair and proper desk height are crucial for long gaming sessions. Learn how to optimize your setup for health and performance.</p>

      <h2>Peripherals and Accessories</h2>
      <p>From mechanical keyboards to high-refresh monitors, discover the best peripherals to enhance your gaming experience.</p>

      <h2>Cable Management</h2>
      <p>A clean setup is an efficient setup. Learn professional cable management techniques to keep your battle station organized.</p>
    `,
    date: "Dec 17, 2023",
    readTime: "7 min read",
    category: "Setup",
    imageUrl: "/blog/setup.png",
    author: {
      name: "Mike Wilson",
      avatar: "/avatars/mike.png",
      bio: "Tech reviewer and setup specialist"
    }
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  console.log('Requested slug:', params.slug)
  console.log('Available slugs:', Object.keys(posts))
  
  const post = posts[params.slug as keyof typeof posts]
  if (!post) {
    console.log('Post not found for slug:', params.slug)
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">The article you're looking for doesn't exist or has been moved.</p>
          <Link href="/blog">
            <Button variant="outline" size="lg">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <article className="min-h-screen bg-white dark:bg-gray-950">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/blog">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">
              <BookmarkPlus className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[75vh] w-full mt-16">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-16 max-w-4xl">
            <Badge className="mb-6 bg-purple-500 hover:bg-purple-600 py-1 px-3 text-sm">
              {post.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/90">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">{post.author.name}</p>
                  <p className="text-sm text-white/70">{post.author.bio}</p>
                </div>
              </div>
              <Separator orientation="vertical" className="h-8 bg-white/20" />
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span className="text-sm">{post.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4" />
                  <span className="text-sm">{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <Card className="p-6 sticky top-24">
              <h3 className="text-lg font-semibold mb-4">Share this article</h3>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="lg" className="flex-1">
                  <Twitter className="h-4 w-4 mr-2" />
                  Tweet
                </Button>
                <Button variant="outline" size="lg" className="flex-1">
                  <Facebook className="h-4 w-4 mr-2" />
                  Share
                </Button>
                <Button variant="outline" size="lg" className="flex-1">
                  <Linkedin className="h-4 w-4 mr-2" />
                  Post
                </Button>
              </div>

              <Separator className="my-6" />

              <h3 className="text-lg font-semibold mb-4">Subscribe to our newsletter</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Get the latest gaming news and updates delivered to your inbox.
              </p>
              <div className="space-y-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"
                />
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Subscribe
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16 max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.values(posts).slice(0, 3).map((relatedPost, index) => (
              <Link 
                href={`/blog/${relatedPost.title.toLowerCase().replace(/\s+/g, '-')}`}
                key={index}
                className="group"
              >
                <Card className="overflow-hidden h-full hover:shadow-lg transition-all duration-300">
                  <div className="relative h-48">
                    <Image
                      src={relatedPost.imageUrl}
                      alt={relatedPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <Badge variant="secondary" className="mb-2">
                      {relatedPost.category}
                    </Badge>
                    <h3 className="font-semibold mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
} 