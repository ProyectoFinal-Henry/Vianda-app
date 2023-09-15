"use client"
import { useSearchParams } from "next/navigation"
import { CgCloseO } from "react-icons/cg"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

const Detalle = ({ data }) => {
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)
  const modal = params.get("modal")
  const router = useRouter()
  if (!modal) return null

  const {
    id,
    imagen,
    nombre,
    tipo,
    descripcion,
    ingredientes,
    stock,
    precio,
    estado,
    lunes,
    martes,
    miercoles,
    jueves,
    viernes,
    sabado,
    domingo,
  } = data[modal - 1]
  const handleClickInsideModal = (e) => {
    // Evita que el clic dentro del modal se propague al contenedor principal
    e.stopPropagation()
  }

  return (
    <>
      <div
        id="modal producto"
        className={` fixed top-0 left-0 min-h-screen min-w-full  bg-slate-900/50  flex flex-col justify-center items-center z-30
           `}
        onClick={() => router.push("/catalog", { scroll: false })}
      >
        <div
          id="contenedorPrincipal"
          className=" max-w-[380px] min-w-[380px] flex flex-col items-center justify-center  md:max-w-[35%] md:min-w-[35%] 
             bg-base-100  px-2 pb-6 pt-3  rounded-3xl "
          onClick={handleClickInsideModal}
        >
          <div className="flex  flex-row items-start justify-between gap-x-2 min-w-full pl-2">
            <h1 className="text-center text-2xl font-semibold tracking-wider text-base-100   bg-accent px-8  rounded-lg">{nombre}</h1>{" "}
            <Link
              href="/catalog"
              className=" "
              scroll={false}
            >
              <CgCloseO className=" btn btn-accent rounded-full p-1 text-base-100 hover:text-warning  text-5xl " />
            </Link>
          </div>

          <div className="avatar relative  min-w-full pt-4 rounded-xl ">
            <img
              src={imagen}
              className="object-cover rounded-xl max-h-64"
            />
            <p className="bg-accent py-1 px-3 rounded-md absolute right-4 bottom-4 text-3xl capitalize text-white">{tipo}</p>
          </div>

          <div
            id="contenedorTexto"
            className=" flex flex-col items-start justify-center gap-2 tracking-wide pt-5  min-w-full px-4  text-neutral-800 font-normal mt-6"
          >
            <div className="flex flex-row gap-2">
              <p className="font-semibold  ">Descripcion:</p>
              <p className="bg-accent/30 w-30 px-2  rounded "> {descripcion}</p>
            </div>
            <div className="flex flex-row gap-2">
              <p className="font-semibold  ">Ingredientes:</p>
              <p className="bg-accent/30 w-30 px-2  rounded ">{ingredientes}</p>
            </div>

            {(lunes || martes || miercoles || jueves || viernes || sabado || domingo) && (
              <div className="flex flex-row gap-2">
                <p className="font-semibold  ">Esta semana el:</p>
                <div className=" flex flex-row flex-wrap gap-x-2">
                  {lunes && <span className="bg-accent/30  px-2  rounded font-medium">Lunes</span>}
                  {martes && <span className="bg-accent/30  px-2  rounded font-medium">Martes</span>}
                  {miercoles && <span className="bg-accent/30  px-2  rounded font-medium">Miercoles</span>}
                  {jueves && <span className="bg-accent/30  px-2  rounded font-medium">Jueves</span>}
                  {viernes && <span className="bg-accent/30  px-2  rounded font-medium">Viernes</span>}
                  {sabado && <span className="bg-accent/30  px-2  rounded font-medium">Sabado</span>}
                  {domingo && <span className="bg-accent/30  px-2  rounded font-medium">Domingo</span>}
                </div>
              </div>
            )}

            <div className="flex flex-row gap-2">
              <p className="font-semibold  ">Precio:</p>
              <p className="bg-accent/30 w-30 px-2  rounded font-medium"> {precio}</p>
            </div>
            <div className="flex flex-row gap-2">
              <p className="font-semibold  ">Stock:</p>
              <p className="bg-accent/30 w-30 px-2  rounded ">{stock}</p>
            </div>
            {(lunes || martes || miercoles || jueves || viernes || sabado || domingo) && (
              <div className="avatar  max-h-35 mb-6 mx-auto">
                <Image
                  alt="asi funciona la app imagen"
                  width={347}
                  height={150}
                  className="object-cover"
                  src="/disponible.png"
                />
              </div>
            )}
            <Link
              href={"/catalog/checkout"}
              className="btn btn-primary btn-block"
            >
              {" "}
              Pidelo en tu menu semanal
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Detalle
