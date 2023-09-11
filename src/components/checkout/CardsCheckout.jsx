"use client"
import { currencyFormater } from "@/libs/utils/currencyFormater"
import { useCarrito } from "@/context/CarritoContext"
import { useEffect, useState } from "react"


let id = 0;

const CardsCheckout = async({viandasDia, dia}) => {
  //Me traigo los valores guardados en localStorage por si exisitieren. Y las funciones para las modificaciones.  
  const {viandas, agregarVianda, quitarVianda, modificarCantidad} = useCarrito();
  
  const viandaVacia = {
    id: 0,
    nombre: "Sin seleccion.",
    tipo: "Sin seleccion.",
    descripcion: "Sin seleccion.",
    ingredientes: "Sin seleccion.",
    imagen: "Sin seleccion.",
    stock: "Sin seleccion.",
  };
  
  
  //Guardo cada tipo de vianda en una variable diferente para poder manejar las posibilidades de cambio.
  const viandaDieta = viandasDia.find((vianda)=> vianda.tipo === "dieta");
  const viandaClasico = viandasDia.find((vianda)=> vianda.tipo === "clasico");
  const viandaSinHarina = viandasDia.find((vianda)=> vianda.tipo === "sinHarinas");
  const viandaVegetariano = viandasDia.find((vianda)=> vianda.tipo === "vegetariano");
  
  //Estado para guardar las seleccion. Por default nada en caso de que no se desee pedir. O no se haya registrado
  // de manera previa.
  const [viandaSeleccionada, setViandaSeleccionada]= useState(viandaVacia);
  
  
  const index = viandas.findIndex((vianda) => vianda[dia] === true);
  const viandaGuardada = viandas[index];

  
  if (viandaSeleccionada.id === 0 && viandaGuardada){
    id = viandaGuardada.id;
    setViandaSeleccionada(viandaGuardada);
  }
  
    useEffect(() => {
    if (viandaSeleccionada.id !== 0) {
      id = Number(viandaSeleccionada.id);
      console.log("entro");
    }
  }, [viandaSeleccionada]);
  
  
  const handleChange = async(e)=>{
  const seleccion = e.target.value;
  switch (seleccion) {
    case "clasico":
      agregarVianda(viandaClasico);
      setViandaSeleccionada(viandaClasico);
      break;
      case "sinHarina":
        agregarVianda(viandaSinHarina);
      setViandaSeleccionada(viandaSinHarina);
      break;
      case "vegetariano":
        agregarVianda(viandaVegetariano);
        setViandaSeleccionada(viandaVegetariano);
        break;
        case "dieta":
          agregarVianda(viandaDieta);
          setViandaSeleccionada(viandaDieta);
      break;
      case "viandaVacia":
        setViandaSeleccionada(viandaVacia);
        break;
        default:
          break;
        }
}

const handleOnClick = (e)=>{
  quitarVianda(id)
  setViandaSeleccionada(viandaVacia)
}

const handleChangeCantidad =(e) => {
  const valor = Number(e.target.value)
  modificarCantidad(id,valor)
}
/*
*/
return (
    <>
      <div className="inline-flex items-stretch justify-start flex-wrap gap-2 mx-auto">
                <div
                  className="flex flex-col justify-between min-h-[300px] items-stretch w-[47%] max-w-[250px] bg-base-100 shadow-xl my-6 border rounded-3xl border-slate900/10
                  md:max-w-[140px]"
                  key={viandaSeleccionada.id}
                  id="card"
                >
                <select className="select select-xs select-bordered rounded w-full max-w-xs"
                        onChange={handleChangeCantidad}
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                  <div className="avatar max-h-36">

                    <div
                      className="w-full
                        rounded-t-3xl"
                    >
                      <img
                        className="object-cover"
                        src={viandaSeleccionada.imagen}
                      />
                    </div>
                  </div>
                  <div
                    id="cardBody"
                    className="flex flex-col justify-between gap-1 p-1 h-full"
                  >
                    <span className="badge m-1 bg-accent/50 rounded border-none">{viandaSeleccionada.tipo}</span>
                    <h2 className="font-bold leading-4 ml-2">{viandaSeleccionada.nombre}</h2>
                    <div className="card-actions flex flex-col justify-end ">
                      <h3 className="ml-3">{currencyFormater(viandaSeleccionada.stock)}</h3>
                      <div
                        id="typeWrapper"
                        className="mx-auto mb-2"
                      >
                      {(viandaSeleccionada.id !== 0) && <button onClick={handleOnClick}>Cambiar</button>}
                      {(viandaSeleccionada.id === 0)&& <select className="select select-xs select-bordered rounded w-full max-w-xs"
                        onChange={handleChange}
                        >
                          <option value="viandaVacia">Ninguna</option>
                          <option value="clasico">Clasico</option>
                          <option value="sinHarina">Sin Harinas</option>
                          <option value="vegetariano">Vegetariano</option>
                          <option value="dieta">Dieta</option>
                        </select>}
                      </div>
                    </div>
                  </div>
                </div>
      </div> 
    </>
  )
}

export default CardsCheckout
