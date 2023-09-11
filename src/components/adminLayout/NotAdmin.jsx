"use client"

import Link from "next/link"

const NotAdmin = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center min-w-screen text-4xl my-32">
        No tienes los permisos para ingresar a esta sección.
        <Link href="/catalog">
          <div className="mt-8">
            <button className="mt-5 bg-accent text-white px-6 py-3 rounded-3xl text-[14px] transition-transform hover:scale-110 text-lg font-semibold ">
              Volver al Home
            </button>
          </div>
        </Link>
      </div>
    </>
  )
}

export default NotAdmin
