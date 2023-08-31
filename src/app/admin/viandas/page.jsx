import Link from "next/link"
import React from "react"

const AdminViandasPage = () => {
  return (
    <div>
      Se muestra una lista de viandas y la posibilidad de desactivarlas o editarlas o crearlas
      <p> aqui usamos el endpoint get de viandas</p>
      <Link href="/admin/viandas/nueva-vianda">
        <button className="btn">crear vianda</button>
      </Link>
      <p>esto es un elemento de la lista de viandas inicio</p>
      <table className="border border-neutral mx-auto">
        <thead>
          <td className="border border-neutral">nombre</td> <td className="border border-neutral">descripcion</td>{" "}
          <td className="border border-neutral">tipo acciones</td>
        </thead>
        <tr>
          <td className="border border-neutral">arroz con pollo</td> <td className="border border-neutral"> arroz con pollo fresco</td>{" "}
          <td className="border border-neutral">
            <Link href="/admin/viandas/actualizar-vianda/15">
              <button className="btn btn-success">editar Vianda</button>
            </Link>
            <button
              //   onClick={() =>
              //     alert("utilizar el método se usa para desactivar la respectiva vianda este componente recibe el IDE de la vianda")
              //   }
              className="btn btn-warning"
            >
              Desactivar Vianda(compponetne que recibe id)
            </button>
          </td>
        </tr>
      </table>
      <p>esto es un elemento de la lista de viandas fin</p>
    </div>
  )
}

export default AdminViandasPage
