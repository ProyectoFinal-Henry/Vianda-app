"use client"
import { MdOutlineError } from "react-icons/md"
import { FcOk } from "react-icons/fc"
import { currencyFormater } from "@/libs/utils/currencyFormater"
import axios from "axios"
import { useEffect, useState } from "react"
import Image from "next/image"

const CardsMenu = ({ viandas, dia, tipo, setViandas }) => {
  const [loader, setLoader] = useState("off")
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
  const viandasPorTipo = viandas.filter((vianda) => vianda.tipo === tipo)

  const updateVianda = async (e) => {
    e.target.value === "" && setViandaSeleccionada(viandaVacia)
    setLoader("on")

    try {
      const menuItem = await axios.post(`/api/menu`, { dia: dia, viandaId: e.target.value, tipo: tipo })
      setLoader("success")
      e.target.value !== "" && setViandaSeleccionada(viandasPorTipo.find((vianda) => vianda.id === Number(e.target.value)))
      const viandasFilter = viandas.filter((vianda) => vianda.id !== Number(e.target.value))
      setViandas(viandasFilter)
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setLoader("off")
    } catch (error) {
      setLoader("error")
      await new Promise((resolve) => setTimeout(resolve, 2500))
      setLoader("off")
    }
  }

  // !===============================================================
  return (
    <>
      <div
        className="w-[47%] max-w-[250px] md:max-w-[210px] my-3"
        id="cardWrapper"
      >
        <h1
          id="title"
          className="font-medium text-xl uppercase  text-center"
        >
          {tipo === "sinHarinas" ? "Sin Harinas" : tipo}
        </h1>

        <div
          className="flex flex-col  bg-base-100 shadow-xl  border rounded-xl border-slate900/10
            "
        >
          <div
            className="flex flex-col justify-between  min-h-[330px] items-stretch "
            key={viandaSeleccionada.id}
            id="card"
          >
            <div className="flex flex-col items-center justify-center gap-y-1">
              <div className="avatar max-h-44  flex flex-col items-center justify-center">
                <div
                  className="w-full
                            rounded-t-xl"
                >
                  <Image
                    width={200}
                    height={200}
                    alt="imagen de la vianda"
                    className={`object-cover ${loader === "success" && "animate-pulse"}`}
                    src={viandaSeleccionada.imagen}
                  />
                </div>
              </div>
              <span className="badge m-1 bg-accent/50 rounded border-none">{viandaSeleccionada.tipo}</span>
            </div>

            <div
              id="cardBody"
              className="flex flex-col justify-between gap-1 p-1 min-h-[165px]"
            >
              <h2 className="font-semibold text-2xl leading-5 ml-1">{viandaSeleccionada.nombre}</h2>

              <div className="card-actions flex flex-col justify-end ">
                {viandaSeleccionada.precio > 0 && (
                  <h3 className="min-w-full font-bold text-base text-center tracking-wider">
                    {currencyFormater(viandaSeleccionada.precio)}
                  </h3>
                )}

                <div
                  id="typeWrapper  "
                  className="mx-auto mb-1 px-1 relative"
                >
                  {loader === "on" && (
                    <div className="flex flex-row justify-center items-center success w-[97%] bg-slate-50/90 absolute top-0 left-0 rounded-md mx-1 mr-8 h-12">
                      <span className="loading loading-infinity loading-lg min-w-[45px] text-accent  "></span>
                    </div>
                  )}
                  {loader === "success" && (
                    <div className="min-w-full flex flex-row justify-center items-center h-12 absolute top-0 left-0">
                      <FcOk className="text-4xl animate-ping " />
                    </div>
                  )}
                  {loader === "error" && (
                    <div className="min-w-full flex flex-row justify-center items-center h-16 -mt-1 absolute top-0 left-0 bg-red-300 rounded-md">
                      <MdOutlineError className="text-4xl   text-red-600 " /> <span>ERROR!</span>
                    </div>
                  )}

                  <select
                    className="select select-accent select-bordered rounded-md w-full max-w-xs "
                    onChange={updateVianda}
                  >
                    Escoger Vianda
                    <option
                      key={0}
                      value={"sinSeleccion"}
                    >
                      Seleccionar
                    </option>
                    {viandasPorTipo.map(({ id, nombre }) => (
                      <option
                        key={id}
                        value={id}
                      >
                        {nombre}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardsMenu
