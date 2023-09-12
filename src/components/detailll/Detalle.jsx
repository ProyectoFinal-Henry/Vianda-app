"use client"

import { CgCloseO } from "react-icons/cg"
import Image from "next/image"
import { useState } from "react"

const Detalle = ({ id, imagen, nombre, tipo, descripcion, ingredientes, stock, precio }) => {
  const [displayed, SetDisplayed] = useState(true)
  const toogler = () => {
    SetDisplayed(!displayed)
  }

  return (
    <>
      <div
        id="modal producto"
        className={` fixed top-0 left-0 min-h-screen min-w-full  bg-slate-900/50  flex flex-col justify-center items-center 
        ${displayed ? "visible" : "invisible"}   `}
      >
        <div
          id="contenedorPrincipal"
          className=" max-w-[380px] min-w-[380px] flex flex-col items-center justify-center  md:max-w-[35%] md:min-w-[35%] 
            relative bg-base-100  p-4 rounded-2xl"
        >
          {
            <CgCloseO
              className="text-accent text-2xl absolute right-2 top-2"
              onClick={toogler}
            />
          }

          <h1 className="text-center font-semibold tracking-wider text-base-100  mt-12 bg-accent min-w-[90%] mx-auto">{nombre}</h1>

          <div className="avatar min-w-full pt-4 ">
            <img
              src={imagen}
              className="object-cover"
            />
          </div>
          <div className="avatar max-h-35 pt-4 ">
            <Image
              alt="asi funciona la app imagen"
              width={347}
              height={150}
              className="object-cover"
              src="/disponible.png"
            />
          </div>

          <div
            id="contenedorTexto"
            className=" tracking-wide pt-5  flex flex-col gap-2 text-neutral-800 font-normal"
          >
            <div className="flex flex-col gap-1">
              <p className="bg-accent/30  pl-1 w-[6.5rem] rounded">Descripcion</p>
              <p className=""> {descripcion}</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="bg-accent/30 w-30 pl-1 w-28 rounded">Ingredientes</p>
              <p className="">{ingredientes}</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="bg-accent/30  pl-1 w-11 rounded">Tipo</p>
              <p className="">{tipo}</p>
            </div>
            <div className="flex flex-row gap-2">
              <p className="bg-accent/30 w-30 pl-1 w-14 rounded ">Stock:</p>
              <p className="">{stock}</p>
            </div>

            <div className="divider"></div>
            <div className="flex flex-row gap-2">
              <p className="bg-accent/30  pl-1 w-[3.8rem] rounded">Precio:</p>
              <p className="font-medium"> {precio}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Detalle
