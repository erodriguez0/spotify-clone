"use client"

import { usePathname } from "next/navigation"
import { useMemo } from "react"
import { HiHome } from "react-icons/hi"
import { BiSearch } from "react-icons/bi"

import Box from "./Box"
import SidebarItem from "./SidebarItem"
import Library from "./Library"

interface SidebarProps {
  children: React.ReactNode
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const pathname = usePathname()

  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: "Home",
        href: "/",
        active: pathname === "/",
      },
      {
        icon: BiSearch,
        label: "Search",
        href: "/search",
        active: pathname === "/search",
      },
    ],
    [pathname]
  )

  return (
    <div className="flex h-full gap-x-2">
      <div className="hidden h-full w-[300px] flex-col gap-y-2 bg-black md:flex">
        <Box className="flex flex-col gap-y-4 p-4">
          {routes.map(route => (
            <SidebarItem
              key={route.label}
              {...route}
            />
          ))}
        </Box>

        <Box className="h-full overflow-y-auto">
          <Library />
        </Box>

        <Box className="h-full overflow-y-auto">Playlists</Box>
      </div>
      <main className="h-full w-full overflow-y-auto">{children}</main>
    </div>
  )
}

export default Sidebar
