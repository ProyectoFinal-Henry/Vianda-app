"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FcOk } from "react-icons/fc";
import ClearFilters from "../ClearFilters";

function FiltersPedidos() {
  const [inputNombreCliente, setInputNombreCliente] = useState("");
  const [inputEstado, setInputEstado] = useState("");
  const [InputMetodoPago, setInputMetodoPago] = useState("");
  const [InputFecha, setInputFecha] = useState("");
  const [loader, setLoader] = useState("off");
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    if (name === "nombre") setInputNombreCliente(value);
    if (name === "estado") setInputEstado(value);
    if (name === "metodoPago") setInputMetodoPago(value);
    if (name === "fecha") {
      setInputFecha(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new URLSearchParams(searchParams);
    if (inputNombreCliente) {
      params.set("nombre", inputNombreCliente);
    } else {
      params.delete("nombre");
    }
    if (inputEstado) {
      params.set("estado", inputEstado);
    } else {
      params.delete("estado");
    }
    if (InputMetodoPago) {
      params.set("metodo", InputMetodoPago);
    } else {
      params.delete("metodo");
    }
    if (InputFecha) {
      params.set("fecha", InputFecha);
    } else {
      params.delete("fecha");
    }
    setLoader("on");
    setTimeout(() => {
      setLoader("off");
    }, 1400);
    const queryString = params.toString();
    router.push("?" + queryString);
  };

  return (
    <>
      <tr>
        <td className="b font-bold text-center">Filtros</td>
        <td>
          <form onSubmit={handleSubmit}>
            <div className="mx-auto mb-1 px-1 relative">
              {loader === "on" && inputNombreCliente ? (
                <div className="flex flex-row justify-center items-center success w-[95%] bg-base-100 absolute left-0 rounded-lg mx-1 mr-8 h-6 ">
                  <span className="loading loading-infinity loading-lg min-w-[45px] text-accent  z-50"></span>
                </div>
              ) : null}
              <input
                className="input input-xs input-accent"
                type="text"
                onChange={handleChange}
                placeholder="Francisco, David, Luciana..."
                value={inputNombreCliente}
                name="nombre"
              />
            </div>
          </form>
        </td>
        <td>
          <form onSubmit={handleSubmit}>
            <div className="mx-auto mb-1 px-1 relative">
              {loader === "on" && inputEstado ? (
                <div className="flex flex-row justify-center items-center success w-[95%] bg-base-100 absolute left-0 rounded-lg mx-1 mr-8 h-6 ">
                  <span className="loading loading-infinity loading-lg min-w-[45px] text-accent  z-50"></span>
                </div>
              ) : null}
              <input
                className="input input-xs input-accent"
                type="text"
                onChange={handleChange}
                value={inputEstado}
                placeholder="Pendiente, pagado, despachado..."
                name="estado"
              />
            </div>
          </form>
        </td>
        <td>
          <form onSubmit={handleSubmit}>
            <div className="mx-auto mb-1 px-1 relative">
              {loader === "on" && InputMetodoPago ? (
                <div className="flex flex-row justify-center items-center success w-[95%] bg-base-100 absolute left-0 rounded-lg mx-1 mr-8 h-6 ">
                  <span className="loading loading-infinity loading-lg min-w-[45px] text-accent  z-50"></span>
                </div>
              ) : null}
              <input
                className="input input-xs input-accent"
                type="text"
                onChange={handleChange}
                value={InputMetodoPago}
                placeholder="Tarjeta credito, tarjeta debito..."
                name="metodoPago"
              />
            </div>
          </form>
        </td>
        <td>
          <form onSubmit={handleSubmit}>
            <div className="mx-auto mb-1 px-1 relative">
              {loader === "on" && InputFecha ? (
                <div className="flex flex-row justify-center items-center success w-[95%] bg-base-100 absolute left-0 rounded-lg mx-1 mr-8 h-6 ">
                  <span className="loading loading-infinity loading-lg min-w-[45px] text-accent  z-50"></span>
                </div>
              ) : null}
              <input
                className="input input-xs input-accent"
                type="text"
                onChange={handleChange}
                //   value={InputFecha}
                placeholder="dd/mm/aaaa"
                name="fecha"
              />
            </div>
          </form>
        </td>
        <td></td>
        <td></td>
        <td>
          <ClearFilters
            setInputEstado={setInputEstado}
            setInputMetodoPago={setInputMetodoPago}
            setInputNombreCliente={setInputNombreCliente}
            setInputFecha={setInputFecha}
          />
        </td>
      </tr>
    </>
  );
}

export default FiltersPedidos;
