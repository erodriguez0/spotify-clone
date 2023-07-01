import Header from "@/components/Header"
import AccountContent from "./components/AccountContent"

const Account = () => {
  return (
    <div className="h-full w-full overflow-hidden overflow-y-auto rounded-md bg-neutral-900">
      <Header>
        <div className="mb-2 flex flex-col gap-y-4">
          <h1 className="text-3xl font-semibold text-white">
            Account Settings
          </h1>
        </div>
      </Header>
      <AccountContent />
    </div>
  )
}

export default Account
