import Link from "next/link"
import Search from "./Search"

export default function Navbar() {
  return (
    <nav className="bg-slate-600 p-4 flex justify-between flex-col md:flex-row sticky top-0 drop-shadow-xl">
      <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
        {/* <Link href="/">WikiRocket!</Link> */}
        <h1 className="text-3xl font-bold mb-0">
          <Link href="/" className="text-white/90 no-underline hover:text-white">Next Todos</Link>
        </h1>

        <Link href="/add" className="text-2xl text-white/90 no-underline hover:text-white">Add</Link>

      </h1>
      <Search />
    </nav>
  )
}