import Link from "next/link"
import React from "react"
import axios from "axios"
import RowResponsive from "@/components/formaters/RowResponsive"
import EditCrud from "@/components/actions/EditCrud"
import DeleteCrud from "@/components/actions/DeleteCrud"

const AdminViandasPage = async () => {
  const res = await axios.get(`${process.env.LOCALHOST}/api/viandas`)
  const data = res.data
  // const { imagen, nombre, tipo, descripcion, ingredientes, stock } = data
  // console.log("file: page.jsx:7  data:", data)
  return (
    <div>
      <RowResponsive>
        <p> aqui usamos el endpoint get de viandas</p>
        <Link href="/admin/viandas/nueva-vianda">
          <button className="btn">crear vianda</button>
        </Link>
        <p>esto es un elemento de la lista de viandas inicio</p>
        <table className="border border-neutral mx-auto">
          <thead>
            <td className="border border-neutral">Imagen</td>
            <td className="border border-neutral">Nombre</td>
            <td className="border border-neutral">Tipo</td>
            <td className="border border-neutral">Descripcion</td>
            <td className="border border-neutral">Ingredientes</td>
            <td className="border border-neutral">Stock</td>
            <td className="border border-neutral">Acciones</td>
          </thead>
          {data.map(({ id, imagen, nombre, tipo, descripcion, ingredientes, stock }, I) => {
            return (
              <tr key={I}>
                <td className="border border-neutral text-center">
                  <img
                    className="w-20 "
                    src={imagen}
                    alt={nombre}
                  />
                </td>
                <td className="border border-neutral">{nombre}</td>
                <td className="border border-neutral">{tipo}</td>
                <td className="border border-neutral">{descripcion}</td>
                <td className="border border-neutral">{ingredientes}</td>
                <td className="border border-neutral">{stock}</td>
                <td className="border border-neutral">
                  <div className="flex flex-row justify-center items-center gap-x-2">
                    <EditCrud route={`/admin/viandas/actualizar-vianda/${id}`} />
                    <DeleteCrud id={id} />
                  </div>
                </td>
              </tr>
            )
          })}
        </table>
        <p>esto es un elemento de la lista de viandas fin</p>
      </RowResponsive>
    </div>
  )
}

export default AdminViandasPage
