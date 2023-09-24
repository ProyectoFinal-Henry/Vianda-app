"use client"
import React from "react"
import { useState, useEffect } from "react"
import CardAllDishes from "./CardAllDishes"

function Pagination({ data }) {
  const [page, setPage] = useState(1)

  useEffect(() => {
    setPage(1)
  }, [data])

  if (!Array.isArray(data)) {
    return <p>No hay datos disponibles</p>
  }
  const render = 4
  const totalpages = Math.ceil(data.length / render)

  const paginated = data.slice((page - 1) * render, page * render)

  const handleClick = (event) => {
    setPage(parseInt(event.target.value))
  }

  const buttonSelect = []
  for (let i = 1; i <= totalpages; i++) {
    buttonSelect.push(i)
  }

  return (
    <>
      <div className="flex justify-center w-full ">
        <h1 className="mt-10 py-5   w-full text-center  text-3xl font-bold">Menu:</h1>
      </div>
      <div className="flex flex-row flex-wrap  justify-center items-start gap-2 md:gap-5 mt-6 mx-auto">
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

      <CardAllDishes data={paginated} />
    </>
  )
}

export default Pagination
