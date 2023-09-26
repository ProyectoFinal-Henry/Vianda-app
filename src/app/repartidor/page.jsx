"use client"
import { useSearchParams } from "next/navigation"

import CardsPedidos from "@/components/entregaRepartidor/CardsPedidos"
import Modallisto from "@/components/entregaRepartidor/Modallisto"
import React from "react"
import axios from "axios"
import { useEffect, useState } from "react"
// import NotAdmin from "@/components/adminLayout/NotAdmin";
import Link from "next/link"
import LoadingComponentApp from "../loading"
import { RiCoinsLine } from "react-icons/ri"

const RepartidorDashboard = () => {
  // const [auth, setAuth] = useState(false);
  // useEffect(() => {
  //   axios.get("/api/auth/check").then((res) => {
  //     if (res.data.rol !== "repartidor" && res.data.rol !== "administrador") {
  //       setAuth(false);
  //     } else {
  //       setAuth(true);
  //     }
  //   });
  // }, []);

  const [listos, setListos] = useState([])
  const [total, setTotal] = useState("")
  const [pendientes, setPendientes] = useState([])
  // !=============================================
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)
  const queryOrden = params.get("estado-orden")

  const cantidadListos = listos.length > 0 ? listos.length : 0
  const cantidadPendientes = pendientes.length > 0 ? pendientes.length : 0
  const cantidadTotal = cantidadListos + cantidadPendientes

  useEffect(() => {
    estadopedido()
  }, [queryOrden])
  const estadopedido = async () => {
    try {
      const res2 = await axios.get(`/api/pedidos?estado=despachado`) // trae los pedidos con estado despachado
      setPendientes(res2.data)
      const res3 = await axios.get(`/api/pedidos?estado=entregado`)
      setListos(res3.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (pendientes.length < 0 && listos.length < 0) {
      setTotal(cantidadTotal)
    } else if (listos.length === 0) {
      setTotal(cantidadPendientes)
    } else if (pendientes.length === 0) {
      setTotal(cantidadPendientes)
    } else {
      setTotal(cantidadTotal)
    }
  }, [pendientes, listos])
  // !=============================================

  return (
    <div>
      {/* {auth ? ( */}
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
                <p className="text-2xl text-[1.625rem] ">{total}</p>
              </div>
              <div className="flex flex-row gap-1">
                <p className="text-2xl text-[1.625rem]">Listos:</p>
                <p className="text-2xl text-[1.625rem] text-[#008B38]">{listos.length > 0 ? cantidadListos : "0"}</p>
              </div>
              <div className="flex flex-row gap-1">
                <p className="text-2xl text-[1.625rem]">Pendientes:</p>
                <p className="text-2xl text-[1.625rem] text-[#FF0000]">{pendientes.length > 0 ? cantidadPendientes : "0"}</p>
              </div>
            </div>

            <div className=" flex flex-row gap-3 ">
              <Link
                href={"/repartidor?estado-orden=entregado"}
                className="btn bg-[#00FF0A] text-xl font-bold px-10"
              >
                <div className="flex flex-row">
                  <p>Listos:</p>
                  <p>{listos.length > 0 ? cantidadListos : "0"}</p>
                </div>
              </Link>

              <Link
                href={"/repartidor?estado-orden=despachado"}
                className="btn bg-[#FF0303] text-xl font-bold px-5"
              >
                Pendientes
                <p>{pendientes.length > 0 ? cantidadPendientes : "0"}</p>
              </Link>
            </div>
          </div>
        </div>

        <CardsPedidos pedidos={queryOrden === "entregado" ? listos : pendientes} />

        <Modallisto pendientes={pendientes} />
      </>
      {/* ) : ( */}
      {/* <NotAdmin /> */}
      {/* )} */}
    </div>
  )
}

export default RepartidorDashboard
