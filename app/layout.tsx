import "./globals.css"
import { Figtree } from "next/font/google"

import Sidebar from "@/components/Sidebar"
import SupabaseProvider from "@/providers/SupabaseProvider"
import UserProvider from "@/providers/UserProvider"
import ModalProvider from "@/providers/ModalProvider"
import ToasterProvider from "@/providers/ToaterProvider"
import getSongsByUsedId from "@/actions/getSongsByUserId"
import Player from "@/components/Player"
import getActiveProductsWithPrices from "@/actions/getActiveProductsWithPrices"

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
  const products = await getActiveProductsWithPrices()

  return (
    <html lang="en">
      <body className={figtree.className}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider products={products} />
            <Sidebar songs={userSongs}>{children}</Sidebar>
            <Player />
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
}

export default RootLayout
