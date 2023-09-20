"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

function PedidosCocina({ dataPedido }) {
  const fechaHoy = new Date().toLocaleDateString();

  const router = useRouter();
  const [filtro, setFiltro] = useState("todos"); // Inicialmente, muestra todos los pedidos

  // Función para actualizar el estado y agregar el parámetro "estado" a la URL
  const filtrarPorEstado = (estado) => {
    setFiltro(estado);
    // Actualiza la URL con el parámetro "estado"
    router.push(`/admin/cocina?estado=${estado}`);
  };

  useEffect(() => {
    const { estado } = router.query || {};
    if (estado) {
      setFiltro(estado);
    }
  }, [router.query]);

  // Filtra los pedidos según el estado seleccionado
  const pedidosFiltrados =
    filtro === "pagados"
      ? dataPedido.filter((pedido) => pedido.estado === "pagado")
      : filtro === "cocinados"
      ? dataPedido.filter((pedido) => pedido.estado === "cocinado")
      : dataPedido;

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
          onClick={() => filtrarPorEstado("cocinados")}
        >
          Cocinados
        </button>
      </div>

      <div className="flex flex-col md:flex-row items-start">
        <div className="flex flex-col w-full items-center justify-around ml-4 me-4">
          {pedidosFiltrados.map((pedido) => (
            <div
              className="flex flex-col justify-center md:justify-center items-center bg-base-100 bg-opacity-40 w-[100%] mx-5 my-5 rounded-2xl border-2 border-neutral/30 drop-shadow-lg px-2 pt-2"
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
                <button className="font-bold px-3 py-1 rounded md:mr-3 border-2 border-neutral/30 drop-shadow-lg">
                  Pedido Pagado
                </button>
              </div>
              <div className="flex flex-col md:flex-row md:justify-around mt-5 px-2">
                {pedido.detallePedido.map((detalle, index) => (
                  <div 
                  className=" shadow-xl border rounded-3xl border-slate900/10 my-6  w-10 md:w-48"key={index}>

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
                            <button>ESTADO</button>
                            
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
}

export default PedidosCocina;
