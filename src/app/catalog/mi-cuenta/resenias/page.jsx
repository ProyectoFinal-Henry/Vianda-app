"use client"
import React from "react";
import { useEffect, useState } from "react";
import { CgLogOff } from "react-icons/cg";
import { RiShoppingBasketFill } from "react-icons/ri";
import { MdRateReview } from "react-icons/md";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";

function Resenias() {
  const [ratingValue, setRatingValue] = useState(5);

  const ratingDesdeBaseDeDatos = 3;

  useEffect(() => {
    setRatingValue(ratingDesdeBaseDeDatos);
  }, []);

  const handleRatingChange = (newValue) => {
    setRatingValue(newValue);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row items-start">
        <div
          id="NavAdmin"
          className="navbar text-black z-10 text-lg md:m-10 md:my-[10vh]"
        >
          <div className="navbar-start ">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost  md:hidden">
                <FiMenu className="text-2xl" />
              </label>
              <ul
                tabIndex={0}
                className="menu menu-md dropdown-content z-50 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link href={"/catalog/mi-cuenta"}>
                    <BsFillPersonLinesFill className="text-accent" /> Mis datos
                    Personales
                  </Link>
                </li>
                <li>
                  <Link href={"/catalog/mi-cuenta/pedidos"}>
                    <RiShoppingBasketFill className="text-accent" /> Mis pedidos
                  </Link>
                </li>
                <li>
                  <Link href={"/catalog/mi-cuenta/resenias"}>
                    <MdRateReview className="text-accent" /> Mis reseñas
                  </Link>
                </li>
                <hr className="bg-black" />
                <li>
                  <Link href={"/"}>
                    <CgLogOff className="text-base text-accent" /> Cerrar sesion
                  </Link>
                </li>
              </ul>
            </div>
            <Link
              className=" min-w-[80%] sm:min-w-[40%]"
              href={"/admin"}
            ></Link>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-vertical px-1">
              <li tabIndex={1}>
                <Link className="text-base" href={"/catalog/mi-cuenta"}>
                  <BsFillPersonLinesFill className="text-xl text-accent" /> Mis
                  datos Personales
                </Link>
              </li>
              <li tabIndex={1}>
                <Link className="text-base" href={"/catalog/mi-cuenta/pedidos"}>
                  <RiShoppingBasketFill className="text-xl text-accent" /> Mis
                  pedidos
                </Link>
              </li>
              <li tabIndex={1}>
                <Link
                  className="text-base"
                  href={"/catalog/mi-cuenta/resenias"}
                >
                  <MdRateReview className="text-xl text-accent" /> Mis reseñas
                </Link>
              </li>
              <hr className="bg-black" />
              <li tabIndex={1}>
                <Link className="text-base" href={"/"}>
                  <CgLogOff className="text-2xl text-accent" /> Cerrar sesion
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col justify-center md:justify-center items-center bg-base-100 w-[90%] mx-[5%] mb-[5%] md:w-[300%] md:mx-[0%] md:mr-[8%] md:my-[10vh] rounded-2xl border-2 border-neutral/30 drop-shadow-lg px-2 pt-2 pb-6 ">
          <h1 className="w-full font-bold ml-3 p-2">MIS RESEÑAS</h1>

          <div className="flex bg-base-200 flex-col md:flex-col md:justify-center w-full items-center rounded">
            <div className="flex flex-col md:flex-row justify-between w-full items-start mb-0 md:mb-0">
              <h1 className="ml-3 md:ml-6 mt-3 md:mt-3">
                <strong>Fecha: </strong> 23/Sep/2023 16:35
              </h1>
              <div className="rating ml-3 md:mr-6 md:mt-3">
                
                {[1, 2, 3, 4, 5].map((value) => (
                  <input
                    key={value}
                    type="radio"
                    name="rating-2"
                    className={`mask mask-star-2 ${
                      value <= ratingValue ? "mask mask-star-2 bg-orange-400" : "" }`}
                    onClick={() => handleRatingChange(value)}
                  />

                ))}
              </div>
            </div>

            <div className="flex flex-col md:flex-col justify-evenly w-full items-start mb-3 md:mb-3">
              <div className="flex flex-col md:flex-row justify-start w-full items-start md:mt-3">
                <h1 className="ml-3 md:ml-6 w-44">
                  <strong>Tu comentario: </strong>
                </h1>
                <textarea className="textarea textarea-bordered textarea-lg h-40 w-72 md:w-full max-w-full ml-3 md:mr-6 p-2"></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resenias;
