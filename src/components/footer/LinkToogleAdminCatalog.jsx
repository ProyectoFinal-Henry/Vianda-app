"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
const LinkToogleAdminCatalog = () => {
  // Obtén la ruta actual
  const currentPath = usePathname()

  // Verifica si la ruta contiene "/admin" o "/catalog"

  return (
    <>
         <Link
          href={"/catalog/team"}
          className="link link-hover"
        >
          Team
        </Link>
      {currentPath.includes("/admin") ? (
        <Link
          href={"/catalog"}
          className="link link-hover"
        >
          App de clientes
        </Link>
      ) : (
        currentPath.includes("/catalog") && (
          <Link
            href={"/admin/viandas"}
            className="link link-hover"
          >
            Soy Admin
          </Link>
        )
      )}
    </>
  )
}

export default LinkToogleAdminCatalog
