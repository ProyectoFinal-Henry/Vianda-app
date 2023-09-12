"use client"

import Link from "next/link"

const NotAdmin = () => {
  return (
    <>
      <div className="flex flex-col bg-base-100 items-center justify-center text-center text-4xl z-50 top-0 left-0 right-0 bottom-0 fixed">
        No tienes los permisos para ingresar a esta sección.
        <Link href="/catalog">
          <div className="">
            <button className="mt-10 bg-accent text-white px-6 py-3 rounded-3xl text-[14px] transition-transform hover:scale-110 text-lg font-semibold ">
              Volver al Home
            </button>
          </div>
        </Link>
      </div>
    </>
  )
}

export default NotAdmin
