"use client"
import { BsFillShieldLockFill } from "react-icons/bs"
import Link from "next/link"
import { useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"
import { UserAuth } from "@/context/AuthContext"
import { usePathname } from "next/navigation"
import { useSearchParams } from "next/navigation"

const RoleRedirectPage = () => {
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)
  const logOutQuery = params.get("logout")
  const from = params.get("from")
  const to = params.get("to")

  const { user, googleLogout } = UserAuth()
  const router = useRouter()
  const pathname = usePathname()

  const [isLoading, setIsLoading] = useState(true)

  const logout = async () => {
    try {
      const response = await axios.post("/api/auth/logout")
      if (response.status === 200) await googleLogout()
      router.push(`/catalog/login?rol=${to}`)
      router.refresh()
    } catch (error) {
      router.push(`/catalog/login?rol=${to}`)
      router.refresh()
    }
  }
  logOutQuery && logout()
  return (
    <>
      <div className="flex flex-col  items-center justify-center  text-2xl  top-0 left-0  fixed min-h-screen min-w-full ">
        <div className="text-center md:text-left px-4  ">
          <BsFillShieldLockFill className="text-warning text-8xl mx-auto mb-12" />
          <span className="font-bold capitalize">{from} </span>
          No es un rol adecuado, <br /> para ingresar como <span className="font-bold capitalize">{to} </span>
          <br />
          puedes:
        </div>
        <div className="flex flex-col md:flex-row gap-10 mt-12">
          <Link
            href="/catalog"
            className=" bg-accent text-white px-6 py-3 rounded-3xl text-[14px] transition-transform hover:scale-110 text-lg font-semibold text-center "
          >
            Volver al Home
          </Link>
          <Link
            href={`/role-redirect?from=${from}&to=${to}&logout=true`}
            className=" bg-accent text-white px-6 py-3 rounded-3xl text-[14px] transition-transform hover:scale-110 text-lg font-semibold "
          >
            Ingresar como {to}
          </Link>
        </div>
      </div>
    </>
  )
}

export default RoleRedirectPage
