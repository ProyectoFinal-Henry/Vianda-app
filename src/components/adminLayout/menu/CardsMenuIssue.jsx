"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const CardsMenuIssue = ({ viandas, dia, tipo }) => {
  const viandaVacia = {
    id: 0,
    nombre: "Selecciona tipo",
    tipo: tipo,
    descripcion: "Sin descricion.",
    ingredientes: "Sin ingredientes.",
    imagen: "https://res.cloudinary.com/deezwetqk/image/upload/v1695171791/food-placeholder_lswewp.jpg",
    stock: "Sin Stock",
    cantidad: 0,
    precio: 0,
  }
  //se carga con contenido vacio por defecto
  const [viandaSeleccionada, setViandaSeleccionada] = useState(viandaVacia)
  // SI HAY UNA VIANDA CON ESE DIA Y ESE TIPO LA carga
  useEffect(() => {
    const viandaBaseDatos = viandas.find((vianda) => vianda[dia] === true && vianda.tipo === tipo)
    if (viandaBaseDatos) {
      setViandaSeleccionada(viandaBaseDatos)
    }
  }, [])
  //cargar viandas por tipo

  // !===============================================================
  return (
    <>
      <div
        id="card"
        className=" 
          w-[95%] max-w-[200px]   
          card card-compact flex flex-col justify-start
          bg-base-100 shadow-xl   rounded-xl border-slate900/10
        "
        key={viandaSeleccionada.id}
      >
        <div className="avatar max-h-36  flex flex-col items-start justify-center">
          <div
            className="w-full
                            rounded-t-xl"
          >
            <Image
              width={200}
              height={200}
              alt="imagen de la vianda"
              src={viandaSeleccionada.imagen}
            />
          </div>

          <h2
            className=" badge -mt-10 ml-2 z-[2]  p-4 rounded px-3 bg-accent/90
        font-medium text-center text-lg  text-white uppercase    "
          >
            {tipo === "sinHarinas" ? "Sin Harinas" : tipo}
          </h2>
        </div>
        <div
          id="cardBody"
          className="flex flex-col justify-start gap-1 mt-1  p-2  "
        >
          <h2 className="font-semibold text-xl leading-5  min-w-full text-left border-b border-b-accent pb-1 ">
            {viandaSeleccionada.nombre}
          </h2>

          <h3 className="min-w-full font-semibold text-gray-800/60 text-left tracking-wider leading-4">
            <span className="font-bold text-gray-800">Ingr: </span>
            {viandaSeleccionada.ingredientes}
          </h3>
        </div>
      </div>
    </>
  )
}

export default CardsMenuIssue
