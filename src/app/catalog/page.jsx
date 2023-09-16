import CardTipes from "@/components/cards/CardTipes"
import CardViandasRecommended from "@/components/cards/CardViandasRecommended"
import Pagination from "@/components/cards/Pagination"
import Detalle from "@/components/detailll/Detalle"
import RowResponsive from "@/components/formaters/RowResponsive"
import FullWidthHeader from "@/components/home/FullWidthHeader"
import axios from "axios"

import Link from "next/link"

async function Homepage() {
  const res = await axios.get(`${process.env.LOCALHOST}/api/viandas`)
  const data = res.data

  return (
    <>
      <Detalle data={data} />
      <RowResponsive>
        <FullWidthHeader />
        <CardViandasRecommended />
        <div className="flex justify-center min-w-full px-2">
          <Link
            href={"/catalog/checkout"}
            className="btn btn-accent  text-white  btn-block  font-bold text-xl"
          >
            INICIAR PEDIDO
          </Link>
        </div>
        <Link
          href={"/catalog/checkout"}
          className="w-full 
       flex flex-col justify-center min-h-[40vh] mt-12"
        >
          <div className="flex flex-col items-center justify-around gap-8 md:gap-12 px-2 ">
            <h2 className="text-slate-700 font-extrabold text-2xl md:text-4xl text-left md:min-w-fit mt-12 md:mt-0">
              Comé según tu estilo:
            </h2>

            <div
              className="flex flex-row flex-wrap justify-around gap-4"
              id="badgeWrapper"
            >
              <div
                className=" max-w-[40%] md:max-w-[15%]"
                id="badge"
              >
                <div className="avatar mb-10">
                  <div className="w-54 rounded-full">
                    <img src="/images/clasico.png" />
                  </div>
                </div>

                <h2 className="text-slate-700 font-extrabold text-xl md:text-3xl text-center  md:min-w-fit">Clasico</h2>
              </div>
              <div
                className=" max-w-[40%] md:max-w-[15%]"
                id="badge"
              >
                <div className="avatar mb-10">
                  <div className="w-54 rounded-full">
                    <img src="/images/dieta.png" />
                  </div>
                </div>

                <h2 className="text-slate-700 font-extrabold text-xl md:text-3xl text-center  md:min-w-fit">Vegetariano</h2>
              </div>

              <div
                className=" max-w-[40%] md:max-w-[15%]"
                id="badge"
              >
                <div className="avatar mb-10">
                  <div className="w-54 rounded-full">
                    <img src="/images/sin_harinas.PNG" />
                  </div>
                </div>

                <h2 className="text-slate-700 font-extrabold text-xl md:text-3xl text-center  md:min-w-fit">SIn Harinas</h2>
              </div>
              <div
                className=" max-w-[40%] md:max-w-[15%]"
                id="badge"
              >
                <div className="avatar mb-10">
                  <div className="w-54 rounded-full">
                    <img src="/images/vegetariano.PNG" />
                  </div>
                </div>

                <h2 className="text-slate-700 font-extrabold text-xl md:text-3xl text-center  md:min-w-fit">Dieta</h2>
              </div>
            </div>
          </div>
        </Link>
      </RowResponsive>
      <RowResponsive>
        <CardTipes />

        <Pagination data={data} />

        <Link
          href={"/catalog/checkout"}
          className="hidden md:block"
        >
          <img
            src="/images/CTA.png"
            className="min-w-full"
          />
        </Link>
      </RowResponsive>
      <Link
        href={"/catalog/checkout"}
        className="md:hidden mt-12"
      >
        <img
          src="/images/ctamobil.png"
          className="min-w-full"
        />
      </Link>
    </>
  )
}

export default Homepage
