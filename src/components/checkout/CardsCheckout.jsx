"use client"
import { currencyFormater } from "@/libs/utils/currencyFormater"
import { useCarrito } from "@/context/CarritoContext"
import { useEffect, useState } from "react"
import Image from "next/image"

let id = {
  lunes: 0,
  martes: 0,
  miercoles: 0,
  jueves: 0,
  viernes: 0,
}
let mostrarBotonCantidad = {
  lunes: true,
  martes: true,
  miercoles: true,
  jueves: true,
  viernes: true,
}
let mostrarSelectCantidad = {
  lunes: false,
  martes: false,
  miercoles: false,
  jueves: false,
  viernes: false,
}

const CardsCheckout = ({ viandasDia, dia }) => {
  //Me traigo los valores guardados en localStorage por si exisitieren. Y las funciones para las modificaciones.
  const { viandas, agregarVianda, quitarVianda } = useCarrito()
  const viandaVacia = {
    id: 0,
    nombre: "Selecciona tipo",
    tipo: "Sin tipo.",
    descripcion: "Sin descricion.",
    ingredientes: "Sin ingredientes.",
    imagen: "https://res.cloudinary.com/deezwetqk/image/upload/c_scale,w_250/v1695171791/food-placeholder_lswewp.jpg",
    stock: "Sin Stock",
    cantidad: 0,
    precio: 0,
  }

  //Guardo cada tipo de vianda en una variable diferente para poder manejar las posibilidades de cambio.
  const viandaDieta = viandasDia.find((vianda) => vianda.tipo === "dieta")
  const viandaClasico = viandasDia.find((vianda) => vianda.tipo === "clasico")
  const viandaSinHarina = viandasDia.find((vianda) => vianda.tipo === "sinHarinas")
  const viandaVegetariano = viandasDia.find((vianda) => vianda.tipo === "vegetariano")

  //Estado para guardar las seleccion. Por default nada en caso de que no se desee pedir. O no se haya registrado
  // de manera previa.
  const [viandaSeleccionada, setViandaSeleccionada] = useState(viandaVacia)
  const index = viandas.findIndex((vianda) => vianda[dia] === true)
  const viandaGuardada = viandas[index]

  if (viandaSeleccionada.id === 0 && viandaGuardada) {
    id[dia] = viandaGuardada.id
    setViandaSeleccionada(viandaGuardada)
  }

  useEffect(() => {
    if (viandaSeleccionada.id !== 0) {
      id[dia] = Number(viandaSeleccionada.id)
    }
  }, [viandaSeleccionada, dia])

  const handleChange = async (e) => {
    const seleccion = e.target.value
    switch (seleccion) {
      case "clasico":
        viandaClasico.cantidad = 1
        agregarVianda(viandaClasico)
        setViandaSeleccionada(viandaClasico)
        break
      case "sinHarina":
        viandaSinHarina.cantidad = 1
        agregarVianda(viandaSinHarina)
        setViandaSeleccionada(viandaSinHarina)
        break
      case "vegetariano":
        viandaVegetariano.cantidad = 1
        agregarVianda(viandaVegetariano)
        setViandaSeleccionada(viandaVegetariano)
        break
      case "dieta":
        viandaDieta.cantidad = 1
        agregarVianda(viandaDieta)
        setViandaSeleccionada(viandaDieta)
        break
      case "viandaVacia":
        break
      default:
        break
    }
  }

  const handleCambiar = (e) => {
    quitarVianda(id[dia])
    setViandaSeleccionada(viandaVacia)
  }

  const handleCantidad = (e) => {
    quitarVianda(id[dia])
    mostrarSelectCantidad[dia] = true
    mostrarBotonCantidad[dia] = false
  }

  const handleChangeCantidad = (e) => {
    if (e.target.value === "borrar") {
      quitarVianda(id[dia])
      setViandaSeleccionada(viandaVacia)
    } else {
      const valor = Number(e.target.value)
      const cambioDeCantidad = viandaSeleccionada
      cambioDeCantidad.cantidad = valor
      mostrarSelectCantidad[dia] = false
      mostrarBotonCantidad[dia] = true
      setViandaSeleccionada(cambioDeCantidad)
      agregarVianda(cambioDeCantidad)
    }
  }
  // !===============================================================
  return (
    <>
      <div
        className="w-[47%] max-w-[250px] md:max-w-[130px] my-3"
        id="cardWrapper"
      >
        <h1
          id="title"
          className="font-medium text-xl uppercase  text-center  tracking-wider"
        >
          {dia}
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
       
                      <figure>
              <Image
              width={250}
              height={250}
              className="rounded-t-xl object-cover min-h-[180px] max-h-[180px] md:min-h-[120px] md:max-h-[120px]  min-w-full"
              src={viandaSeleccionada.imagen}
                alt={viandaSeleccionada.nombre}
              />
            </figure>
              
              <span className="badge m-1 bg-accent/50 rounded border-none">
                {viandaSeleccionada.tipo === "sinHarinas" ? "sin harina" : viandaSeleccionada.tipo}
              </span>
            </div>
            <div
              id="cardBody"
              className="flex flex-col justify-between gap-1 p-1 min-h-[165px]"
            >
              <h2 className="font-medium leading-4 ml-1">{viandaSeleccionada.nombre}</h2>

              <div className="card-actions flex flex-col justify-end ">
                {viandaSeleccionada.precio > 0 && (
                  <h3 className="min-w-full font-bold text-base text-center tracking-wider">
                    {currencyFormater(viandaSeleccionada.precio)}
                  </h3>
                )}

                {mostrarBotonCantidad[dia] && viandaSeleccionada.id !== 0 && (
                  <button
                    className="font-medium ml-2"
                    onClick={handleCantidad}
                  >{`Cantidad: ${viandaSeleccionada.cantidad}`}</button>
                )}
                {mostrarSelectCantidad[dia] && (
                  <select
                    className="select select-xs select-bordered rounded w-full max-w-[130px]"
                    onChange={handleChangeCantidad}
                  >
                    <option value="borrar">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                )}
                <div
                  id="typeWrapper"
                  className="mx-auto mb-2"
                >
                  {viandaSeleccionada.id !== 0 && (
                    <button
                      className="btn btn-accent btn-sm "
                      onClick={handleCambiar}
                    >
                      Cambiar
                    </button>
                  )}
                  {viandaSeleccionada.id === 0 && (
                    <select
                      className="select select-xs select-bordered rounded w-full max-w-xs bg-red-300/40"
                      onChange={handleChange}
                    >
                      <option value="viandaVacia">sel. tipo</option>
                      <option value="clasico">Clasico</option>
                      <option value="sinHarina">Sin Harinas</option>
                      <option value="vegetariano">Vegetariano</option>
                      <option value="dieta">Dieta</option>
                    </select>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardsCheckout
