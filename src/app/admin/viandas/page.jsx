import Link from "next/link"
import React from "react"
import axios from "axios"
import RowResponsive from "@/components/formaters/RowResponsive"
import EditCrud from "@/components/actions/EditCrud"
import DeleteCrud from "@/components/actions/DeleteCrud"
import SearchBarViandas from "@/components/adminLayout/SearchBarViandas"
import Filters from "@/components/adminLayout/Filters"
import ClearFilters from "@/components/adminLayout/ClearFilters"

const AdminViandasPage = async ({ searchParams }) => {
  let data = []
  try {
    const parameters = new URLSearchParams(searchParams)
    const querytosend = "?" + parameters.toString()
    const url = `${process.env.LOCALHOST}/api/viandas${querytosend}`
    const res = await axios.get(url)
    data = res.data
  } catch (error) {
    data = error
  }
  // console.log("file: page.jsx:17  data:", data)

  return (
    <div>
      <RowResponsive>
        <div className="flex flex-col mt-10 pb-4 items-center  w-full">
          <h1 className="font-extrabold text-2xl md:text-3xl ">Lista de Viandas del sistema</h1>
          <div className="flex flex-row items-center justify-center gap-x-4 min-w-full">
            <SearchBarViandas />

            <ClearFilters />
            <Link
              className="btn btn-accent my-3 text-white "
              href="/admin/viandas/nueva-vianda"
            >
              Crear vianda
            </Link>
          </div>
          <Filters />
        </div>

        <table className="border-2 border-neutral/30 mx-auto">
          <thead className="bg-green-400">
            <tr>
              <th className="text-center border-2 border-neutral/30">Imagen</th>
              <th className="text-center border-2 border-neutral/30">Nombre</th>
              <th className="text-center border-2 border-neutral/30">Tipo</th>
              <th className="text-center border-2 border-neutral/30">Descripcion</th>
              <th className="text-center border-2 border-neutral/30">Ingredientes</th>
              <th className="text-center border-2 border-neutral/30">Stock</th>
              <th className="text-center border-2 border-neutral/30">Acciones</th>
            </tr>
          </thead>
          {Array.isArray(data) ? (
            data.map(({ id, imagen, nombre, tipo, descripcion, ingredientes, stock }, I) => {
              return (
                <tr
                  key={I}
                  className={`${I % 2 === 0 && `bg-green-100`}`}
                >
                  <td>
                    <div className="avatar p-1">
                      <div className="w-24 rounded-full">
                        <img src={imagen} />
                      </div>
                    </div>
                  </td>
                  <td className="border-r border-neutral/30 pl-2 font-bold">{nombre}</td>
                  <td className="border-r border-neutral/30 px-2 text-center">
                    <div class="badge badge-neutral">{tipo}</div>
                  </td>
                  <td className="border-r border-neutral/30 pl-2">{descripcion}</td>
                  <td className="border-r border-neutral/30 pl-2">{ingredientes}</td>
                  <td className="border-r border-neutral/30 pl-2">{stock}</td>
                  <td className="border-r border-neutral/30 pl-2">
                    <div className="flex flex-row justify-center items-center gap-x-2">
                      <EditCrud route={`/admin/viandas/actualizar-vianda/${id}`} />
                      <DeleteCrud id={id} />
                    </div>
                  </td>
                </tr>
              )
            })
          ) : (
            <tr>
              <td colSpan={"7"}>
                <h1 className=" w-full text-2xl md:text-3xl text-center">{data}</h1>
              </td>
            </tr>
          )}
        </table>
      </RowResponsive>
    </div>
  )
}

export default AdminViandasPage
