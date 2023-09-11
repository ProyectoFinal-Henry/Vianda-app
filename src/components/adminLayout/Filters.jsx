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
      params.delete("skip");
      params.set("tipo", filterName);
    }

    const queryString = params.toString();
    return queryString;
  };

  return (
    <div className="flex  flex-row flex-wrap justify-center mt-3">
      {searchParams.get("tipo") === "clasico"? (
        <Link
        href="/admin/viandas"
        className="btn-info flex items-center justify-center rounded-xl h-8 w-28 mx-3 my-3 text-white"
        >Clásico
        </Link>   
      ) : (
        <Link
        href={{ search: toggleFilter("clasico") }}
        className="btn-accent flex items-center justify-center rounded-xl h-8 w-28 mx-3 my-3 text-white"
        >Clásico
        </Link>
      )}
      {searchParams.get("tipo") === "sinHarinas"? (
        <Link
        href="/admin/viandas"
        className="btn-info flex items-center justify-center rounded-xl h-8 w-28 mx-3 my-3 text-white"
        >Sin Harinas
        </Link>   
      ) : (
        <Link
        href={{ search: toggleFilter("sinHarinas") }}
        className="btn-accent flex items-center justify-center rounded-xl h-8 w-28 mx-3 my-3 text-white"
        >Sin Harinas
        </Link>
      )}
      {searchParams.get("tipo") === "vegetariano"? (
        <Link
        href="/admin/viandas"
        className="btn-info flex items-center justify-center rounded-xl h-8 w-28 mx-3 my-3 text-white"
        >Vegetariano
        </Link>   
      ) : (
        <Link
        href={{ search: toggleFilter("vegetariano") }}
        className="btn-accent flex items-center justify-center rounded-xl h-8 w-28 mx-3 my-3 text-white"
        >Vegetariano
        </Link>
      )}
      {searchParams.get("tipo") === "dieta"? (
        <Link
        href="/admin/viandas"
        className="btn-info flex items-center justify-center rounded-xl h-8 w-28 mx-3 my-3 text-white"
        >Dieta
        </Link>   
      ) : (
        <Link
        href={{ search: toggleFilter("dieta") }}
        className="btn-accent flex items-center justify-center rounded-xl h-8 w-28 mx-3 my-3 text-white"
        >Dieta
        </Link>
      )}
    </div>
  );
};

export default Filters;
