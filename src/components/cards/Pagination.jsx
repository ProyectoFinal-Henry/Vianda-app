"use client";
import React from "react";
import { useState, useEffect } from "react";
import CardAllDishes from "./CardAllDishes";

function Pagination({ data }) {
  if (!Array.isArray(data)) {
    return <p>No hay datos disponibles</p>;
  }

  const [page, setPage] = useState(1);
  const render = 4;
  const totalpages = Math.ceil(data.length / render);

  const paginated = data.slice((page - 1) * render, page * render);

  const handleClick = (event) => {
    setPage(parseInt(event.target.value));
  };

  useEffect(() => {
    setPage(1);
  }, [data]);

  const buttonSelect = [];
  for (let i = 1; i <= totalpages; i++) {
    buttonSelect.push(i);
  }

  return (
    <>
      <div className="flex justify-center flex-wrap items-center my-10">
        {buttonSelect.map((i) => (
          <button
            className={
              i === page
                ? "bg-info font-bold rounded-full w-10 h-10 border-none mx-3 text-xs transition-transform transform hover:scale-125 hover:bg-info"
                : "bg-secondary font-bold rounded-full w-10 h-10 border-none mx-3 text-xs transition-transform transform hover:scale-125 hover:bg-info"
            }
            key={i}
            value={i}
            onClick={handleClick}
          >
            {i}
          </button>
        ))}
      </div>

      <div className="grid grid-rows-4 gap-3 sm:flex justify-evenly flex-wrap mt-6">
        <CardAllDishes data={paginated} />
      </div>
    </>
  );
}

export default Pagination;
