"use client"
import { currencyFormater } from "@/libs/utils/currencyFormater"
import axios from "axios"
import { useEffect, useState } from "react"

const CardsMenu = ({ viandas, dia, tipo }) => {
  const viandaVacia = {
    id: 0,
    nombre: "Selecciona tipo",
    tipo: tipo,
    descripcion: "Sin descricion.",
    ingredientes: "Sin ingredientes.",
    imagen: "/images/corporate/food-placeholder.jpeg",
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
    e.target.value !== "" && setViandaSeleccionada(viandasPorTipo.find((vianda) => vianda.id === Number(e.target.value)))
    // establecer esta vianda true en ese dia en la base de DATOS y borrar las demas en ese dia y con ese tipo
    const menuItem = await axios.post(`/api/menu`, { dia: dia, viandaId: e.target.value, tipo: tipo })
  }

  // !===============================================================
  return (
    <>
      <div
        className="w-[95%] max-w-[250px] md:max-w-[210px] my-3"
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
              <div className="avatar max-h-44">
                <div
                  className="w-full
                            rounded-t-xl"
                >
                  <img
                    className="object-cover"
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
                  id="typeWrapper"
                  className="mx-auto mb-1 px-1"
                >
                  <select
                    className="select select-accent select-bordered rounded-md w-full max-w-xs "
                    onChange={updateVianda}
                  >
                    Escoger Vianda
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
