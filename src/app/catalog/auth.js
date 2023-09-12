import Link from "next/link"

const auth = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center text-4xl min-h-screen">
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

export default auth