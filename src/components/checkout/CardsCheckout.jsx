import { currencyFormater } from "@/libs/utils/currencyFormater"

const CardsCheckout = ({ viandas }) => {
  return (
    <>
      <div className="inline-flex items-stretch justify-start flex-wrap gap-2 mx-auto">
        {viandas
          .slice(5)
          .map(
            ({
              id,
              nombre,
              tipo,
              descripcion,
              ingredientes,
              imagen,
              stock,
              estado,
              lunes,
              martes,
              miercoles,
              jueves,
              viernes,
              sabado,
              domingo,
              pedidos,
            }) => {
              return (
                <div
                  className="flex flex-col justify-between min-h-[300px] items-stretch w-[47%] max-w-[250px] bg-base-100 shadow-xl my-6 border rounded-3xl border-slate900/10
                  md:max-w-[140px]"
                  key={id}
                  id="card"
                >
                  {/* <div id="cardHeader"> */}
                  <div className="avatar max-h-36">
                    <div
                      className="w-full
                        rounded-t-3xl"
                    >
                      <img
                        className="object-cover"
                        src={imagen}
                      />
                    </div>
                  </div>
                  <div
                    id="cardBody"
                    className="flex flex-col justify-between gap-1 p-1 h-full"
                  >
                    <span className="badge m-1 bg-accent/50 rounded border-none">{tipo}</span>
                    <h2 className="font-bold leading-4 ml-2">{nombre}</h2>
                    {/* </div> */}

                    <div className="card-actions flex flex-col justify-end ">
                      <h3 className="ml-3">{currencyFormater(stock)}</h3>
                      <div
                        id="typeWrapper"
                        className="mx-auto mb-2"
                      >
                        <select className="select select-xs select-bordered rounded w-full max-w-xs">
                          <option
                            selected
                            defaultValue={"clasico"}
                          >
                            Clásico
                          </option>
                          <option value={"clasico"}>Clasico</option>
                          <option value={"sinHarinas"}>Sin Harinas</option>
                          <option value={"vegetariano"}>Vegetariano</option>
                          <option value={"dieta"}>Dieta</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
          )}
      </div>
    </>
  )
}

export default CardsCheckout
