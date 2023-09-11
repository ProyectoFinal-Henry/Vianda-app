"use client"
import { useCallback, useState } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { FaSortDown, FaSortUp } from "react-icons/fa"
import { AiOutlineSearch } from "react-icons/ai"
import { useRouter } from "next/navigation"

const OrderByField = ({ field }) => {
  //filed es el campo que vamos a trabajar
  // !==============================================================

  const pathname = usePathname() //para armar la url del link
  const router = useRouter() //para hacer la redireccion
  const searchParams = useSearchParams()

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)
      params.set("campo", field)
      return params.toString()
    },
    [searchParams, field]
  )
  const searcherByField = () => {}

  return (
    <>
      <div className="flex flex-row items-center justify-center min-h-full gap-x-2 ">
        <span className="text-neutral"> {field.charAt(0).toUpperCase() + field.slice(1).toLowerCase()} </span>
        <div className="flex flex-col  items-center gap-0  rounded-sm text-white min-h-full">
          <FaSortUp
            onClick={() => {
              router.push(pathname + "?" + createQueryString("orden", "asc"))

              router.refresh()
            }}
            className="text-primary text-2xl -mb-2"
          />

          <FaSortDown
            onClick={() => {
              router.push(pathname + "?" + createQueryString("orden", "desc"))

              router.refresh()
            }}
            className="text-primary text-2xl -mt-2"
          />
        </div>
      </div>
    </>
  )
}

export default OrderByField
