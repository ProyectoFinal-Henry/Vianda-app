"use client"

import { useSearchParams } from "next/navigation"

import { FaTimes } from "react-icons/fa"
import { FaCheck } from "react-icons/fa"
import LoadingComponentApp from "@/app/loading"
import Link from "next/link"
import axios from "axios"
import { useRouter } from "next/navigation"
const Modallisto = ({ pendientes }) => {
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)
  const modalentrega = params.get("modalentrega")
  const router = useRouter()
  if (!modalentrega) return null

  //-----
  const pendiente = pendientes.find((p) => p.id === parseInt(modalentrega))

  const {
    id,
    usuario: { nombreCompleto, direccion },
  } = pendiente

  const cambioEstadoPedido = async (idPedido) => {
    try {
      const resultado = await axios.put("/api/pedidos", {
        idPedido,
        estado: "entregado",
      })
      if (resultado.status === 200) {
        router.push(`/repartidor?estado-orden=entregado`)
        router.refresh({ asPath: `/repartidor?estado-orden=entregado` })
      } else {
        alert("Error al entregar el pedido.")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {nombreCompleto ? (
        <div className=" fixed top-0 left-0 min-h-screen min-w-full  bg-slate-900/50  flex flex-col justify-center items-center z-30 ">
          <div className=" max-w-[370px] min-w-[370px]  max-h-[750px] min-h-[750px] flex flex-col items-center justify-center   bg-[#8EFA8B] border-[5px] border-[#21A600]  rounded-3xl gap-4 ">
            <div className=" flex flex-col  items-center font-medium  p-3 pb-6 rounded gap-3 ">
              <div className="text-6xl flex flex-row gap-1  ">
                <p>#Pedido:</p>
                <p className="text-6xl">{id}</p>
              </div>

              <div className=" flex flex-row gap-1 mt-2  text-[23px] font-extrabold">
                <p>Direccion:</p>
                <p>{direccion}</p>
              </div>
              <div className=" flex flex-row gap-1 font-black text-[23px] mb-3">
                <p>Cliente:</p>
                <p>{nombreCompleto}</p>
              </div>
              <div className=" text-center font-semibold mt-2 text-1xl">
                <p className="text-6xl">Confirma entrega?</p>
              </div>
            </div>
            <div className="flex flex-col  items-center justify-center gap-9">
              <Link href={`/repartidor?estado-orden=entregado`}>
                <div className="p-3 bg-white rounded-md transform transition-transform hover:scale-110">
                  <button
                    onClick={() => {
                      cambioEstadoPedido(id)
                    }}
                    className=" bg-[#21A600]/80 rounded-md p-2 "
                  >
                    <FaCheck className="text-8xl text-white" />
                  </button>
                </div>
              </Link>

              <Link href={`/repartidor`}>
                <div className="p-3 bg-white rounded-md transform transition-transform hover:scale-110">
                  <button className=" bg-[#F90101] p-2 rounded-md transform transition-transform hover:scale-110">
                    <FaTimes className="text-8xl text-white" />
                  </button>
                </div>
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
export default Modallisto
