"use client"

import Image from "next/image"
import Link from "next/link"

const NotFound = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center min-h-screen min-w-screen text-4xl">
        ¡Ups!
        <Image
          src="https://res.cloudinary.com/deezwetqk/image/upload/v1695174257/notFound_t5weml.png"
          className="mt-12 mb-12"
          alt="notFound"
          width={500}
          height={500}
        ></Image>
        Parece que la página a la cual intentas ingresar no existe.
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

export default NotFound
