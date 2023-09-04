"use client"
// import { useRouter, usePathname } from "next/navigation"
import { useRouter } from "next/navigation"
import { useState, useTransition } from "react"
const SearchBarViandas = () => {
  //   const { replace } = useRouter()
  const router = useRouter()
  //   const pathName = usePathname()
  const [searchValue, setSearchValue] = useState("")
  //   const [isPending, starTransition] = useTransition()

  const goto = () => {
    // let params = new URLSearchParams(window.location.search)
    // searchValue ? params.set("search", searchValue) : params.delete("search")
    // params.delete("page")
    // const urltogo = `${pathName}?${params.toString()}`

    // console.log("file: SearchBarViandas.jsx:14  urltogo:", urltogo)

    // starTransition(() => {
    //   replace(urltogo)
    // })
    const urltogo = `?search=${searchValue}`
    router.push(`${urltogo}`)
    // console.log("file: SearchBarViandas.jsx:12  searchValue:", searchValue)
    console.log("file: SearchBarViandas.jsx:11  urltogo:", urltogo)
  }

  return (
    <>
      <form onSubmit={goto}>
        <input
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
          placeholder="Haburguesa, Pasta etc.."
          className="input input-bordered input-md w-full max-w-xl"
        />
        <button type="submit"> buscar</button>
      </form>
    </>
  )
}

export default SearchBarViandas
