import { CgLogOff } from "react-icons/cg";
import { RiShoppingBasketFill } from "react-icons/ri";
import { MdRateReview } from "react-icons/md";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";
import axios from "axios";

async function MisPedidos({ userData }) {

  const resPedido = await axios.get(`/api/pedidos/${userData.id}`);
  const dataPedido = resPedido.data.pedidos;

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

        <div className="flex flex-col justify-start md:justify-start items-center bg-base-100 w-[90%] mx-[5%] mb-[5%] md:w-[300%] md:mx-[0%] mr-0 md:mr-[8%] md:my-[10vh] rounded-2xl border-2 border-neutral/30 drop-shadow-lg px-2 pt-2 pb-3 ">
          <h1 className="w-full font-bold ml-3 p-2">MIS PEDIDOS</h1>

          {Array.isArray(dataPedido) ? (
            dataPedido.map(
              ({ totalVenta, idTransaccion, fecha, id, detallePedido}) => {
                return (
                  <div key={id}>
                    <div
                      className="flex flex-col md:flex-row md:justify-between w-full items-center"
                    >
                      <div className="flex flex-col md:flex-row justify-start w-full items-start ml-6 md:ml-3 mb-3 md:mb-0">
                        <h1 className="md:mr-10">
                          <strong>Pedido No: </strong> {idTransaccion}
                        </h1>
                        <h1 className="md:mr-10">
                          <strong>Comprado el: </strong> {fecha}
                        </h1>
                        <h1 className="md:mr-10">
                          <strong>Total: </strong> ${totalVenta}
                        </h1>
                      </div>

                      <button className="flex justify-center items-center gap-x-2 first-letter:font-bold btn-accent bg-opacity-80 px-16 py-1 rounded w-60 md:mr-3  ">
                        Ver pedido
                      </button>
                    </div>

                    <div className="flex flex-col md:flex-row md:justify-between mt-1 mb-5">
                      {Array.isArray(detallePedido) ? (
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
                              <div
                                className="bg-base-100 shadow-xl border rounded-3xl border-slate900/10 my-3 md:m-4 w-80 md:w-40"
                                key={viandaId}
                              >
                                <div className="flex md:flex-col flex-row justify-start items-start">
                                  <div className="avatar">
                                    <div className="w-36 max-h-48 md:w-full rounded-3xl md:rounded-b-none">
                                      <img
                                        className="object-cover"
                                        src={viandaImagen}
                                      />
                                    </div>
                                  </div>

                                  <div className="flex flex-col justify-start items-start gap-1 p-1 ml-2 mr-2 w-full">
                                    <h1 className="font-bold leading-4 my-1">
                                      {viandaNombre}
                                    </h1>
                                    <h1>Precio: ${precio}</h1>
                                    <h1>Cantidad: {cantidad}</h1>
                                    <h1 className="badge my-2 bg-accent/50 rounded border-none">
                                      <strong>Total: </strong> ${total}
                                    </h1>
                                  </div>
                                </div>
                              </div>
                            );
                          }
                        )
                      ) : (
                        <p>No hay detalles disponibles</p>
                      )}
                    </div>
                  </div>
                );
              }
            )
          ) : (
            <p>No hay detalles disponibles</p>
          )}
        </div>
      </div>
    </>
  );
}

export default MisPedidos;
