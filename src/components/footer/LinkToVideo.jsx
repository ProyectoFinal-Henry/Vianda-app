"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"

const LinkToVideo = () => {
  const currentPath = usePathname()
  return (
    <>
      {!currentPath.includes("/catalog/about") && (
        <Link
          className="text-xl font-green-800 font-semibold  "
          href={"/catalog/about"}
        >
          VIDEO Y TECNOLOGIAS DEL PROYECTO
        </Link>
      )}
    </>
  )
}

export default LinkToVideo
