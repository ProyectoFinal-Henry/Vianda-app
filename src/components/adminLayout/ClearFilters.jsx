"use client";
import { LuFilterX } from "react-icons/lu";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const ClearFilters = ({
  setInputNombre,
  setInputDescripcion,
  setInputIngredientes,
  setInputEstado,
  setInputMetodoPago,
  setInputNombreCliente,
  setInputFecha,
  setInputUsuario,
  setInputEmail,
  setInputDNI,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const search = searchParams.get("search");
  const descripcion = searchParams.get("descripcion");
  const ing1 = searchParams.get("ing1");
  const ing2 = searchParams.get("ing2");
  const ing3 = searchParams.get("ing3");
  const nombre = searchParams.get("nombre");
  const estado = searchParams.get("estado");
  const metodo = searchParams.get("metodo");
  const fecha = searchParams.get("fecha");
  const usuario = searchParams.get("usuario");
  const email = searchParams.get("email");
  const dni = searchParams.get("dni");

  const cleanInputs = () => {
    if (search || descripcion || ing1 || ing2 || ing3) {
      setInputNombre("");
      setInputDescripcion("");
      setInputIngredientes("");
      router.push("/admin/viandas");
    }
    if (nombre || estado || metodo || fecha) {
      setInputNombreCliente("");
      setInputEstado("");
      setInputFecha("");
      setInputMetodoPago("");
      router.push("/admin/pedidos");
    }
    if (usuario || email || dni) {
      setInputEmail("");
      setInputUsuario("");
      setInputDNI("");
      router.push("/admin/usuarios");
    }
  };

  return (
    <div className="mx-auto">
      {(search ||
        descripcion ||
        ing1 ||
        ing2 ||
        ing3 ||
        nombre ||
        estado ||
        metodo ||
        fecha ||
        email ||
        dni ||
        usuario) && (
        <button className=" btn btn-warning btn-sm" onClick={cleanInputs}>
          <LuFilterX className="text-xl text-white" />
        </button>
      )}
    </div>
  );
};

export default ClearFilters;
