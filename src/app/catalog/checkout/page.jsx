import CardsCheckout from "@/components/checkout/CardsCheckout"
import RowResponsive from "@/components/formaters/RowResponsive"
import { currencyFormater } from "@/libs/utils/currencyFormater"
import axios from "axios"
import React from "react"

/*========== solo mientras hay acceso al local storage voy a traer las viandas por request INICIO ==========*/
const temporaryViandas = async () => {
  const viandas = await axios(`${process.env.LOCALHOST}/api/viandas`)

  // console.log("file: page.jsx:15  viandas.data:", viandas.data)
  return viandas.data
}
/*========== solo mientras hay acceso al local storage voy a traer las viandas por request FIN ==========*/
const CatalogRegisterPage = async () => {
  /*========== solo mientras hay acceso al local storage voy a traer las viandas por request INICIO ==========*/
  const viandasToRender = await temporaryViandas()
  /*========== solo mientras hay acceso al local storage voy a traer las viandas por request FIN ==========*/
  return (
    <>
      <RowResponsive>
        <div
          id="checkout"
          className="flex  flex-col md:flex-row  "
        >
          <main
            id="grid"
            className=""
          >
            <h1
              id="title"
              className="font-bold text-lg"
            >
              MIS VIANDAS PARA LA SEMANA DEL 18 AL 22 DE SEPTIEMBRE:
            </h1>
            <CardsCheckout viandas={viandasToRender} />
            <div
              id="cards"
              className=""
            ></div>
          </main>
          <side
            id="detail"
            className="fixed bottom-0 left-0 bg-base-100 min-w-[100%] px-3 flex flex-col border-2 border-slate-900/10 rounded-t-xl pt-2  "
          >
            <h2 className="font-bold text-lg">RESUMEN DE TU PEDIDO</h2>
            <div className="divider my-0"></div>

            <div className="flex flex-row justify-between items-center">
              <h3 className="font-bold text-lg">TOTAL:</h3>
              <h3 className="font-bold text-lg text-red-500">{currencyFormater(5700)}</h3>
            </div>
            <div className="divider my-0"></div>
            <div
              id="btnWrapper"
              className="min-w-full p-2"
            >
              <button className="btn  btn-warning btn-wide min-w-full text-white text-xl tracking-wider  ">PROCESAR COMPRA</button>
            </div>
          </side>
        </div>
      </RowResponsive>
    </>
  )
}

export default CatalogRegisterPage
