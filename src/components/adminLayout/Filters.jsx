"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Filters = () => {
  const pathName = usePathname();
  const urltogo = `${pathName}?tipo=`;

  return (
    <div className="flex mt-3">
      <Link
        href={`${urltogo}clasico`}
        className={"btn-accent flex items-center justify-center rounded-xl h-8 w-28 mx-3 my-3 text-white"}
      >
        Clásico
      </Link>
      <Link
        href={`${urltogo}sinHarinas`}
        className={"btn-accent flex items-center justify-center rounded-xl h-8 w-28 mx-3 my-3 text-white"}
      >
        Sin Harinas
      </Link>
      <Link
        href={`${urltogo}vegetariano`}
        className={"btn-accent flex items-center justify-center rounded-xl h-8 w-28 mx-3 my-3 text-white"}
      >
        Vegetariano
      </Link>
      <Link
        href={`${urltogo}dieta`}
        className={"btn-accent flex items-center justify-center rounded-xl h-8 w-28 mx-3 my-3 text-white"}
      >
        Dieta
      </Link>
    </div>
  );
};

export default Filters;
