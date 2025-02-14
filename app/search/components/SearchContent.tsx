"use client"

import LikeButton from "@/components/LikeButton"
import MediaItem from "@/components/MediaItem"
import useOnPlay from "@/hooks/useOnPlay"
import { Song } from "@/types"

interface SearchContentProps {
  songs: Song[]
}

const SearchContent: React.FC<SearchContentProps> = ({ songs }) => {
  const onPlay = useOnPlay(songs)

  if (songs.length === 0)
    return (
      <div className="flex w-full flex-col gap-y-2 px-4 text-neutral-400">
        No songs found.
      </div>
    )
  return (
    <div className="flex w-full flex-col gap-y-2 px-4">
      {songs.map(song => (
        <div
          key={song.id}
          className="flex w-full items-center gap-x-4"
        >
          <div className="flex-1">
            <MediaItem
              onClick={(id: string) => onPlay(id)}
              data={song}
            />
          </div>
          <LikeButton songId={song.id} />
        </div>
      ))}
    </div>
  )
}

export default SearchContent
