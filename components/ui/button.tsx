import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-40",
  {
    variants: {
      variant: {
        default: "bg-primary/90 text-primary-foreground hover:bg-primary/80 shadow-sm",
        destructive:
          "bg-destructive/90 text-destructive-foreground hover:bg-destructive/80 shadow-sm",
        outline:
          "border border-input/60 bg-background hover:bg-accent/30 hover:text-accent-foreground hover:border-input/80",
        secondary:
          "bg-secondary/80 text-secondary-foreground hover:bg-secondary/70 shadow-sm",
        ghost: "hover:bg-accent/20 hover:text-accent-foreground",
        link: "text-primary/90 underline-offset-4 hover:text-primary hover:underline",
        premium: "bg-gradient-to-r from-primary/80 to-secondary/80 text-primary-foreground hover:from-primary/70 hover:to-secondary/70 shadow-sm backdrop-blur-sm",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
        xs: "h-8 rounded-md px-2.5 text-xs",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
