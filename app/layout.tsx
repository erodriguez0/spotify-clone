import "./globals.css"
import { Figtree } from "next/font/google"

import Sidebar from "@/components/Sidebar"
import SupabaseProvider from "@/providers/SupabaseProvider"
import UserProvider from "@/providers/UserProvider"
import ModalProvider from "@/providers/ModalProvider"
import ToasterProvider from "@/providers/ToaterProvider"
import getSongsByUsedId from "@/actions/getSongsByUserId"

const figtree = Figtree({ subsets: ["latin"] })

export const metadata = {
  title: "Spotify Clone",
  description: "Listen to your favorite music!",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export const revalidate = 0

const RootLayout: React.FC<RootLayoutProps> = async ({ children }) => {
  const userSongs = await getSongsByUsedId()

  return (
    <html lang="en">
      <body className={figtree.className}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
            <Sidebar songs={userSongs}>{children}</Sidebar>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
}

export default RootLayout
