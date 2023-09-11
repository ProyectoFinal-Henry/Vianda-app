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
      <div className="inline-flex items-start gap-8 mt-6">
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

      <div className="max-w-full inline-flex flex-wrap items-stretch gap-2 my-6">
        <CardAllDishes data={paginated} />
      </div>
    </>
  )
}

export default Pagination
