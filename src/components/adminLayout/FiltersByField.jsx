"use client";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import ClearFilters from "./ClearFilters";
function FiltersByField() {
  const [inputNombre, setInputNombre] = useState("");
  const [inputDescripcion, setInputDescripcion] = useState("");
  const [inputIngredientes, setInputIngredientes] = useState("");
  const [loader, setLoader] = useState("off");
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    if (name === "nombre") setInputNombre(value);
    if (name === "descripcion") setInputDescripcion(value);
    if (name === "ingredientes") setInputIngredientes(value);
  };
  const ingredientes = inputIngredientes.split(",");

  const handleSubmit = (event) => {
    event.preventDefault();
    const ing1 = ingredientes[0];
    const ing2 = ingredientes[1];
    const ing3 = ingredientes[2];

    const params = new URLSearchParams(searchParams);
    if (inputNombre) {
      params.set("search", inputNombre);
    } else {
      params.delete("search");
    }
    if (inputDescripcion) {
      params.set("descripcion", inputDescripcion);
    } else {
      params.delete("descripcion");
    }
    if (ing1 && !ing2 && !ing3) {
      params.set("ing1", ing1);
      params.delete("ing2");
      params.delete("ing3");
    } else if (ing1 && ing2 && !ing3) {
      params.set("ing1", ing1);
      params.set("ing2", ing2);
      params.delete("ing3", ing3);
    } else if (ing1 && ing2 && ing3) {
      params.set("ing1", ing1);
      params.set("ing2", ing2);
      params.set("ing3", ing3);
    } else {
      params.delete("ing1");
      params.delete("ing2");
      params.delete("ing3");
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
            <input
              className="input input-xs input-accent"
              type="text"
              onChange={handleChange}
              value={inputNombre}
              placeholder="pollo, haburguesa..."
              name="nombre"
            />
          </form>
        </td>
        <td></td>
        <td>
          <form onSubmit={handleSubmit}>
            <input
              className="input input-xs input-accent"
              type="text"
              onChange={handleChange}
              value={inputDescripcion}
              placeholder="arroz con pollo..."
              name="descripcion"
            />
          </form>
        </td>
        <td>
          <form onSubmit={handleSubmit}>
            <input
              className="input input-xs input-accent"
              type="text"
              onChange={handleChange}
              value={inputIngredientes}
              placeholder="arroz,huevo,tomate..."
              name="ingredientes"
            />
          </form>
        </td>
        <td></td>
        <td></td>
        <td>
          <ClearFilters
            setInputDescripcion={setInputDescripcion}
            setInputIngredientes={setInputIngredientes}
            setInputNombre={setInputNombre}
          />
        </td>
      </tr>
    </>
  );
}

export default FiltersByField;
