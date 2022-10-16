import { Slot } from "@radix-ui/react-slot"
import { clsx } from "clsx"
import { InputHTMLAttributes, ReactNode } from "react"

export interface TextInputRootProps {
  children: ReactNode
  className?: string
}

function TextInputRoot({ children, className }: TextInputRootProps) {
  return (
    <div
      className={clsx(
        "flex items-center gap-3 h-12 py-4 px-4 w-full rounded bg-zinc-800  focus-within:ring-2 ring-purple-300",
        className
      )}
    >
      {children}
    </div>
  )
}

export interface TextInputIconProps {
  children: ReactNode
}

function TextInputIcon({ children }: TextInputIconProps) {
  return <Slot className="w-6 h-6 text-gray-400">{children}</Slot>
}

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      {...props}
      className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none"
    />
  )
}

TextInputRoot.displayName = "TextInput.Root"
TextInputInput.displayName = "TextInput.Input"
TextInputIcon.displayName = "TextInput.Icon"

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
}
