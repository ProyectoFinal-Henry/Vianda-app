"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
const LinkToogleAdminCatalog = () => {
  // Obtén la ruta actual
  const currentPath = usePathname()
  console.log("file: LinkToogleAdminCatalog.jsx:8  currentPath:", currentPath)

  // Verifica si la ruta contiene "/admin" o "/catalog"

  return <>
  
  {
currentPath.includes("/admin") ?
    <Link
      href={"/catalog"}
      className="link link-hover"
    >
      App de clientes
    </Link>

  : currentPath.includes("/catalog") &&
    <Link
      href={"/admin"}
      className="link link-hover"
    >
      Soy Admin
    </Link>

  }
  
  </>
}

export default LinkToogleAdminCatalog
