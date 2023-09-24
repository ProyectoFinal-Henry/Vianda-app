"use client"
import { BsFillShieldLockFill } from "react-icons/bs"; 
import Link from "next/link"
import { useState, useEffect } from "react"
import LoadingComponentApp from "@/app/loading"
import axios from "axios"
import { redirect, useRouter } from "next/navigation"
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
      {/* { isLoading ? (
        <div className="fixed top-0 left-0 w-full min-h-full flex items-center justify-center bg-accent-500/40 z-50">
          <LoadingComponentApp />
        </div>
      ) : ( */}
      <div className="flex flex-col bg-base-100 items-center justify-center text-center text-2xl z-50 top-0 left-0 right-0 bottom-0 fixed">
        <div className="text-left">
        <BsFillShieldLockFill
        className="text-warning text-8xl mx-auto"
        />

          <span className="font-bold capitalize">{from} </span>
          No es un rol adecuado, <br /> para ingresar como <span className="font-bold capitalize">{to} </span>
          <br />
          puedes:
        </div>
        <div className="flex flex-row gap-10">
          <Link href="/catalog">
            <button className="mt-10 bg-accent text-white px-6 py-3 rounded-3xl text-[14px] transition-transform hover:scale-110 text-lg font-semibold ">
              Volver al Home
            </button>
          </Link>
          <Link href={`/catalog/role-redirect?from=${from}&to=${to}&logout=true`}>
            <button className="mt-10 bg-accent text-white px-6 py-3 rounded-3xl text-[14px] transition-transform hover:scale-110 text-lg font-semibold ">
              Ingresar como {to}
            </button>
          </Link>
        </div>
      </div>
       {/* )}  */}
    </>
  )
}

export default RoleRedirectPage
