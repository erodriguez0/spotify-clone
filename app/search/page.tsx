import getSongsByTitle from "@/actions/getSongsByTitle"
import Header from "@/components/Header"
import SearchInput from "@/components/SearchInput"
import SearchContent from "./components/SearchContent"

interface SearchProps {
  searchParams: {
    title: string
  }
}

export const revalidate = 0

const Search = async ({ searchParams }: SearchProps) => {
  const songs = await getSongsByTitle(searchParams.title)

  return (
    <div className="h-full w-full overflow-hidden overflow-y-auto rounded-md bg-neutral-900">
      <Header>
        <div className="mb-2 flex flex-col gap-y-4">
          <h1 className="text-3xl font-semibold text-white">Search</h1>
        </div>
        <SearchInput />
      </Header>
      <SearchContent songs={songs} />
    </div>
  )
}

export default Search
