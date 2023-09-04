"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { FaSearch } from "react-icons/fa"
export const dynamic = "force-dynamic"
const SearchBarViandas = () => {
  const [searchValue, setSearchValue] = useState("")

  const pathName = usePathname()

  const urltogo = `${pathName}?search=${searchValue}`
  return (
    <>
      <div className="flex items-center gap-x-0 min-w-[40%] md:min-w-[35%] ">
        <input
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
          placeholder="Haburguesa, Pasta etc.."
          className="input input-bordered input-md w-full max-w-xl"
        />
        <Link
          href={urltogo}
          className="-ml-10"
        >
          <button className=" btn btn-warning text-white ">
            <FaSearch />
          </button>
        </Link>
      </div>
    </>
  )
}

export default SearchBarViandas
