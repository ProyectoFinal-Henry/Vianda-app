"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const PedidosCocina = ({ dataPedido }) => {
  const fechaHoy = new Date()
  const opcionesFecha = {
    weekday: 'long', // Nombre completo del día de la semana.
    year: 'numeric',
    month: 'long', // Nombre completo del mes.
    day: 'numeric',
  };
  const fechaConNombre = fechaHoy.toLocaleDateString('es-ES', opcionesFecha);
  const fechaFormateada = fechaConNombre.charAt(0).toUpperCase() + fechaConNombre.slice(1);




  const router = useRouter();
  const [filtro, setFiltro] = useState("todos");
  const [detallesEstado, setDetallesEstado] = useState({});
  const [pedidoSeleccionado, setPedidoSeleccionado] = useState(null);
  const [estadisticas, setEstadisticas] = useState({
    totalPedidos: 0,
    pedidosPagados: 0,
    pedidosCocinados: 0,
  });

  useEffect(() => {
    const { estado } = router.query || {};
    if (estado) {
      setFiltro(estado);
    }
  }, [router.query]);

  const filtrarPorEstado = (estado) => {
    setFiltro(estado)
    router.push(`/cocina?estado=${estado}`)
  }

  const pedidosFiltrados =
    filtro === "pagados"
      ? dataPedido.filter((pedido) => pedido.estado === "pagado")
      : filtro === "despachado"
      ? dataPedido.filter((pedido) => pedido.estado === "despachado")
      : dataPedido;

  useEffect(() => {
    const inicializarEstadoDetalles = () => {
      const estadoInicial = {};
      dataPedido.forEach((pedido) => {
        pedido.detallePedido.forEach((detalle) => {
          const key = `${pedido.id}-${detalle.viandaId}`;
          estadoInicial[key] = "pendiente";
        });
      });
      setDetallesEstado(estadoInicial);
    };

    inicializarEstadoDetalles();
  }, [dataPedido]);

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

    const pedido = dataPedido.find((pedido) => pedido.id === pedidoId);
    if (pedido) {
      const viandasEstado = pedido.detallePedido.map(
        (detalle) => detallesEstado[`${pedidoId}-${detalle.viandaId}`]
      );
      if (
        !viandasEstado.includes("pendiente") &&
        !viandasEstado.includes("en proceso")
      ) {
        setPedidoSeleccionado(pedido);
      }
    }
  };

  const verificarEstadoPedido = (pedidoId) => {
    const pedido = dataPedido.find((pedido) => pedido.id === pedidoId);

    if (!pedido) {
      return "cocinado";
    }

    const viandasEstado = pedido.detallePedido.map((detalle) => {
      return detallesEstado[`${pedidoId}-${detalle.viandaId}`];
    });

    if (filtro === "despachado") {
      return "cocinado";
    }

    if (viandasEstado.includes("pendiente")) {
      return "pendiente";
    } else if (viandasEstado.includes("en proceso")) {
      return "en proceso";
    } else {
      return "cocinado";
    }
  };

  const despacharPedido = async (idPedido, estado) => {
    try {
      const resultado = await axios.put(`/api/pedidos/`, { idPedido, estado });
      if (resultado.status === 200) {
        calcularEstadisticas();
        alert('Pedido despachado con éxito.')
        window.location.reload();
      } else {
        alert('Error al despachar el pedido.');
      }
    } catch (error) {
      console.error('Error al despachar el pedido:', error);
    }
  };

  const calcularEstadisticas = () => {
    const totalPedidos = dataPedido.length;
    const pedidosPagados = dataPedido.filter(
      (pedido) => pedido.estado === "pagado"
    ).length;
    const pedidosCocinados = dataPedido.filter(
      (pedido) => pedido.estado === "despachado"
    ).length;

    setEstadisticas({
      totalPedidos,
      pedidosPagados,
      pedidosCocinados,
    });
  };
