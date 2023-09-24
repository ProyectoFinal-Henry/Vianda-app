"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { UserAuth } from "@/context/AuthContext"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"

const LoginOptions = ({ tokenData }) => {
  const currentPath = usePathname()
  const { user, googleLogout } = UserAuth()
  const [logueado, setLogueado] = useState(false)
  const router = useRouter()

  const handleGoogleLogout = async () => {
    try {
      const response = await axios.post("/api/auth/logout")
      if (response.status === 200) await googleLogout()
      setLogueado(false)
      router.push("/catalog/login")
      router.refresh()
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (tokenData) {
      setLogueado(true)
    } else {
      setLogueado(false)
    }
  }),
    [handleGoogleLogout]

  return (
    <>
      {currentPath.includes("/catalog") && (
        <div className="grid grid-flow-col  gap-2">
          {user || logueado ? (
            <Link
              href=""
              className="link link-hover"
              onClick={handleGoogleLogout}
            >
              Cerrar Sesion
            </Link>
          ) : (
            <Link
              href={"/catalog/login"}
              className="link link-hover"
            >
              Iniciar Sesion
            </Link>
          )}

          <Link
            href={"/catalog/registro"}
            onClick={handleGoogleLogout}
            className="link link-hover"
          >
            Registrarse
          </Link>
        </div>
      )}
    </>
  )
}

export default LoginOptions
