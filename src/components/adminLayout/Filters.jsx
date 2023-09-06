"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

const Filters = () => {
  const searchParams = useSearchParams();
  const toggleFilter = (filterName) => {
    const params = new URLSearchParams(searchParams);

    if (params.get("tipo") === filterName) {
      params.delete("tipo");
    } else {
      params.set("tipo", filterName);
    }

    const queryString = params.toString();
    return queryString;
    
  };

  return (
    <div className="flex mt-3">
      <Link
        href={{ search: toggleFilter("clasico") }}
        className={
            searchParams.get("tipo") === "clasico" 
            ? "btn-info flex items-center justify-center rounded-xl h-8 w-28 mx-3 my-3 text-white"
            : "btn-accent flex items-center justify-center rounded-xl h-8 w-28 mx-3 my-3 text-white"}
      >
        Clásico
      </Link>
      <Link
        href={{ search: toggleFilter("sinHarinas") }}
        className={
            searchParams.get("tipo") === "sinHarinas" 
            ? "btn-info flex items-center justify-center rounded-xl h-8 w-28 mx-3 my-3 text-white"
            : "btn-accent flex items-center justify-center rounded-xl h-8 w-28 mx-3 my-3 text-white"}
      >
        Sin Harinas
      </Link>
      <Link
        href={{ search: toggleFilter("vegetariano") }}
        className={
            searchParams.get("tipo") === "vegetariano" 
            ? "btn-info flex items-center justify-center rounded-xl h-8 w-28 mx-3 my-3 text-white"
            : "btn-accent flex items-center justify-center rounded-xl h-8 w-28 mx-3 my-3 text-white"}
      >
        Vegetariano
      </Link>
      <Link
        href={{ search: toggleFilter("dieta") }}
        className={
            searchParams.get("tipo") === "dieta" 
            ? "btn-info flex items-center justify-center rounded-xl h-8 w-28 mx-3 my-3 text-white"
            : "btn-accent flex items-center justify-center rounded-xl h-8 w-28 mx-3 my-3 text-white"}
      >
        Dieta
      </Link>
    </div>
  );
};

export default Filters;
