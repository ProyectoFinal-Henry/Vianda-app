"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HowWorks } from "@/components/LandingComponents/HowWorks";

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
];

export default function LandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      4000
    );
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div
        id="container-principal "
        // items-center place-content-center gap-80
        className=" grid grid-cols-2 gap-10 mt-[7rem] mb-[5rem] hb-[20rem] w-[100%] place  "
      >
        <div
          id="container-text"
          // gap-9
          className=" items-center self-center place-items-center place-self-center justify-self-center justify-items-center justify-center max-w[30rem] mr[10rem] wl-[20rem]flex-col place-content-center"
        >
          <div className=" w-[16rem]">
            <h2 className="  font-bold text-6xl w-[30rem] tracking-widest hb-[20rem] ml-[6rem]">
              Ahorra tiempo come sano ahora en
              <span className="text-accent ml-3 ">ViandApp</span>
            </h2>
          </div>
          <div className="mt-[2rem]">
            <p className="text-gray-700 text-xl  font-semibold mt-3  ml-[6rem]">
              El sabor de tu semana a tu gusto
            </p>
          </div>
          <Link href="/catalog/home">
            <div className="mt-[1rem]">
              <button className="  ml-[6rem] mx-2 mt-5 bg-accent text-white px-6 py-3 rounded-3xl text-[14px] transition-transform hover:scale-110 text-lg font-semibold ">
                Comenzar ahora
              </button>
            </div>
          </Link>
        </div>
        <div
          id="container-image"
          className="max-w[26rem] max-w-[30rem]  ml-[6rem] items-center place-content-center  "
        >
          <img
            src={data[currentSlide].image}
            alt="image"
            className="object-cover ml-[0] max-h-[30rem]  self-center"
          />
        </div>
      </div>
      <HowWorks />
    </>
  );
}
