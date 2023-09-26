import { FaMapMarkerAlt, FaWhatsapp, FaHome } from "react-icons/fa";
import { AiTwotonePhone } from "react-icons/ai";
// import Modallisto from "./Modallisto"
import Link from "next/link";

const CardsPedidos = ({ pedidos }) => {
  return (
    <>
      {pedidos.length > 0 && (
        <div
          id="contenedorPrincipal"
          className="flex flex-col gap-4 items-center justify-center font-medium mt-2 px-2 "
        >
          {pedidos.map((ele) => {
            return (
              <div
                id="Datos"
                key={ele.id}
                className={`flex flex-col  gap-1 border-4 p-2 text-2xl font-bold    min-w-full min-h-full rounded-xl ${
                  ele.estado === "despachado"
                    ? "bg-[#FFACAC] border-[#FF0000] "
                    : "bg-[#8EFA8B] border-[#0F9903]"
                } `}
              >
                <div className="flex flex-row gap-2 font-bold items-center pb-2 mb-3">
                  <div className="bg-white max-w-full rounded  p-2 text-2xl font-extabold">
                    <div
                      id="direccion "
                      className="flex flex-col font-extabold  "
                    >
                      <p className="tracking-wide">Dirección:</p>
                      <p className="font-extrabold text-3xl ">
                        {ele.usuario.direccion}
                      </p>
                    </div>

                    <div id="cliente" className="flex flex-row gap-1 text-xl">
                      <p className="">Cliente:</p>
                      <p className=""> {ele.usuario.nombreCompleto}</p>
                    </div>
                    {ele.detallePedido.map((element, i) => (
                      <div key={i} className="flex flex-row gap-1 text-xl">
                        <p className="font-semibold">{element.cantidad}</p>
                        <p>
                          {element.viandaNombre.charAt(0).toUpperCase() +
                            element.viandaNombre.slice(1)}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div id="Pedido" className="flex flex-col items-center">
                    <p className="text-xl font-black">#PEDIDO:</p>
                    <p>{ele.id}</p>
                  </div>
                </div>

                <div className="flex flex-row justify-center items-center gap-2 p-1 h-14 pb-4 mb-3">
                  <Link
                    href={`https://api.whatsapp.com/send?phone=${ele.usuario.telefono}`}
                  >
                    <button
                      className="bg-white  py-2 px-3 rounded-lg transform transition-transform hover:scale-110 
                  "
                    >
                      <FaWhatsapp className="text-6xl  text-accent" />
                    </button>
                  </Link>
                  <Link href={`${ele.usuario.telefono}`}>
                    {" "}
                    <button
                      className="bg-white  py-2 px-3 rounded-lg transform transition-transform hover:scale-110 
                  "
                    >
                      <AiTwotonePhone className="text-6xl text text-slate-900" />
                    </button>
                  </Link>
                  <Link href="https://maps.google.com">
                    <button
                      className="bg-white  py-2 px-3 rounded-lg transition-all duration-200 ease-in-out transform hover:scale-110 
                  "
                    >
                      <FaMapMarkerAlt className="text-6xl text-red-700" />
                    </button>
                  </Link>
                  {/* <div className="py-2">
                    <Link
                      key={ele.id}
                      href={`/repartidor?modalentrega=${ele.id}`}
                    >
                      <button className="bg-white p-2 py-4 rounded  ">
                        <FaHome
                          className={`text-6xl bg ${
                            ele.estado === "despachado"
                              ? "text-[#FF0000] transform transition-transform hover:scale-110"
                              : "text-[#0F9903]"
                          }`}
                        />
                      </button>
                    </Link>
                  </div> */}
                  <div className="py-2">
                    {ele.estado === "despachado" ? (
                      <Link
                        key={ele.id}
                        href={`/repartidor?modalentrega=${ele.id}`}
                      >
                        <button className="bg-white p-2 py-4 rounded transform transition-transform hover:scale-110 ">
                          <FaHome className={`text-6xl bg text-[#FF0000] `} />
                        </button>
                      </Link>
                    ) : (
                      <div className="bg-white p-2 py-4 rounded  ">
                        <FaHome className={`text-6xl bg  text-[#0F9903]`} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};
export default CardsPedidos;
