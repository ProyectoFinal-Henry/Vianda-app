import { BsBox2Heart } from "react-icons/bs"
import { BsBox2HeartFill } from "react-icons/bs"
import { BiSupport } from "react-icons/bi"
import { BsShieldCheck } from "react-icons/bs"
import { BsShieldShaded } from "react-icons/bs"
import CardsCheckout from "@/components/checkout/CardsCheckout"
import RowResponsive from "@/components/formaters/RowResponsive"
import { currencyFormater } from "@/libs/utils/currencyFormater"
import axios from "axios"
import Image from "next/image"
import Link from "next/link"
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
          className="flex  flex-col md:flex-row   gap-y"
        >
          <main
            className="md:max-w-[80%] bg-yellow-200"
            id="grid"
          >
            <h1
              id="title"
              className="font-medium text-lg text-center mx-4
              md:mt-8 md:text-left"
            >
              MIS VIANDAS PARA LA SEMANA DEL: 18 AL 22 DE SEPTIEMBRE:
            </h1>
            <div className="divider my-0"></div>
            <CardsCheckout viandas={viandasToRender} />

            <div
              id="cards"
              className=""
            ></div>
          </main>

          <div className="min-w-[100%] md:min-w-[20%] flex flex-col justify-start ">
            <side
              className="fixed bottom-0 left-0 md:relative bg-base-100 min-w-[100%]  px-3 flex flex-col border-2 border-slate-900/10 rounded-t-xl pt-2
               md:rounded-none
              "
              id="detail"
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
                <div className="divider my-0"></div>
                <Image
                  className="mx-auto my-4 hidden md:block"
                  src={"/images/corporate/100seguro.png"}
                  alt=""
                  height={"46"}
                  width={"155"}
                ></Image>
                <linksBox className="hidden  md:block">
                  <Link
                    className="flex flex-row gap-x-4 items-center text-neutral-600 my-4 mx-2"
                    href={"#"}
                  >
                    <BsShieldCheck className=" text-3xl " />
                    <span className=" text-lg font-medium">Protección al comprador</span>{" "}
                  </Link>
                  <Link
                    className="flex flex-row gap-x-4 items-center text-neutral-600 my-4 mx-2"
                    href={"#"}
                  >
                    <BiSupport className=" text-3xl " />
                    <span className=" text-lg font-medium">Asesoría telefónica: (54) 484-2222</span>{" "}
                  </Link>
                  <Link
                    className="flex flex-row gap-x-4 items-center text-neutral-600 my-4 mx-2"
                    href={"#"}
                  >
                    <BsBox2Heart className=" text-3xl " />
                    <span className=" text-lg font-medium">Rastrea tu pedido</span>{" "}
                  </Link>
                </linksBox>
              </div>
            </side>
          </div>
        </div>
      </RowResponsive>
    </>
  )
}

export default CatalogRegisterPage
