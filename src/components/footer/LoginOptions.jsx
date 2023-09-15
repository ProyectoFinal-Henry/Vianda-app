"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const LoginOptions = () => {
  const currentPath = usePathname()
  return (
    <>
      {currentPath.includes("/catalog") && (
        <div className="grid grid-flow-col  gap-2">
          <Link
            href={"/catalog/login"}
            className="link link-hover"
          >
            Iniciar sesión
          </Link>
          <Link
            href={"/catalog/registro"}
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
