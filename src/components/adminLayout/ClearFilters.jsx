"use client";
import Link from "next/link";
import { LuFilterX } from "react-icons/lu";

import { useSearchParams } from "next/navigation";

const ClearFilters = () => {
  const searchParams = useSearchParams();

  const search = searchParams.get("search");

  return (
    <div>
      {search && (
        <Link href={"/admin/viandas"}>
          <button className=" btn btn-primary text-white ">
            <LuFilterX className="text-2xl text-warning" />
          </button>
        </Link>
      )}
    </div>
  );
};

export default ClearFilters;
