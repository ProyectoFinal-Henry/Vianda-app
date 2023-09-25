import { RiEmotionHappyFill } from "react-icons/ri"
import { BiFoodMenu } from "react-icons/bi"
import { BiDish } from "react-icons/bi"
import { FiMapPin } from "react-icons/fi"
import { BsFillPinMapFill } from "react-icons/bs"
import Link from "next/link"
import Image from "next/image"

const FullWidthHeader = () => {
  return (
    <>
      <Link
        href={"/catalog/checkout"}
        className="w-full bg-gradient-to-br from-amber-300 via-amber-400 to-amber-500
       flex flex-col justify-center   -mt-5 py-8 "
      >
        <div className="flex flex-col md:flex-row items-center justify-around gap-8 ">
          <h2 className="text-white font-extrabold text-4xl md:text-4xl lg:text-5xl text-center min-w-full md:min-w-fit ">
            Con hambre
            <br className=" hidden md:block" /> y sin tiempo?
          </h2>

          <Image
            className="avatar w-80 lg:w-96 "
            src={"https://res.cloudinary.com/deezwetqk/image/upload/c_scale,w_450/v1695169213/dgpfodji4vd4ttnh6uma.png"}
            height={"300"}
            width={"300"}
            alt="banner image"
          />
          <h2 className="text-slate-900 font-extrabold text-4xl md:text-4xl lg:text-5xl text-center min-w-full md:min-w-fit">
            Te llevamos
            <br className=" hidden md:block" /> el almuerzo.
          </h2>
        </div>
      </Link>
      <Link
        href={"/catalog/checkout"}
        className="w-full bg-gradient-to-b from-primary via-amber-2 to-base-100
       flex flex-col justify-center  "
      >
        <div className="flex flex-col items-center justify-around md:items-center md:justify-center gap-8 md:gap-12 ">
          <h2 className="text-slate-700 font-extrabold text-4xl md:text-4xl lg:text-5xl text-center  md:min-w-fit mt-8 md:mt-6">Cómo Funciona?</h2>

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
    </>
  )
}

export default FullWidthHeader
