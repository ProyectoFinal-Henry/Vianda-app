"use client"
import CardsPedidos from "@/components/entregaRepartidor/CardsPedidos"
import Modallisto from "@/components/entregaRepartidor/Modallisto"
import { useEffect, useState } from "react"

import axios from "axios"

const EntregaPage = () => {
  const [pedidos, setPedidos] = useState([])
  const [listos, setListos] = useState([])
  const [pendientes, setPendientes] = useState([])

  useEffect(() => {
    estadopedido()
  }, [])

  const cantidadTotal = pedidos.length
  const estadopedido = async () => {
    try {
      const res = await axios.get(`/api/pedidos`)
      setPedidos(res.data)
      const res2 = await axios.get(`/api/pedidos?estado=pagado`)
      setPendientes(res2.data)
      const res3 = await axios.get(`/api/pedidos?estado=entregado`)
      setListos(res3.data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <div id="contenedor">
        <div
          id="contenedorEstado"
          className="flex flex-col items-center justify-center font-semibold gap-3 bg-[#FAFF1A]  border-y-4 border-[#FF0000] pb-2"
        >
          <div
            id="contenedorPedidos"
            className="flex flex-row gap-3 h-10 items-center justify-center "
          >
            <div className="flex flex-row gap-1">
              <p className="text-2xl text-[1.625rem] ">Total: </p>
              <p className="text-2xl text-[1.625rem] ">{cantidadTotal}</p>
            </div>
            <div className="flex flex-row gap-1">
              <p className="text-2xl text-[1.625rem]">Listos:</p>
              <p className="text-2xl text-[1.625rem] text-[#008B38]">{cantidadTotal}</p>
            </div>
            <div className="flex flex-row gap-1">
              <p className="text-2xl text-[1.625rem]">Pendientes:</p>
              <p className="text-2xl text-[1.625rem] text-[#FF0000]">{cantidadTotal}</p>
            </div>
          </div>

          <div className=" flex flex-row gap-3 ">
            <button
              className="btn bg-[#00FF0A] text-xl font-bold px-10"
              // value="pagado"
              onClick={() => estadopedido("pagado")}
            >
              <div className="flex flex-row">
                <p>Listos:</p>
                <p>{cantidadTotal}</p>
              </div>
            </button>

            <button
              className="btn bg-[#FF0303] text-xl font-bold px-5"
              // value="despachado"
              onClick={() => estadopedido("despachado")}
            >
              Pendientes
            </button>
          </div>
        </div>
      </div>
      {/*
      <CardsPedidos pedidos={pedidos} />
      <Modallisto pedidos={pedidos} /> */}
    </>
  )
}

export default EntregaPage
