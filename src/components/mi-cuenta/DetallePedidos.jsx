"use client"
import { useSearchParams } from "next/navigation"
import { CgCloseO } from "react-icons/cg"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import LoadingComponentApp from "@/app/loading"

const DetallePedido = ({ data }) => {
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
  } = data.find((item) => item.id === Number(modal))
  const handleClickInsideModal = (e) => {
    // Evita que el clic dentro del modal se propague al contenedor principal
    e.stopPropagation()
  }

  return (
    <>
      {nombre ? (
        <div
          id="modal producto"
          className={` fixed top-0 left-0 min-h-screen min-w-full  bg-slate-900/50  flex flex-col justify-center items-center z-30
           `}
          onClick={() => router.push("/catalog/mi-cuenta/pedidos", { scroll: false })}
        >
          <div
            id="contenedorPrincipal"
            className=" max-w-[380px] min-w-[380px] max-h-screen flex flex-col items-center justify-center 
        md:max-w-[420px] md:min-w-[420px]
             bg-base-100  px-2 pb-6 pt-3 md:p-6 rounded-3xl "
            onClick={handleClickInsideModal}
          >
            <div className="flex  flex-row items-center justify-between gap-x-2 min-w-full pl-2">
              <h1 className="text-left text-xl md:text-xl font-semibold tracking-wider text-black    px-8  rounded-lg">{nombre}</h1>{" "}
              <Link
                href="/catalog/mi-cuenta/pedidos"
                className=" "
                scroll={false}
              >
                <CgCloseO className=" btn btn-accent rounded-full p-1 text-base-100 hover:text-warning  text-5xl " />
              </Link>
            </div>

            <div className="avatar relative  min-w-full mt-2 rounded-xl ">
              <Image
                width={400}
                height={400}
                alt="imagen de la vianda"
                src={imagen}
                className="object-cover rounded-xl max-h-64 w-auto h-auto"
              />
              <p className="bg-accent py-1 px-3 rounded-md absolute right-4 bottom-4 text-3xl capitalize text-white">{tipo}</p>

              {(lunes || martes || miercoles || jueves || viernes || sabado || domingo) && (
                <Image
                  alt="available this week"
                  width={150}
                  height={150}
                  className=" absolute top-0 left-0
                  max-w-[180px] max-h-[180px]"
                  src="https://res.cloudinary.com/deezwetqk/image/upload/v1695174355/availableLabel_ekvsh4.png"
                />
              )}
            </div>

            <div
              id="contenedorTexto"
              className=" flex flex-col items-start justify-center gap-2 tracking-wide pt-2  min-w-full px-4  text-neutral-800 font-normal "
            >
              <div className="flex flex-row gap-2">
                {/* <p className="font-semibold  ">Descripcion:</p> */}
                <p className=" px-2  rounded font-semibold "> {descripcion}</p>
              </div>
              <div className="flex flex-row gap-2">
                {/* <p className="font-semibold  ">Ingredientes:</p> */}
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

              <div className="flex flex-row gap-x-4">
                <div className="flex flex-row gap-2">
                  <p className="font-semibold  ">Precio:</p>
                  <p className="bg-accent/30 w-30 px-2  rounded font-medium"> {precio}</p>
                </div>
                <div className="flex flex-row gap-2">
                  <p className="font-semibold  ">Stock:</p>
                  <p className="bg-accent/30 w-30 px-2  rounded ">{stock}</p>
                </div>
              </div>

              <Link
                href={"/catalog/checkout"}
                className="btn btn-primary btn-block text-gray-700 font-bolder text-xl"
              >
                {lunes || martes || miercoles || jueves || viernes || sabado || domingo ? "Arma tu menu semanal" : "Arma tu menu ahora"}
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <LoadingComponentApp />
      )}
    </>
  )
}

export default DetallePedido