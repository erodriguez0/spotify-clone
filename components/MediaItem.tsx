"use client"

import Image from "next/image"

import useLoadImage from "@/hooks/useLoadImage"
import { Song } from "@/types"
import usePlayer from "@/hooks/usePlayer"

interface MediaItemProps {
  data: Song
  onClick?: (id: string) => void
}

const MediaItem: React.FC<MediaItemProps> = ({ data, onClick }) => {
  const player = usePlayer()
  const imageUrl = useLoadImage(data)

  const handleClick = () => {
    if (onClick) return onClick(data.id)

    return player.setId(data.id)
  }
  return (
    <div
      onClick={handleClick}
      className="flex w-full cursor-pointer items-center gap-x-2.5 rounded-md p-2 hover:bg-neutral-800/50"
    >
      <div className="relative min-h-[48px] min-w-[48px] overflow-hidden rounded-md">
        <Image
          src={imageUrl || "/images/liked.png"}
          fill
          alt="Media Item"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-y-1 overflow-hidden">
        <p className="truncate text-white">{data.title}</p>
        <p className="truncate text-sm text-neutral-400">{data.artist}</p>
      </div>
    </div>
  )
}

export default MediaItem
