"use client"

import { useRouter } from "next/navigation"
import { twMerge } from "tailwind-merge"
import { RxCaretLeft, RxCaretRight } from "react-icons/rx"
import { HiHome } from "react-icons/hi"
import { BiSearch } from "react-icons/bi"
import { useSupabaseClient } from "@supabase/auth-helpers-react"
import { FaUserAlt } from "react-icons/fa"
import { toast } from "react-hot-toast"

import Button from "./Button"
import useAuthModal from "@/hooks/useAuthModal"
import { useUser } from "@/hooks/useUser"

interface HeaderProps {
  children: React.ReactNode
  className?: string
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter()
  const authModal = useAuthModal()

  const supabaseClient = useSupabaseClient()
  const { user } = useUser()

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut()

    // TODO: Reset any playing songs

    router.refresh()

    if (error) toast.error(error.message)
    else toast.success("Logged out")
  }

  return (
    <>
      <div className={twMerge("h-fit bg-neutral-950 p-4", className)}>
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

          {/* MOBILE */}
          <div className="flex items-center gap-x-2 md:hidden">
            <button className="flex items-center justify-center p-2 transition hover:opacity-75">
              <HiHome size={20} />
            </button>
            <button className="flex items-center justify-center p-2 transition hover:opacity-75">
              <BiSearch size={20} />
            </button>
          </div>

          <div className="flex items-center justify-between gap-x-4">
            {user ? (
              <div className="flex items-center gap-x-4">
                <Button
                  onClick={() => router.push("/account")}
                  className="bg-transparent text-white"
                >
                  <FaUserAlt />
                </Button>
                <Button
                  onClick={handleLogout}
                  className="bg-white py-0.5 text-sm md:text-base"
                >
                  Logout
                </Button>
              </div>
            ) : (
              <>
                <div>
                  <Button
                    onClick={authModal.onOpen}
                    className="bg-transparent py-0.5 text-sm font-medium text-neutral-300 md:text-base"
                  >
                    Sign Up
                  </Button>
                </div>
                <div>
                  <Button
                    onClick={authModal.onOpen}
                    className="bg-white py-0.5 text-sm font-medium md:text-base"
                  >
                    Login
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="h-fit p-4">{children}</div>
    </>
  )
}

export default Header
