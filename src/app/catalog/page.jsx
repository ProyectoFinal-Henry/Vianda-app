import { RiEmotionHappyFill } from "react-icons/ri"
import { BiFoodMenu } from "react-icons/bi"
import { BiDish } from "react-icons/bi"
import { FiMapPin } from "react-icons/fi"
import { BsFillPinMapFill } from "react-icons/bs"
import CardTipes from "@/components/cards/CardTipes"
import CardViandasRecommended from "@/components/cards/CardViandasRecommended"
import Pagination from "@/components/cards/Pagination"
import RowResponsive from "@/components/formaters/RowResponsive"
import axios from "axios"
import Image from "next/image"
import Link from "next/link"

async function Homepage() {
  const res = await axios.get(`${process.env.LOCALHOST}/api/viandas`)
  const data = res.data

  return (
    <>
      <Link
        href={"/catalog/checkout"}
        className="w-full bg-gradient-to-br from-amber-300 via-amber-400 to-amber-500
       flex flex-col justify-center min-h-[50vh] "
      >
        <div className="flex flex-col md:flex-row items-center justify-around ">
          <h2 className="text-white font-extrabold text-4xl md:text-7xl text-center min-w-full md:min-w-fit ">
            Con hambre
            <br className=" hidden md:block" /> y sin tiempo?
          </h2>

          <Image
            className="avatar w-60 md:w-96 "
            src={"/about-background-image.png"}
            height={"300"}
            width={"300"}
            alt="banner image"
          />
          <h2 className="text-slate-900 font-extrabold text-2xl md:text-7xl text-center min-w-full md:min-w-fit">
            Te llevamos
            <br className=" hidden md:block" /> el almuerzo.
          </h2>
        </div>
      </Link>
      <Link
        href={"/catalog/checkout"}
        className="w-full bg-gradient-to-b from-primary via-amber-2 to-base-100
       flex flex-col justify-center min-h-[40vh] "
      >
        <div className="flex flex-col items-center justify-around md:items-center md:justify-center gap-8 md:gap-12 ">
          <h2 className="text-slate-700 font-extrabold text-2xl md:text-6xl text-center min-w-[75vh] md:min-w-fit mt-8 md:mt-0">
            Cómo Funciona?
          </h2>

          <div
            className="flex flex-row flex-wrap justify-around gap-4 md:gap-x-12"
            id="badgeWrapper"
          >
            <div
              className=" max-w-[40%] md:max-w-[18%]"
              id="badge"
            >
              <FiMapPin className="text-7xl text-amber-500 mx-auto mb-3" />
              <h3 className="min-w-full text-center font-semibold text-2xl md:text-3xl">Cerca a ti</h3>
              <h4 className="min-w-full text-center text-lg md:text-2xl leading-4  ">Pide las viandas a tu casa</h4>
            </div>
            <div
              className="max-w-[40%] md:max-w-[18%]"
              id="badge"
            >
              <BiDish className="text-7xl text-amber-500 mx-auto mb-3" />
              <h3 className="min-w-full text-center font-semibold text-2xl md:text-3xl">4 Opciones</h3>
              <h4 className="min-w-full text-center text-lg md:text-2xl leading-4  ">cada dia como quieres!</h4>
            </div>
            <div
              className="max-w-[40%] md:max-w-[18%]"
              id="badge"
            >
              <BiFoodMenu className="text-7xl text-amber-500 mx-auto mb-3" />
              <h3 className="min-w-full text-center font-semibold text-2xl md:text-3xl">tu eliges</h3>
              <h4 className="min-w-full text-center text-lg md:text-2xl leading-4  ">Calientes a diario o freezadas para la semana</h4>
            </div>
            <div
              className="max-w-[40%] md:max-w-[18%]"
              id="badge"
            >
              <RiEmotionHappyFill className="text-7xl text-amber-500 mx-auto mb-3" />
              <h3 className="min-w-full text-center font-semibold text-2xl md:text-3xl">Disfruta</h3>
              <h4 className="min-w-full text-center text-lg md:text-2xl leading-4  ">Cada dia una nueva experiencia</h4>
            </div>
          </div>
        </div>
      </Link>
      <RowResponsive>
        <CardViandasRecommended />
        <div className="flex justify-center min-w-full">
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
          <div className="flex flex-col items-center justify-around gap-8 md:gap-12  ">
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
