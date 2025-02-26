"use client"

import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Bell,
  Search,
  User,
  Settings,
  LogOut,
  ChevronDown,
  Trophy,
  Heart,
  MessageSquare,
  X,
  Crown,
  Gamepad2,
  Shield,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

interface Notification {
  id: number
  title: string
  description: string
  time: string
  read: boolean
  type: "achievement" | "like" | "comment" | "system"
}

const notifications: Notification[] = [
  {
    id: 1,
    title: "Achievement Unlocked",
    description: "You've reached 100 wins!",
    time: "2 hours ago",
    read: false,
    type: "achievement",
  },
  {
    id: 2,
    title: "New Like",
    description: "ToxicKnight liked your post",
    time: "5 hours ago",
    read: false,
    type: "like",
  },
  {
    id: 3,
    title: "New Comment",
    description: "NightHawk commented on your strategy guide",
    time: "1 day ago",
    read: true,
    type: "comment",
  },
  {
    id: 4,
    title: "System Update",
    description: "New tournament system is now live",
    time: "2 days ago",
    read: true,
    type: "system",
  },
]

const userStats = {
  level: 42,
  xp: 8750,
  nextLevel: 10000,
  rank: "Diamond",
  wins: 284,
  losses: 126,
}

function NotificationIcon({ type }: { type: Notification["type"] }) {
  switch (type) {
    case "achievement":
      return <Trophy className="h-4 w-4 text-amber-500" />
    case "like":
      return <Heart className="h-4 w-4 text-rose-500" />
    case "comment":
      return <MessageSquare className="h-4 w-4 text-blue-500" />
    case "system":
      return <Shield className="h-4 w-4 text-emerald-500" />
    default:
      return <Bell className="h-4 w-4 text-primary" />
  }
}

