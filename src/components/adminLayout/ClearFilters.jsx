"use client";
import { LuFilterX } from "react-icons/lu";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const ClearFilters = ({
  setInputNombre,
  setInputDescripcion,
  setInputIngredientes,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const search = searchParams.get("search");
  const descripcion = searchParams.get("descripcion");
  const ing1 = searchParams.get("ing1");
  const ing2 = searchParams.get("ing2");
  const ing3 = searchParams.get("ing3");

  const cleanInputs = () => {
    setInputNombre("");
    setInputDescripcion("");
    setInputIngredientes("");
    router.push("/admin/viandas");
  };

  return (
    <div className="mx-auto">
      {(search || descripcion || ing1 || ing2 || ing3) && (
        <button className=" btn btn-warning btn-sm" onClick={cleanInputs}>
          <LuFilterX className="text-xl text-white" />
        </button>
      )}
    </div>
  );
};

export default ClearFilters;
