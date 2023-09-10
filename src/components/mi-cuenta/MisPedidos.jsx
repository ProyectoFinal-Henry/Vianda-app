"use client";
import { CgLogOff } from "react-icons/cg";
import { RiShoppingBasketFill } from "react-icons/ri";
import { MdRateReview } from "react-icons/md";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";

function MisPedidos() {
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

        <div className="flex flex-col justify-center md:justify-start items-center bg-base-100 w-[90%] mx-[5%] mb-[5%] md:w-[300%] md:mx-[0%] md:mr-[8%] md:my-[10vh] rounded-2xl border-2 border-neutral/30 drop-shadow-lg px-2 pt-2 pb-6 ">
          <h1 className="w-full font-bold ml-3 p-2">MIS PEDIDOS</h1>

          <div className="flex flex-col md:flex-row md:justify-between w-full items-center">

            <div className="flex flex-col md:flex-row justify-start w-full items-center ml-3">
              <h1 className="mr-10" >Pedido No.: 877654</h1>
              <h1 className="mr-10" >Comprado el: 23/08/2023</h1>
              <h1 className="mr-10" >Total: $7.348</h1>
            </div>

            <button className="flex justify-center items-center gap-x-2 first-letter:font-bold btn-accent bg-opacity-80 px-16 py-1 rounded-md w-60 mr-3  ">
              Ver pedido
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MisPedidos;
