import { forwardRef } from "react"
import { twMerge } from "tailwind-merge"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, disabled, ...props }, ref) => {
    return (
      <input
        type={type}
        className={twMerge(
          "flex w-full rounded-md border border-transparent bg-neutral-700 p-2.5 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      />
    )
  }
)

Input.displayName = "Input"

export default Input
