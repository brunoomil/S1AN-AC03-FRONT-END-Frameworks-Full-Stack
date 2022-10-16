import { clsx } from "clsx"
import { Slot } from "@radix-ui/react-slot"
import { ButtonHTMLAttributes, ReactNode } from "react"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  children: ReactNode
}

export function Button({
  asChild = false,
  children,
  className,
  ...props
}: ButtonProps) {
  const Component = asChild ? Slot : "button"

  return (
    <Slot>
      <Component
        className={clsx(
          "py-3 px-4 bg-purple-500 rounded font-semibold text-white text-sm w-full transition-colors hover:bg-purple-400 focus:ring-2 ring-white",
          className
        )}
        {...props}
      >
        {children}
      </Component>
    </Slot>
  )
}