function getRankColor(rank: string) {
  switch (rank.toLowerCase()) {
    case "bronze":
      return "text-amber-600";
    case "silver":
      return "text-slate-400";
    case "gold":
      return "text-amber-400";
    case "platinum":
      return "text-cyan-300";
    case "diamond":
      return "text-indigo-400";
    case "master":
      return "text-fuchsia-500";
    default:
      return "text-primary";
  }
}

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Handle clicks outside of search to close it
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Focus input when search opens
  useEffect(() => {
    if (searchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchOpen]);

  const handleSearchClick = () => {
    setSearchOpen(true);
  };

  const clearSearch = () => {
    setSearchQuery("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="sticky top-0 z-50 border-b border-border/40 backdrop-blur-md bg-background/80">
      <div className="flex h-16 items-center justify-between px-4 md:px-6 lg:px-8">
        <div>
          
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          {/* Search */}
          <div 
            ref={searchRef}
            className={cn(
              "relative transition-all duration-300",
              searchOpen ? "w-full md:w-80 lg:w-96" : "w-9"
            )}
          >
            <div className="relative flex items-center">
              <Button 
                onClick={handleSearchClick}
                className={cn(
                  "absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-full",
                  !searchOpen && "bg-muted/50 hover:bg-muted"
                )}
              >
                <Search className="h-4 w-4 text-muted-foreground" />
              </Button>
              <Input
                ref={inputRef}
                className={cn(
                  "h-9 transition-all duration-300 pr-8",
                  searchOpen 
                    ? "rounded-full border-border bg-muted/30 pl-10 focus-visible:ring-primary/20" 
                    : "w-9 cursor-pointer rounded-full border-transparent bg-transparent pl-9 pr-0"
                )}
                placeholder="Search competitions, players, posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onClick={handleSearchClick}
              />
              {searchOpen && searchQuery && (
                <Button 
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
            {searchOpen && searchQuery && (
              <div className="absolute top-full mt-1 w-full rounded-lg border border-border/50 bg-background/95 p-2 shadow-lg backdrop-blur-sm">
                <div className="text-xs font-medium text-muted-foreground p-2">
                  No results found for "{searchQuery}"
        </div>
              </div>
            )}
      </div>

      {/* Notifications */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
                className="relative h-9 w-9 rounded-full hover:bg-muted"
          >
            <Bell className="h-4 w-4" />
            {notifications.some(n => !n.read) && (
                  <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-primary ring-2 ring-background" />
            )}
          </Button>
        </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80 p-0 overflow-hidden">
              <div className="bg-muted/50 p-4">
                <DropdownMenuLabel className="flex items-center justify-between">
                  <span>Notifications</span>
                  <Badge variant="outline" className="text-xs font-normal bg-background/50 backdrop-blur-sm">
                    {notifications.filter(n => !n.read).length} new
                  </Badge>
                </DropdownMenuLabel>
              </div>
              <div className="max-h-[400px] overflow-y-auto">
          {notifications.map((notification) => (
            <DropdownMenuItem
              key={notification.id}
              className={cn(
                      "flex items-start gap-3 p-3 hover:bg-muted/50",
                      !notification.read && "bg-muted/20"
              )}
            >
                    <div className="mt-1 p-1.5 rounded-full bg-background">
                <NotificationIcon type={notification.type} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium leading-none">
                  {notification.title}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {notification.description}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {notification.time}
                </p>
              </div>
                    {!notification.read && (
                      <div className="h-2 w-2 rounded-full bg-primary mt-1.5" />
                    )}
            </DropdownMenuItem>
          ))}
              </div>
              <div className="p-2 border-t border-border/50">
                <Button variant="ghost" size="sm" className="w-full text-xs justify-center">
                  View all notifications
                </Button>
              </div>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* User Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
                className="relative h-9 gap-2 pl-0 hover:bg-muted rounded-full pr-2"
          >
                <div className="relative">
                  <Avatar className="h-8 w-8 border-2 border-background">
              <AvatarImage src="/avatar.png" alt="User" />
                    <AvatarFallback className="bg-gradient-to-br from-primary/80 to-secondary/80 text-white">FNG</AvatarFallback>
            </Avatar>
                  <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-background flex items-center justify-center">
                    <Crown className="h-3 w-3 text-amber-500" />
                  </div>
                </div>
            <span className="hidden text-sm font-medium md:inline-block">
              immaculate
            </span>
                <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
          </Button>
        </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64 p-0 overflow-hidden">
              <div className="bg-muted/50 p-4">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10 border-2 border-background">
                    <AvatarImage src="/imma.jpg" alt="User" />
                    <AvatarFallback className="bg-gradient-to-br from-primary/80 to-secondary/80 text-white">FNG</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">immaculate</p>
                    <p className="text-xs text-muted-foreground">wisdomrichard62@gmail.com</p>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <div className="flex-1">
                    <div className="flex items-center justify-between text-xs">
                      <span>Level {userStats.level}</span>
                      <span>{userStats.xp}/{userStats.nextLevel} XP</span>
                    </div>
                    <div className="mt-1 h-1.5 w-full rounded-full bg-background/50 overflow-hidden">
                      <div 
                        className="h-full rounded-full bg-gradient-to-r from-primary to-secondary" 
                        style={{ width: `${(userStats.xp / userStats.nextLevel) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-2">
                <div className="grid grid-cols-2 gap-1 mb-2">
                  <div className="rounded-md p-2 hover:bg-muted/50 transition-colors">
                    <p className="text-xs text-muted-foreground">Rank</p>
                    <p className={`text-sm font-medium ${getRankColor(userStats.rank)}`}>{userStats.rank}</p>
                  </div>
                  <div className="rounded-md p-2 hover:bg-muted/50 transition-colors">
                    <p className="text-xs text-muted-foreground">Win Rate</p>
                    <p className="text-sm font-medium">{Math.round((userStats.wins / (userStats.wins + userStats.losses)) * 100)}%</p>
                  </div>
                </div>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
                  <DropdownMenuItem className="py-2">
                    <User className="mr-2 h-4 w-4 text-primary" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="py-2">
                    <Trophy className="mr-2 h-4 w-4 text-amber-500" />
                    <span>My Tournaments</span>
            </DropdownMenuItem>
                  <DropdownMenuItem className="py-2">
                    <Settings className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>Settings</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
                <DropdownMenuItem className="text-rose-500 py-2">
            <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
          </DropdownMenuItem>
              </div>
        </DropdownMenuContent>
      </DropdownMenu>
        </div>
      </div>
    </div>
  )
}