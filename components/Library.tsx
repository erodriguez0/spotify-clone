"use client"

import { TbPlaylist } from "react-icons/tb"
import { AiOutlinePlus } from "react-icons/ai"

import useAuthModal from "@/hooks/useAuthModal"
import { useUser } from "@/hooks/useUser"
import useUploadModal from "@/hooks/useUploadModal"

const Library = () => {
  const authModal = useAuthModal()
  const uploadModal = useUploadModal()
  const { user } = useUser()

  const uploadSong = () => {
    if (!user) return authModal.onOpen()

    // TODO: Check for subscription

    return uploadModal.onOpen()
  }

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between p-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist
            size={26}
            className="text-neutral-400"
          />
          <p className="text-base font-medium text-neutral-400">Your Library</p>
        </div>
        <AiOutlinePlus
          onClick={uploadSong}
          size={20}
          className="cursor-pointer text-neutral-400 transition hover:text-white"
        />
      </div>
      <div className="flex flex-col gap-y-2 overflow-x-hidden truncate px-4">
        <div className="flex flex-col overflow-x-hidden">
          <p className="text-neutral-200">
            List of songs fsaiof sahoif asoif so fasiof saioa soif o
          </p>
          <p className="text-xs text-neutral-400">
            ifsajoifasjf oisa sfoas hfo iosa foisaf o fsapf jspa fapf spa fs
          </p>
        </div>
        <div className="flex flex-col overflow-x-hidden">
          <p className="text-neutral-200">
            List of songs fsaiof sahoif asoif so fasiof saioa soif o
          </p>
          <p className="text-xs text-neutral-400">
            ifsajoifasjf oisa sfoas hfo iosa foisaf o fsapf jspa fapf spa fs
          </p>
        </div>
      </div>
    </div>
  )
}

export default Library
