import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-soft hover:bg-primary/95 hover:shadow-medium hover:-translate-y-0.5 active:scale-[0.97] active:translate-y-0 active:shadow-soft",
        destructive:
          "bg-destructive text-white shadow-soft hover:bg-destructive/90 hover:shadow-medium hover:-translate-y-0.5 active:scale-[0.97] active:translate-y-0 active:shadow-soft",
        outline:
          "border border-input bg-background shadow-soft hover:bg-accent hover:text-accent-foreground hover:border-border hover:-translate-y-0.5 active:scale-[0.97] active:translate-y-0 active:shadow-soft",
        secondary:
          "bg-secondary text-secondary-foreground shadow-soft hover:bg-secondary/70 hover:shadow-medium hover:-translate-y-0.5 active:scale-[0.97] active:translate-y-0 active:shadow-soft",
        ghost:
          "hover:bg-accent hover:text-accent-foreground active:scale-[0.97]",
        link: "text-primary underline-offset-4 hover:underline",
        grey: "bg-muted text-foreground shadow-soft hover:bg-muted/80 hover:shadow-medium hover:-translate-y-0.5 active:scale-[0.97] active:translate-y-0 active:shadow-soft"
      },
      size: {
        default: "h-10 px-5 py-2.5 has-[>svg]:px-4",
        sm: "h-9 rounded-lg gap-1.5 px-3.5 has-[>svg]:px-3",
        lg: "h-11 rounded-lg px-7 has-[>svg]:px-5",
        icon: "size-10",
        "icon-sm": "size-9",
        "icon-lg": "size-11",
        xl: "h-16 rounded-xl px-6 text-base"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
