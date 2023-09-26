"use client"
import { BsFillBoxSeamFill } from "react-icons/bs"

import Link from "next/link"
import Image from "next/image"

function CardAllDishes(props) {
  const { data } = props
  //declarar nueva url para meterle queries

  if (!Array.isArray(data)) {
    return <p>No hay datos disponibles</p>
  }

  return (
    <>
      <div className="min-w-full flex flex-row flex-wrap  justify-center items-stretch my-6 gap-4 px-2">
        {data.map(({ id, imagen, nombre, tipo, descripcion, ingredientes, stock, precio }) => {
          return (
            <Link
              href={`/catalog?modal=${id}`}
              key={id}
              className="card-compact bg-amber-300 max-w-[47%] min-w-[47%]   
              md:max-w-[270px]  md:min-w-[270px]   shadow-xl  rounded-xl 
               hover:bg-amber-400 transition-all duration-300 outline-none hover:outline-amber-400 cursor-pointer active:scale-105 "
              scroll={false}
            >
              <figure>
                <Image
                  className="rounded-t-xl object-cover min-w-full min-h-[150px] max-h-[150px] md:min-h-[200px] md:max-h-[200px]"
                  src={imagen}
                  alt={nombre}
                  width={300}
                  height={200}
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
            </Link>
          )
        })}
      </div>
    </>
  )
}

export default CardAllDishes
