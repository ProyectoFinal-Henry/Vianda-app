"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

function PaginationAdmin({ totalPages }) {
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const handlePageChange = (index) => {
    setCurrentPage(index + 1);
    params.set("skip", index * 10);
    const queryString = params.toString();
    router.push(`/admin/viandas?${queryString}`);
  };

  return (
    <>
      <div className="flex justify-center flex-wrap items-center my-10">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={
              currentPage === index + 1
                ? "bg-info font-bold rounded-full w-10 h-10 border-none mx-3 text-xs transition-transform transform hover:scale-125 hover:bg-info"
                : "bg-secondary font-bold rounded-full w-10 h-10 border-none mx-3 text-xs transition-transform transform hover:scale-125 hover:bg-info"
            }
            onClick={() => {
              handlePageChange(index);
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
}

export default PaginationAdmin;
