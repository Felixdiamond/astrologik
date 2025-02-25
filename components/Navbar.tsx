"use client"

import Link from "next/link"
import { useState } from "react"
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
} from "lucide-react"
import { cn } from "@/lib/utils"

interface Notification {
  id: number
  title: string
  description: string
  time: string
  read: boolean
  type: "achievement" | "like" | "comment"
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
]

function NotificationIcon({ type }: { type: Notification["type"] }) {
  switch (type) {
    case "achievement":
      return <Trophy className="h-4 w-4 text-primary" />
    case "like":
      return <Heart className="h-4 w-4 text-red-500" />
    case "comment":
      return <MessageSquare className="h-4 w-4 text-blue-500" />
  }
}

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <div className="relative flex h-16 items-center justify-end gap-4 px-4 md:px-6 lg:px-8">
      {/* Search */}
      <div className={cn(
        "transition-all duration-300",
        searchOpen ? "w-full md:w-96" : "w-9"
      )}>
        <div className="relative">
          <Input
            className={cn(
              "h-9 transition-all duration-300",
              !searchOpen && "w-9 cursor-pointer pl-9 pr-0"
            )}
            placeholder="Search..."
            onClick={() => setSearchOpen(true)}
            onBlur={() => setSearchOpen(false)}
          />
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        </div>
      </div>

      {/* Notifications */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="relative h-9 w-9"
          >
            <Bell className="h-4 w-4" />
            {notifications.some(n => !n.read) && (
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-primary" />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-80">
          <DropdownMenuLabel>Notifications</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {notifications.map((notification) => (
            <DropdownMenuItem
              key={notification.id}
              className={cn(
                "flex items-start gap-3 p-3",
                !notification.read && "bg-muted/50"
              )}
            >
              <div className="mt-1">
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
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* User Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="relative h-9 gap-2 pl-0"
          >
            <Avatar className="h-8 w-8">
              <AvatarImage src="/avatar.png" alt="User" />
              <AvatarFallback>FNG</AvatarFallback>
            </Avatar>
            <span className="hidden text-sm font-medium md:inline-block">
              Player123
            </span>
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-red-500">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}