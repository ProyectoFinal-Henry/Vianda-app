"use client";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { useEffect, useState } from "react";
import { CgLogOff } from "react-icons/cg";
import { RiShoppingBasketFill } from "react-icons/ri";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";
import axios from "axios";
import LoadingComponentApp from "@/app/loading";
import Image from "next/image";
import { UserAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

function Pedidos({ tokenData }) {
  const { googleLogout } = UserAuth();
  const [dataPedido, setDataPedido] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (tokenData) {
      setTimeout(async () => {
        try {
          const resPedido = await axios.get(`/api/pedidos/${tokenData.id}`);
          const dataPedido = resPedido.data.pedidos;
          // console.log(dataPedido);
          setDataPedido(dataPedido);
          if (resPedido) {
            setIsLoading(false);
          }
        } catch (error) {
          console.error("Se produjo un error al realizar la solicitud HTTP");
          setIsLoading(false);
        }
      }, 10);
    }
  }, [tokenData]);

  const handleGoogleLogout = async () => {
    try {
      const response = await axios.post("/api/auth/logout");
      if (response.status === 200) await googleLogout();
      router.push("/catalog/login");
      router.refresh();
    } catch (error) {
      await googleLogout();
    }
  };

  return (
    <>
      {isLoading ? (
        <div className="min-h-screen">
          <LoadingComponentApp />
        </div>
      ) : (
        <div className="flex flex-col md:flex-row items-start">
          <div
            id="NavAdmin"
            className="navbar text-black z-10 text-lg md:mx-[4vw] md:my-[10vh]"
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
                      <BsFillPersonLinesFill className="text-accent" /> Mis
                      Datos Personales
                    </Link>
                  </li>
                  <li>
                    <Link href={"/catalog/mi-cuenta/pedidos"}>
                      <RiShoppingBasketFill className="text-accent" /> Mis
                      Pedidos
                    </Link>
                  </li>
                  {/* <hr className="bg-black" /> */}
                  <li>
                    <Link href={"/catalog"}>
                      <AiFillHome className="text-sm text-accent" /> Volver al
                      inicio
                    </Link>
                  </li>
                  <li>
                    <button onClick={handleGoogleLogout}>
                      <CgLogOff className="text-base text-accent" /> Cerrar
                      Sesión
                    </button>
                  </li>
                </ul>
              </div>
              <Link
                className=" min-w-[80%] sm:min-w-[40%]"
                href={"/admin"}
              ></Link>
            </div>

            <div className="navbar-center hidden md:flex">
              <ul className="menu menu-vertical px-1">
                <li tabIndex={1}>
                  <Link className="text-base" href={"/catalog/mi-cuenta"}>
                    <BsFillPersonLinesFill className="text-xl text-accent" />{" "}
                    Mis Datos Personales
                  </Link>
                </li>
                <li tabIndex={1}>
                  <Link
                    className="text-base"
                    href={"/catalog/mi-cuenta/pedidos"}
                  >
                    <RiShoppingBasketFill className="text-xl text-accent" /> Mis
                    Pedidos
                  </Link>
                </li>
                {/* <hr className="bg-black" /> */}
                <li tabIndex={1}>
                  <Link className="text-base" href={"/catalog"}>
                    <AiFillHome className="text-xl text-accent" /> Volver al
                    inicio
                  </Link>
                </li>
                <li tabIndex={1}>
                  <button onClick={handleGoogleLogout} className="text-base">
                    <CgLogOff className="text-2xl text-accent" /> Cerrar Sesión
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col justify-start md:justify-start items-center bg-base-100 w-[90%] mx-[5%] mb-[5%] md:w-[300%] md:mx-[4%] md:mr-[5%] lg:ml-0 md:my-[10vh] rounded-2xl border-2 border-neutral/30 drop-shadow-lg px-2 pt-2 pb-3 ">
            <h1 className="w-full font-bold ml-3 p-2">MIS PEDIDOS</h1>

            {dataPedido ? (
              dataPedido.map(
                ({
                  totalVenta,
                  idTransaccion,
                  fecha,
                  id,
                  metodoPago,
                  detallePedido,
                  estado,
                }) => {
                  return (
                    <div key={id}>
                      <div className="flex bg-base-200 flex-row md:justify-between md:w-[70vw] rounded ">
                        <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-evenly md:w-[100%] items-start ml-6 mt-3 md:ml-0 mb-3 md:mb-0 md:mt-0">
                          <div className="flex md:flex-col justify-center items-center">
                            <h1 className="mr-2 md:mr-0">
                              <strong>Pedido No. </strong>
                            </h1>
                            <h1>{idTransaccion}</h1>
                          </div>

                          <div className="flex md:flex-col justify-center items-center">
                            <h1 className="mr-2 md:mr-0">
                              <strong>Fecha de compra </strong>
                            </h1>
                            <h1>{fecha.slice(0, 10)}</h1>
                          </div>

                          <div className="flex md:flex-col justify-center items-center">
                            <h1 className="mr-2 md:mr-0">
                              <strong>Total compra </strong>
                            </h1>
                            <h1>${parseFloat(totalVenta).toFixed(2)}</h1>
                          </div>

                          <div className="flex md:flex-col justify-center items-center">
                            <h1 className="mr-2 md:mr-0">
                              <strong>Metodo de pago </strong>
                            </h1>
                            <h1>{metodoPago}</h1>
                          </div>

                          <div className="flex md:flex-col justify-center items-center">
                            <h1 className="mr-2 md:mr-0">
                              <strong>Estado </strong>
                            </h1>
                            <h1
                              className={
                                estado === "entregado"
                                  ? "badge badge-accent text-lg py-3"
                                  : "badge badge-warning text-lg py-3"
                              }
                            >
                              {estado}
                            </h1>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row md:flex-wrap min-[1333px]:flex-nowrap md:justify-around md:items-stretch mt-1 mb-5">
                        {detallePedido ? (
                          detallePedido.map(
                            ({
                              viandaId,
                              viandaImagen,
                              viandaNombre,
                              precio,
                              cantidad,
                              total,
                            }) => {
                              return (
                                <Link
                                  href={`/catalog/mi-cuenta/pedidos?modal=${viandaId}`}
                                  key={viandaId}
                                  className="transform transition-transform hover:scale-105"
                                  scroll={false}
                                >
                                  <div
                                    className="md:items-stretch bg-base-100 shadow-xl border rounded-3xl border-slate900/10 my-3 md:m-4 w-80 md:w-40"
                                    key={viandaId}
                                  >
                                    <div className="flex md:flex-col flex-row justify-start items-start">
                                      <div className="avatar">
                                        <div className="w-36 max-h-48 md:w-full rounded-3xl md:rounded-b-none">
                                          <Image
                                            width={200}
                                            height={200}
                                            alt="imagen de la vianda"
                                            className="object-cover"
                                            src={viandaImagen}
                                          />
                                        </div>
                                      </div>

                                      <div className="flex flex-col justify-start items-start gap-1 p-1 ml-2 mr-2 w-full">
                                        <h1 className="font-bold leading-4 my-1 w-36 md:h-9">
                                          {viandaNombre}
                                        </h1>
                                        <h1>
                                          <strong>
                                            ${parseFloat(precio).toFixed(2)}
                                          </strong>
                                        </h1>
                                        <h1>Cantidad: {cantidad}</h1>
                                        <h1 className="flex justify-center badge-lg my-2 bg-accent/50 rounded border-none">
                                          Total: ${parseFloat(total).toFixed(2)}
                                        </h1>
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                              );
                            }
                          )
                        ) : (
                          <p>Sin datos</p>
                        )}
                      </div>
                      <hr className="bg-neutral/30 mb-7 mt-0 h-0.5" />
                    </div>
                  );
                }
              )
            ) : (
              <p>Sin datos para mostrar</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Pedidos;