useEffect(() => {
  const calcularYActualizarEstadisticas = async () => {
    const totalPedidos = dataPedido.length;
    const pedidosPagados = dataPedido.filter(
      (pedido) => pedido.estado === "pagado"
    ).length;
    const pedidosCocinados = dataPedido.filter(
      (pedido) => pedido.estado === "despachado"
    ).length;

    setEstadisticas({
      totalPedidos,
      pedidosPagados,
      pedidosCocinados,
    });
  };

  calcularYActualizarEstadisticas();
}, [filtro, dataPedido]);

  return (
    <>
      <div className="flex justify-between items-center mx-10">
        <h1 className="font-bold ml-3 p-2">PEDIDOS POR ENTREGAR</h1>
        <h1 className="flex items-end font-bold"> {fechaFormateada} </h1>
      </div>

      <div className="flex justify-start bg-yellow-300 border-2 border-red-500">
        <p className="mx-7">Pedidos Pagados: {estadisticas.pedidosPagados}</p>
        <p className="mr-7">
          Pedidos Cocinados/Despachados: {estadisticas.pedidosCocinados}
        </p>
      </div>

      <div className="flex justify-center mt-3">
        <button
          className={`mr-4 bg-yellow-500 text-white px-4 py-2 rounded ${
            filtro === "pagados" ? "bg-yellow-600" : ""
          }`}
          onClick={() => filtrarPorEstado("pagados")}
        >
          Pagados
        </button>
        <button
          className={`bg-green-500 text-white px-4 py-2 rounded ${
            filtro === "cocinados" ? "bg-green-600" : ""
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
                filtro === "despachado"
                  ? "bg-green-200"
                  : verificarEstadoPedido(pedido.id) === "pendiente"
                  ? "bg-red-200"
                  : verificarEstadoPedido(pedido.id) === "en proceso"
                  ? "bg-yellow-200"
                  : "bg-green-200"
              } w-[100%] mx-5 my-5 rounded-2xl border-2 border-neutral/30 drop-shadow-lg px-2 pt-2`}
              key={pedido.id}
            >
              <div className="flex justify-around w-full items-start ml-6 md:ml-3 mb-4 md:mb-0 p-4 rounded-lg">
                <h1 className="md:mr-10">
                  <strong>Pedido No: </strong> {pedido.id}
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
                    filtro === "despachado" &&
                    verificarEstadoPedido(pedido.id) === "cocinado"
                      ? "bg-green-500 text-white"
                      : filtro !== "despachado" &&
                        verificarEstadoPedido(pedido.id) === "cocinado"
                      ? "bg-green-500 text-white"
                      : "bg-gray-300 text-gray-600 cursor-not-allowed"
                  }`}
                  onClick={() => {
                    const idPedido = pedido.id;
                    const estado = "despachado";

                    if (
                      verificarEstadoPedido(idPedido) === "cocinado" &&
                      window.confirm("¿Deseas despachar este pedido?")
                    ) {
                      despacharPedido(idPedido, estado);
                    }
                  }}
                >
                  Pedido{" "}
                  {verificarEstadoPedido(pedido.id) === "cocinado"
                    ? "Despachado"
                    : verificarEstadoPedido(pedido.id) === "pendiente"
                    ? "Pendiente"
                    : verificarEstadoPedido(pedido.id) === "en proceso"
                    ? "En Proceso"
                    : "Cocinado"}
                </button>
              </div>
              <div className="flex flex-col md:flex-row md:justify-around mt-5 px-3">
                {pedido.detallePedido.map((detalle, index) => (
                  <div
                    className="mr-6 shadow-xl border rounded-3xl border-slate900/10 my-6  w-10 md:w-48 bg-base-100"
                    key={index}
                  >
                    <div className="flex md:flex-col flex-row items-center">
                      <div className="avatar">
                        <div className="w-36 max-h-48 md:w-full md:rounded-b-none rounded-xl">
                          <img
                            className="object-cover"
                            src={detalle.viandaImagen}
                          />
                        </div>
                      </div>

                      <div className="flex flex-col justify-center items-center gap-1 p-1 ml-2 mr-2 w-full">
                        <h1 className="font-bold leading-4 my-1 text-center line-clamp-2 min-h-[3rem]">
                          {" "}
                          {detalle.viandaNombre}{" "}
                        </h1>
                        <h1>Cantidad: {detalle.cantidad}</h1>
                        <div>
                        <button
                          className={`flex justify-center items-center px-6 py-5 font-bold rounded m-auto mt-5 border-2 border-neutral/30 drop-shadow-lg ${
                            filtro === "despachado"
                              ? "bg-green-500 text-white"
                              : detallesEstado[
                                  `${pedido.id}-${detalle.viandaId}`
                                ] === "pendiente"
                              ? "bg-red-500 text-white"
                              : detallesEstado[
                                  `${pedido.id}-${detalle.viandaId}`
                                ] === "en proceso"
                              ? "bg-yellow-500 text-white"
                              : "bg-green-500 text-white"
                          }`}
                          onClick={() =>
                            cambiarEstadoDetalle(pedido.id, detalle.viandaId)
                          }
                        >
                          {filtro === "despachado"
                            ? "Cocinado"
                            : detallesEstado[
                                `${pedido.id}-${detalle.viandaId}`
                              ]}
                        </button>

                        </div>

                        
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
