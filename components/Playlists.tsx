"use client"

import { TbPlaylist } from "react-icons/tb"
import { AiOutlinePlus } from "react-icons/ai"

const Playlists = () => {
  const createPlaylist = () => {}

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between p-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist
            size={26}
            className="text-neutral-400"
          />
          <p className="text-base font-medium text-neutral-400">
            Your Playlists
          </p>
        </div>
        <AiOutlinePlus
          onClick={createPlaylist}
          size={20}
          className="cursor-pointer text-neutral-400 transition hover:text-white"
        />
      </div>
      <div className="flex flex-col gap-y-2 overflow-x-hidden truncate px-4"></div>
    </div>
  )
}

export default Playlists
