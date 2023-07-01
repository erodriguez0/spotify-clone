"use client"

import Box from "@/components/Box"
import { BarLoader } from "react-spinners"

const Loading = () => {
  return (
    <Box className="flex h-full items-center justify-center">
      <BarLoader color="#22c55e" />
    </Box>
  )
}

export default Loading
