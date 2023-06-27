import "./globals.css"
import { Figtree } from "next/font/google"

import Sidebar from "@/components/Sidebar"

const figtree = Figtree({ subsets: ["latin"] })

export const metadata = {
  title: "Spotify Clone",
  description: "Listen to your favorite music!",
}

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={figtree.className}>
        <Sidebar>{children}</Sidebar>
      </body>
    </html>
  )
}

export default RootLayout
