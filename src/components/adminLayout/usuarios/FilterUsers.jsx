"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import ClearFilters from "../ClearFilters";

function FilterUsers() {
  const [InputUsuario, setInputUsuario] = useState("");
  const [InputEmail, setInputEmail] = useState("");
  const [InputDNI, setInputDNI] = useState("");

  const router = useRouter();
  const searchParams = useSearchParams();

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    if (name === "usuario") setInputUsuario(value);
    if (name === "email") setInputEmail(value);
    if (name === "dni") setInputDNI(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const params = new URLSearchParams(searchParams);
    if (InputUsuario) {
      params.set("usuario", InputUsuario);
    } else {
      params.delete("usuario");
    }
    if (InputEmail) {
      params.set("email", InputEmail);
    } else {
      params.delete("email");
    }
    if (InputDNI) {
      params.set("dni", InputDNI);
    } else {
      params.delete("dni");
    }

    const queryString = params.toString();
    router.push("?" + queryString);
  };

  return (
    <>
      <tr>
        <td colSpan={2} className="b font-bold text-center">
          Buscar
        </td>
        <td>
          <form onSubmit={handleSubmit}>
            <input
              className="input input-xs input-accent"
              type="text"
              onChange={handleChange}
              value={InputUsuario}
              placeholder="Carlos Fernandez..."
              name="usuario"
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
              value={InputEmail}
              placeholder="ejemplo@correo.com"
              name="email"
            />
          </form>
        </td>
        <td>
          <form onSubmit={handleSubmit}>
            <input
              className="input input-xs input-accent max-w-[100px]"
              type="text"
              onChange={handleChange}
              value={InputDNI}
              placeholder="4569871236"
              name="dni"
            />
          </form>
        </td>

        <td></td>
        <td></td>
        <td>
          <ClearFilters
            setInputUsuario={setInputUsuario}
            setInputDNI={setInputDNI}
            setInputEmail={setInputEmail}
          />
        </td>
      </tr>
    </>
  );
}

export default FilterUsers;
