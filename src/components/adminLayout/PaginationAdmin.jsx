"use client";

import { useRouter, useSearchParams } from "next/navigation";

function PaginationAdmin({ totalPages }) {
  const router = useRouter();
  const params = useSearchParams();
  const parameters = params.toString();
  console.log(parameters);
  // console.log(querytosend);
  const handlePageChange = (index) => {
    // const queryParams = { params, skip: index * 10 };

    router.push(`?${parameters}&skip=${index * 10}`);
    // router.push(`?skip=${index * 10}`);
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
