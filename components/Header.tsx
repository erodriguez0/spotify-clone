"use client"

import { useRouter } from "next/navigation"
import { twMerge } from "tailwind-merge"
import { RxCaretLeft, RxCaretRight } from "react-icons/rx"

interface HeaderProps {
  children: React.ReactNode
  className?: string
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter()

  const logout = () => {}

  return (
    <div className={twMerge("h-fit p-4", className)}>
      <div className="flex w-full items-center justify-between">
        <div className="hidden items-center gap-x-2 md:flex">
          <button
            onClick={() => router.back()}
            className="flex items-center justify-center transition hover:opacity-75"
          >
            <RxCaretLeft
              size={35}
              className="text-white"
            />
          </button>
          <button
            onClick={() => router.forward()}
            className="flex items-center justify-center transition hover:opacity-75"
          >
            <RxCaretRight
              size={35}
              className="text-white"
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
