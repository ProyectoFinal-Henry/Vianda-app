"use client"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { HowWorks } from "@/components/LandingComponents/HowWorks"
import InfoEmpresa from "@/components/LandingComponents/InfoEmpresa"
import CallToAction from "@/components/LandingComponents/CallToAction"

const data = [
  {
    id: 1,
    title: " Ahorra tiempo come sano ahora en ViandApp",
    image: "/about-background-image.png",
  },
  {
    id: 2,
    title: "Elegí calidad, elgí ViandApp",
    image: "/home-banner-image (1).png",
  },
  {
    id: 3,
    title: "Elegí calidad, elgí ViandApp",
    image: "/home-banner-image (1).png",
  },
]

export default function LandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)), 1000)
    return () => clearInterval(interval)
  }, [])
  return (
    <>
      <div
        id="container-principal "
        // items-center place-content-center gap-80
        className=" flex flex-col-reverse md:flex-row "
      >
        <div
          className=" flex flex-col items-start justify-center"
          id="textos"
        >
          <h2 className="  font-bold text-4xl md:text-6xl  tracking-widest ml-4 leading-none  md:ml-[6rem]">
            Ahorrá tiempo, comé sano ahora en
            <span className="text-accent ml-3 ">ViandApp</span>
          </h2>
          <div className="mt-8 min-w-full">
            <p className="text-gray-700 text-xl  font-semibold mt-3 min-w-full text-center   md:ml-24   ">
              El sabor de tu semana a tu gusto
            </p>
          </div>
          <Link
            href="/catalog"
            className="mt-8 min-w-full text-center md:flex md:justify-center "
          >
            <button className="  md:ml-[6rem] mx-auto mt-5 btn btn-accent text-white  rounded-3xl text-xl  transition-transform   font-semibold  ">
              Comenzar ahora
            </button>
          </Link>
        </div>

        <div
          id="container-image "
          className="text-center w-[80%] mx-auto mt-12 avatar flex flex-col justify-center items-center min-h-[321px]"
        >
          <img
            src={data[currentSlide].image}
            alt="image"
            className="object-cover   -ml-3 mb-12"
          />
        </div>
      </div>
      <HowWorks />

      <Link
        href="/catalog"
        className="mt-0 mb-20 min-w-full text-center flex justify-center"
      >
        <button className="   mx-auto mt-5 btn btn-accent  text-white rounded-3xl text-xl  transition-transform hover:scale-110  font-semibold ">
          Comenzar ahora
        </button>
      </Link>

      <InfoEmpresa />

      <CallToAction />
    </>
  )
}
