"use client";
import { CgLogOff } from "react-icons/cg";
import { RiShoppingBasketFill } from "react-icons/ri";
import { MdRateReview } from "react-icons/md";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";

function MisPedidos({ dataDetalle, dataPedido }) {

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
              <h1 className="mr-10">{`Pedido No.: ${dataPedido.idTransaccion}`}</h1>
              <h1 className="mr-10">{`Comprado el: ${dataPedido.fecha}`}</h1>
              <h1 className="mr-10">{`Total: $${dataPedido.totalVenta}`}</h1>
            </div>

            <button className="flex justify-center items-center gap-x-2 first-letter:font-bold btn-accent bg-opacity-80 px-16 py-1 rounded-md w-60 mr-3  ">
              Ver pedido
            </button>
          </div>

          <div className="flex flex-row justify-between items-start m-3">


          {Array.isArray(dataDetalle) ? (
            dataDetalle.map(({viandaId, viandaImagen, viandaNombre, precio, cantidad, total}) => {
              return (
                <div
                  className="flex flex-row justify- items-center m-6 w-auto"
                  key={viandaId}
                >
                  <div className="flex flex-col justify-center items-center w-auto">
                    
                    <div className="flex flex-col w-[50%] md:w-[100%] max-w-[250px] bg-base-100 shadow-xl my-3 border rounded-3xl border-slate900/10 md:max-w-[130px]">
                      <div className="flex flex-col justify-start items-start">
                        <div className="avatar max-h-36">
                          <div
                            className="w-full rounded-t-3xl"
                          >
                            <img
                              className="object-cover"
                              src={viandaImagen}
                            />
                          </div>
                        </div>
  
                        <div className="flex flex-col justify-start items-start gap-1 p-1 ml-2 ">
                          <h1 className="font-bold leading-4 my-1">
                            {viandaNombre}
                          </h1>
                          <h1>Precio: {precio}</h1>
                          <h1>Cantidad: {cantidad}</h1>
                          <span className="badge my-2 bg-accent/50 rounded border-none">
                            Total: {total}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            } )
            ) : (
              <p>No hay detalles disponibles</p>
              )}
              </div>
        </div>
      </div>
    </>
  );
}

export default MisPedidos;
