"use client"
import { BsFillBoxSeamFill } from "react-icons/bs"
import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { Linden_Hill } from "next/font/google"
import Link from "next/link"
import Detalle from "../detailll/Detalle"

function CardAllDishes(props) {
  const [modal, setModal] = useState(false)
  const router = useRouter()
  const { data } = props

  if (!Array.isArray(data)) {
    return <p>No hay datos disponibles</p>
  }

  const modaler = () => setModal(!modal)
  return (
    <>
      <div
        className="min-w-full flex flex-row flex-wrap  justify-start  my-6 gap-4"
        onClick={modaler}
      >
        {data.map(({ id, imagen, nombre, tipo, descripcion, ingredientes, stock, precio }) => {
          return (
            <div
              key={id}
              className="card-compact bg-amber-300 max-w-[47%]   md:max-w-[273px]  md:min-w-[273px]   shadow-xl cursor-default rounded-xl "
            >
              {modal && (
                <Detalle
                  id={id}
                  imagen={imagen}
                  nombre={nombre}
                  tipo={tipo}
                  descripcion={descripcion}
                  ingredientes={ingredientes}
                  stock={stock}
                  precio={precio}
                />
              )}
              <figure>
                <img
                  className="rounded-t-xl object-cover min-w-full min-h-[150px] max-h-[150px] md:min-h-[200px] md:max-h-[200px]"
                  src={imagen}
                  alt={nombre}
                />
              </figure>

              <div className="card-body p-5">
                <div className="text-lg  text-slate900 font-bolder badge-outline">{tipo}</div>
                <div className="card-actions   items-center">
                  <BsFillBoxSeamFill />
                  <div className="font-extrabold text-xl">{stock}</div>
                </div>
                <h2 className="card-title  leading-5">{nombre}</h2>

                <p>{ingredientes}</p>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default CardAllDishes
