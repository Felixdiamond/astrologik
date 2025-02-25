"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Home,
  Trophy,
  Newspaper,
  MessageSquare,
  PlayCircle,
  Users,
  Settings,
  LogOut,
  Plus,
  Medal,
} from "lucide-react"
import { cn } from "@/lib/utils"

const navigationItems = [
  { name: "Home", href: "/home", icon: Home },
  { name: "Competitions", href: "/competitions", icon: Trophy },
  { name: "Leaderboard", href: "/leaderboard", icon: Medal },
  { name: "Blog", href: "/blog", icon: Newspaper },
  { name: "Forum", href: "/forum", icon: MessageSquare },
  { name: "Streams", href: "/streams", icon: PlayCircle },
  { name: "About", href: "/about", icon: Users },
]

const bottomItems = [
  { name: "Settings", href: "/settings", icon: Settings },
  { name: "Logout", href: "/logout", icon: LogOut },
]

interface SidebarItemProps {
  href: string
  icon: any
  name: string
  isActive?: boolean
}

const SidebarItem = ({ href, icon: Icon, name, isActive }: SidebarItemProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "group relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-500",
        isActive
          ? "text-primary"
          : "text-muted-foreground hover:text-foreground"
      )}
      title={name}
    >
      {/* Hover/Active background effect */}
      <div
        className={cn(
          "absolute inset-0 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 transition-opacity duration-500",
          isActive ? "opacity-100" : "group-hover:opacity-100"
        )}
      />

      {/* Active indicator */}
      <div className="absolute -left-3 top-1/2 h-12 w-1.5 -translate-y-1/2 rounded-r-full">
        <div className={cn(
          "h-full w-full rounded-r-full bg-gradient-to-b from-primary via-secondary to-primary bg-[length:100%_200%] transition-all duration-500",
          isActive 
            ? "opacity-100 animate-gradient-y" 
            : "opacity-0 group-hover:opacity-50"
        )} />
      </div>

      {/* Icon with glow effect */}
      <div className="relative">
        <div className={cn(
          "absolute -inset-1 rounded-lg bg-gradient-to-r from-primary/40 to-secondary/40 opacity-0 blur transition-opacity duration-500",
          isActive ? "opacity-100" : "group-hover:opacity-100"
        )} />
        <Icon className={cn(
          "relative h-5 w-5 transition-all duration-500",
          isActive 
            ? "text-primary drop-shadow-[0_0_8px_rgba(var(--primary),0.5)]" 
            : "text-muted-foreground group-hover:text-foreground group-hover:drop-shadow-[0_0_6px_rgba(var(--primary),0.3)]"
        )} />
      </div>

      {/* Text with slide effect */}
      <span className="relative">
        <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">
          {name}
        </span>
      </span>
    </Link>
  )
}

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-full flex-col px-6 py-8">
      {/* Logo */}
      <div className="mb-8">
        <Link href="/home" className="group relative inline-block">
          {/* Logo glow effect */}
          <div className="absolute -inset-2 rounded-lg bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 opacity-0 blur transition-opacity duration-500 group-hover:opacity-100" />
          <span 
            className="relative font-bicyclette-bold text-2xl text-gradient animate-gradient glow-text glitch animate-pulse-glow"
            data-text="Not the FNGs"
          >
            Not the FNGs
          </span>
        </Link>
      </div>

      {/* New Post Button */}
      <Link
        href="/create-post"
        className="group relative mb-8 flex items-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] px-4 py-2.5 text-sm font-medium text-primary-foreground transition-all duration-500 hover:bg-[center_right_8rem] hover:shadow-[0_0_2rem_rgba(var(--primary),0.3)]"
      >
        {/* Shine effect */}
        <div className="absolute inset-0 flex translate-x-[-10rem] items-center justify-center overflow-hidden transition-transform duration-[1500ms] group-hover:translate-x-[10rem]">
          <div className="h-[100%] w-[10rem] rotate-[-30deg] bg-white/20" />
        </div>
        
        <Plus className="relative h-5 w-5 transition-all duration-500 group-hover:rotate-90 group-hover:scale-110" />
        <span className="relative transition-transform duration-500 group-hover:translate-x-1">
          New Post
        </span>
      </Link>

      {/* Navigation */}
      <nav className="space-y-1.5">
        {navigationItems.map((item) => (
          <SidebarItem
            key={item.href}
            href={item.href}
            icon={item.icon}
            name={item.name}
            isActive={pathname === item.href}
          />
        ))}
      </nav>

      {/* Bottom Items */}
      <div className="mt-auto space-y-1.5">
        {/* Separator with gradient */}
        <div className="relative mb-6 h-px w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-border/0 via-border/50 to-border/0" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 animate-shine" />
        </div>

        {bottomItems.map((item) => (
          <SidebarItem
            key={item.href}
            href={item.href}
            icon={item.icon}
            name={item.name}
            isActive={pathname === item.href}
          />
        ))}
      </div>
    </div>
  )
}