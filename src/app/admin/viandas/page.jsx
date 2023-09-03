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
        <table className="border-2 border-neutral/30 mx-auto">
          <thead className="bg-green-400">
            <th className="text-center border-2 border-neutral/30">Imagen</th>
            <th className="text-center border-2 border-neutral/30">Nombre</th>
            <th className="text-center border-2 border-neutral/30">Tipo</th>
            <th className="text-center border-2 border-neutral/30">Descripcion</th>
            <th className="text-center border-2 border-neutral/30">Ingredientes</th>
            <th className="text-center border-2 border-neutral/30">Stock</th>
            <th className="text-center border-2 border-neutral/30">Acciones</th>
          </thead>
          {data.map(({ id, imagen, nombre, tipo, descripcion, ingredientes, stock }, I) => {
            return (
              <tr
                key={I}
                className={`${I % 2 === 0 && `bg-green-100`}`}
              >
                <td className="border-r  border-neutral/30  text-center">
                  <img
                    className="w-20 rounded-full "
                    src={imagen}
                    alt={nombre}
                  />
                </td>
                <td className="border-r border-neutral/30 pl-2">{nombre}</td>
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
          })}
        </table>
        <p>esto es un elemento de la lista de viandas fin</p>
      </RowResponsive>
    </div>
  )
}

export default AdminViandasPage
