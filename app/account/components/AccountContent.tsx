"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

import useSubscribeModal from "@/hooks/useSubscribeModal"
import { useUser } from "@/hooks/useUser"
import { postData } from "@/libs/helpers"
import { toast } from "react-hot-toast"
import Button from "@/components/Button"

const AccountContent = () => {
  const router = useRouter()
  const subscribeModal = useSubscribeModal()
  const { user, isLoading, subscription } = useUser()

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!isLoading && !user) router.replace("/")
  }, [isLoading, user, router])

  const redirectToCustomerPortal = async () => {
    try {
      const { url, error } = await postData({
        url: "/api/create-portal-link",
      })
      window.location.assign(url)
    } catch (error: any) {
      if (error) toast.error((error as Error).message)
    }

    setLoading(false)
  }

  return (
    <div className="mb-7 px-4">
      {!subscription && (
        <div className="flex flex-col gap-y-4">
          <p>No active plan</p>
          <Button
            onClick={subscribeModal.onOpen}
            className="w-[300px]"
          >
            Subscribe
          </Button>
        </div>
      )}

      {subscription && (
        <div className="flex flex-col gap-y-4">
          <p>
            You are currently on the{" "}
            <b>{subscription?.prices?.products?.name} plan</b>
          </p>
          <Button
            onClick={redirectToCustomerPortal}
            disabled={loading || isLoading}
            className="w-[300px]"
          >
            Open customer portal
          </Button>
        </div>
      )}
    </div>
  )
}

export default AccountContent
