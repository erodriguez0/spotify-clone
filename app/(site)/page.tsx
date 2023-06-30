import Header from "@/components/Header"
import ListItem from "@/components/ListItem"

const Home = () => {
  return (
    <div className="h-full w-full overflow-hidden overflow-y-auto rounded-md bg-neutral-900">
      <Header>
        <div>
          <h1 className="text-3xl font-semibold text-white">Welcome Back</h1>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            <ListItem
              image="/images/liked.png"
              name="Liked Songs"
              href="liked"
            />
          </div>
        </div>
      </Header>

      <div className="mb-7 mt-2 px-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-white">Newest Songs</h1>
        </div>
        <div>List of songs</div>
      </div>
    </div>
  )
}

export default Home
