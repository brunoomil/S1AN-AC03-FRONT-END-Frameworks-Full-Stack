import { clsx } from "clsx"
import { Slot } from "@radix-ui/react-slot"
import { ReactNode } from "react"

export interface HeadingProps {
  size?: "sm" | "md" | "lg"
  asChild?: boolean
  children: ReactNode
  className?: string
}

export function Heading({
  size = "md",
  asChild = false,
  children,
  className,
}: HeadingProps) {
  const Component = asChild ? Slot : "h2"

  return (
    <Slot>
      <Component
        className={clsx(
          "text-gray-100 font-bold font-sans",
          {
            "text-lg": size === "sm",
            "text-xl": size === "md",
            "text-2xl": size === "lg",
          },
          className
        )}
      >
        {children}
      </Component>
    </Slot>
  )
}
