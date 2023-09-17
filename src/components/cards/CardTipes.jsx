import React from "react"

function CardTipes() {
  return (
    <>
      <div className="flex justify-center w-full px-2">
        <h1 className="text-slate-700 font-extrabold text-2xl md:text-4xl text-center md:min-w-fit mt-12 md:mt-0 mb-12">
          Categorias <br className="md:hidden" /> en nuestro Menu
        </h1>
      </div>

      <div className=" min-w-full flex flex-row flex-wrap  justify-between  my-6 gap-y-4 px-2">
        <div className="card-compact bg-amber-300 max-w-[49%]   md:max-w-[265px]    shadow-xl cursor-default rounded-xl md:min-h-[360px]">
          <figure>
            <img
              className="rounded-t-xl"
              src="/images/clasico.png"
              alt="clasico"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl">Clasico!</h2>
            <p>Platos inspirados en tradiciones culinarias icónicas, como parrilladas y guisos reconfortantes, con sabores atemporales.</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>

        <div className="card-compact bg-amber-300 max-w-[49%]   md:max-w-[265px]   shadow-xl cursor-default  rounded-xl md:min-h-[360px]">
          <figure>
            <img
              className="rounded-t-xl"
              src="/images/vegetariano_card.png"
              alt="vegetariano"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl">Vegetariano!</h2>
            <p>
              Opciones creativas y sabrosasdesde ensaladas frescas hasta proteínas vegetales, para amantes de las verduras y conscientes de
              la alimentación.
            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>

        <div className="card-compact bg-amber-300 max-w-[49%]   md:max-w-[265px]   shadow-xl cursor-default rounded-xl md:min-h-[360px]">
          <figure>
            <img
              className="rounded-t-xl"
              src="/images/sin_harinas_card.png"
              alt="sin_harinas"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl">Sin Harinas!</h2>
            <p>
              Alternativas saludables y deliciosas, sabores naturales hasta opciones bajas en carbohidratos, ideales para quienes evitan la
              harina.
            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>

        <div className="card-compact bg-amber-300 max-w-[49%]   md:max-w-[265px]   shadow-xl cursor-default rounded-xl md:min-h-[360px]">
          <figure>
            <img
              className="rounded-t-xl"
              src="/images/dieta.png"
              alt="dieta"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl">Dieta!</h2>
            <p>
              Platos equilibrados y saludables sin sacrificar el sabor, con ingredientes frescos y preparaciones cuidadosamente
              seleccionadas.
            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardTipes
