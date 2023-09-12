"use client"
import Image from "next/image"

const Detalle = () => {
  return (
    <>
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        open modal
      </button>
      <dialog
        id="my_modal_3"
        className="modal  "
      >
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            <div id="contenedorPrincipal">
              <div className=" flex flex-col items-center justify-center place-content-center">
                <div className="bg-accent/60 w-96 mt-4 py-1 rounded ">
                  <h1 className="text-center font-semibold tracking-wider">Ravioles de verdura</h1>
                </div>
                <div
                  id="contenedorImg"
                  className=" w-[28rem]"
                >
                  <div className="avatar max-h-35 pt-4 ">
                    <img
                      className="object-cover"
                      src="https://badun.nestle.es/imgserver/v1/80/1290x742/ravioli-a-la-carbonara-ligera.jpg"
                    />
                  </div>
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
              </div>

              <div
                id="contenedorTexto"
                className=" tracking-wider pt-5 flex flex-col gap-3 text-neutral-800 font-normal"
              >
                <div className="flex flex-col gap-1">
                  <p className="bg-accent/30  pl-1 w-[6.5rem] rounded">Descripcion</p>
                  <p className=""> Ravioles de verdura con salsa blanca</p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="bg-accent/30 w-30 pl-1 w-28 rounded">Ingredientes</p>
                  <p className=""> Ravioles, leche, crema, maizena</p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="bg-accent/30  pl-1 w-11 rounded">Tipo</p>
                  <p className="">Vegetariano</p>
                </div>
                <div className="flex flex-row gap-2">
                  <p className="bg-accent/30 w-30 pl-1 w-14 rounded ">Stock:</p>
                  <p className="">5</p>
                </div>

                <div
                  className="divider  
        "
                ></div>
                <div className="flex flex-row gap-2">
                  <p className="bg-accent/30  pl-1 w-[3.8rem] rounded">Precio:</p>
                  <p className="font-medium"> $ 200</p>
                </div>
              </div>

              <div
                id="contenedorButton  "
                className="ml-80"
              >
                <button className=" py-1  btn-accent bg-accent px-8 rounded-lg mt-3 ">Agregar</button>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </>
  )
}

export default Detalle
