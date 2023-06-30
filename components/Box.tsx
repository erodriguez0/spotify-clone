import { twMerge } from "tailwind-merge"

interface BoxProps {
  children: React.ReactNode
  className?: string
}

const Box: React.FC<BoxProps> = ({ children, className }) => {
  return (
    <div
      className={twMerge("h-fit w-full rounded-md bg-neutral-900", className)}
    >
      {children}
    </div>
  )
}

export default Box
