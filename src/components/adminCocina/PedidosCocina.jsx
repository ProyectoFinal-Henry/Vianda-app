"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const PedidosCocina = ({ dataPedido }) => {
  const fechaHoy = new Date().toLocaleDateString();
  const router = useRouter();
  const [filtro, setFiltro] = useState("todos"); // en principio muestra todos los pedidos
  const [detallesEstado, setDetallesEstado] = useState({}); // Estado para rastrear el estado de cada detalle del pedido, los uso en los colores de las viandas
  const [pedidoSeleccionado, setPedidoSeleccionado] = useState(null);

  
  useEffect(() => {
    const { estado } = router.query || {};
    if (estado) {
      setFiltro(estado);
    }
}, [router.query]);

//! Función para actualizar el estado y agregar el parámetro "estado" a la URL
const filtrarPorEstado = (estado) => {
  setFiltro(estado);
  router.push(`/admin/cocina?estado=${estado}`); // Actualiza la URL con el parámetro "estado"
};
  //! Filtra los pedidos según el estado seleccionado
  const pedidosFiltrados =
    filtro === "pagados"
      ? dataPedido.filter((pedido) => pedido.estado === "pagado")
      : filtro === "despachado"
      ? dataPedido.filter((pedido) => pedido.estado === "despachado")
      : dataPedido;

  //! Función para cambiar el estado de un detalle del pedido
  useEffect(() => {
    const inicializarEstadoDetalles = () => {
      const estadoInicial = {};
      dataPedido.forEach((pedido) => {
        pedido.detallePedido.forEach((detalle) => {
          const key = `${pedido.idTransaccion}-${detalle.viandaId}`;
          estadoInicial[key] = "pendiente";
        });
      });
      setDetallesEstado(estadoInicial);
    };

    inicializarEstadoDetalles();
  }, [dataPedido]);

  //! Función para cambiar el estado de las viandas del pedido
  const cambiarEstadoDetalle = (pedidoId, viandaId) => {
    setDetallesEstado((prevState) => {
      const key = `${pedidoId}-${viandaId}`;
      const nuevoEstado = { ...prevState };

      if (nuevoEstado[key] === "pendiente") {
        nuevoEstado[key] = "en proceso";
      } else if (nuevoEstado[key] === "en proceso") {
        nuevoEstado[key] = "cocinado";
      } else if (nuevoEstado[key] === "cocinado") {
        nuevoEstado[key] = "pendiente";
      } else {
        nuevoEstado[key] = "pendiente";
      }

      return nuevoEstado;
    });

    const pedido = dataPedido.find((pedido) => pedido.idTransaccion === pedidoId);
    if (pedido) {
      const viandasEstado = pedido.detallePedido.map(
        (detalle) => detallesEstado[`${pedidoId}-${detalle.viandaId}`]
      );
      if (!viandasEstado.includes("pendiente") && !viandasEstado.includes("en proceso")) {
        setPedidoSeleccionado(pedido);
      }
    }
  };

  const despacharPedido = () => {
    if (pedidoSeleccionado) {
      pedidoSeleccionado.estado = "despachado";
      setPedidoSeleccionado(null);
    }

  };

  //! Función para verificar el estado del pedido
  const verificarEstadoPedido = (pedidoId) => {
    const pedido = dataPedido.find(
      (pedido) => pedido.idTransaccion === pedidoId
    );

    if (!pedido) {
      return "cocinado"; // Si no se encuentra el pedido, se considera "cocinado" por defecto
    }

    const viandasEstado = pedido.detallePedido.map((detalle) => {
      return detallesEstado[`${pedidoId}-${detalle.viandaId}`];
    });

    if (viandasEstado.includes("pendiente")) {
      return "pendiente";
    } else if (viandasEstado.includes("en proceso")) {
      return "en proceso";
    } else {
      return "cocinado";
    }
  };



  console.log(pedidosFiltrados);

  return (
    <>
      <div className="flex justify-between items-center mx-10">
        <h1 className="font-bold ml-3 p-2">PEDIDOS POR ENTREGAR</h1>
        <h1 className="flex items-end"> {fechaHoy} </h1>
      </div>

      <div className="flex justify-center mt-3">
        <button
          className={`mr-4 bg-blue-500 text-white px-4 py-2 rounded ${
            filtro === "todos" ? "bg-blue-600" : ""
          }`}
          onClick={() => filtrarPorEstado("todos")}
        >
          Todos
        </button>
        <button
          className={`mr-4 bg-green-500 text-white px-4 py-2 rounded ${
            filtro === "pagados" ? "bg-green-600" : ""
          }`}
          onClick={() => filtrarPorEstado("pagados")}
        >
          Pagados
        </button>
        <button
          className={`bg-yellow-500 text-white px-4 py-2 rounded ${
            filtro === "cocinados" ? "bg-yellow-600" : ""
          }`}
          onClick={() => filtrarPorEstado("despachado")}
        >
          Despachados
        </button>
      </div>

      <div className="flex flex-col md:flex-row items-start">
        <div className="flex flex-col w-full items-center justify-around ml-4 me-4">
          {pedidosFiltrados.map((pedido) => (
            <div
              className={`flex flex-col justify-center md:justify-center items-center ${
                verificarEstadoPedido(pedido.idTransaccion) === "pendiente"
                  ? "bg-red-200"
                  : verificarEstadoPedido(pedido.idTransaccion) === "en proceso"
                  ? "bg-yellow-200"
                  : "bg-green-200"
              } w-[100%] mx-5 my-5 rounded-2xl border-2 border-neutral/30 drop-shadow-lg px-2 pt-2`}
              key={pedido.idTransaccion}
            >
              <div className="flex justify-around w-full items-start ml-6 md:ml-3 mb-4 md:mb-0 p-4 rounded-lg">
                <h1 className="md:mr-10">
                  <strong>Pedido No: </strong> {pedido.idTransaccion}
                </h1>
                <h1 className="md:mr-10">
                  <strong>Para: </strong>
                  {pedido.usuario.nombreCompleto}
                </h1>
                <h1 className="md:mr-10">
                  <strong>Comprado el: </strong> {pedido.fecha}
                </h1>
                <h1 className="md:mr-10">
                  <strong>Total: </strong> ${pedido.totalVenta}
                </h1>
<button
          className={`font-bold px-3 py-1 rounded md:mr-3 border-2 border-neutral/30 drop-shadow-lg ${
            pedidoSeleccionado ? "bg-green-500 text-white" : verificarEstadoPedido(pedido.idTransaccion) === "pendiente"
              ? "bg-red-500 text-white"
              : verificarEstadoPedido(pedido.idTransaccion) === "en proceso"
              ? "bg-yellow-500 text-white"
              : "bg-green-500 text-white"
          }`}
          onClick={() => {
            if (pedidoSeleccionado) {
              despacharPedido();
            } else if (verificarEstadoPedido(pedido.idTransaccion) === "cocinado") {
              if (window.confirm("¿Deseas despachar este pedido?")) {
                despacharPedido();
              }
            }
          }}
        >
          Pedido {pedidoSeleccionado ? "Despachado" : verificarEstadoPedido(pedido.idTransaccion) === "pendiente" ? "Pendiente" : verificarEstadoPedido(pedido.idTransaccion) === "en proceso" ? "En Proceso" : "Cocinado"}
        </button>
              </div>
              <div className="flex flex-col md:flex-row md:justify-around mt-5 px-2">
                {pedido.detallePedido.map((detalle, index) => (
                  <div
                    className=" shadow-xl border rounded-3xl border-slate900/10 my-6  w-10 md:w-48 bg-zinc-50"
                    key={index}
                  >
                    <div className="flex md:flex-col flex-row justify-center items-center">
                      <div className="avatar">
                        <div className="w-36 max-h-48 md:w-full md:rounded-b-none rounded-xl">
                          <img
                            className="object-cover"
                            src={detalle.viandaImagen}
                          />
                        </div>
                      </div>

                      <div className="flex flex-col justify-center items-center gap-1 p-1 ml-2 mr-2 w-full">
                        <h1 className="font-bold leading-4 my-1">
                          {" "}
                          {detalle.viandaNombre}{" "}
                        </h1>
                        <h1>Cantidad: {detalle.cantidad}</h1>
                        <button
                          className={`flex justify-center items-center px-6 py-5 font-bold rounded m-auto mt-5 border-2 border-neutral/30 drop-shadow-lg ${
                            detallesEstado[
                              `${pedido.idTransaccion}-${detalle.viandaId}`
                            ] === "pendiente"
                              ? "bg-red-500 text-white"
                              : detallesEstado[
                                  `${pedido.idTransaccion}-${detalle.viandaId}`
                                ] === "en proceso"
                              ? "bg-yellow-500 text-white"
                              : "bg-green-500 text-white"
                          }`}
                          onClick={() =>
                            cambiarEstadoDetalle(
                              pedido.idTransaccion,
                              detalle.viandaId
                            )
                          }
                        >
                          {
                            detallesEstado[
                              `${pedido.idTransaccion}-${detalle.viandaId}`
                            ]
                          }
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PedidosCocina;
