"use client";

import { useRouter, useSearchParams } from "next/navigation";

function PaginationAdmin({ totalPages }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  console.log(params.toString());

  const handlePageChange = (index) => {
    params.set("skip", index * 10);
    const queryString = params.toString();
    router.push(`/admin/viandas?${queryString}`);
  };

  return (
    <>
      <div className="flex justify-center flex-wrap items-center my-10">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            className="bg-info font-bold rounded-full w-10 h-10 border-none mx-3 text-xs transition-transform transform hover:scale-125 hover:bg-info"
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
