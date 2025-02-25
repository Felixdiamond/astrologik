import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Create Post | Not the FNGs",
  description: "Share your thoughts with the community",
}

export default function CreatePostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 