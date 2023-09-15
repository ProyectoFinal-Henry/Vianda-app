"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import ClearFilters from "../ClearFilters";

function FiltersPedidos() {
  const [inputNombreCliente, setInputNombreCliente] = useState("");
  const [inputEstado, setInputEstado] = useState("");
  const [InputMetodoPago, setInputMetodoPago] = useState("");
  const [InputFecha, setInputFecha] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    console.log(value);
    if (name === "nombre") setInputNombreCliente(value);
    if (name === "estado") setInputEstado(value);
    if (name === "metodoPago") setInputMetodoPago(value);
    if (name === "fecha") {
      setInputFecha(value);
    }
  };
  console.log(InputFecha);

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

    const queryString = params.toString();
    router.push("?" + queryString);
  };

  return (
    <>
      <tr>
        <td className="b font-bold text-center">Filtros</td>
        <td>
          <form onSubmit={handleSubmit}>
            <input
              className="input input-xs input-accent"
              type="text"
              onChange={handleChange}
              value={inputNombreCliente}
              name="nombre"
            />
          </form>
        </td>
        <td>
          <form onSubmit={handleSubmit}>
            <input
              className="input input-xs input-accent"
              type="text"
              onChange={handleChange}
              value={inputEstado}
              name="estado"
            />
          </form>
        </td>
        <td>
          <form onSubmit={handleSubmit}>
            <input
              className="input input-xs input-accent"
              type="text"
              onChange={handleChange}
              value={InputMetodoPago}
              name="metodoPago"
            />
          </form>
        </td>
        <td>
          <form onSubmit={handleSubmit}>
            <input
              className="input input-xs input-accent"
              type="text"
              onChange={handleChange}
              //   value={InputFecha}
              name="fecha"
            />
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
