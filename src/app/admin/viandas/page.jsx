import { TbSquareForbid2 } from "react-icons/tb"

import { AiFillCheckSquare } from "react-icons/ai"
import Link from "next/link"
import axios from "axios"
import RowResponsive from "@/components/formaters/RowResponsive"
import EditCrud from "@/components/actions/EditCrud"
import ToogleEstadoVianda from "@/components/actions/ToogleEstadoVianda"
import SearchBarViandas from "@/components/adminLayout/SearchBarViandas"
import Filters from "@/components/adminLayout/Filters"
import ClearFilters from "@/components/adminLayout/ClearFilters"
import OrderByField from "@/components/adminLayout/OrderByField"

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
        <div className="overflow-x-auto">
          <table className="table table-zebra ">
            <thead>
              <tr className="bg-green-400">
                <th className="text-center text-neutral ">Imagen</th>
                <th>
                  <OrderByField field="nombre" />
                </th>
                <th>
                  <OrderByField field="tipo" />
                </th>

                <th>
                  <OrderByField field="descripcion" />
                </th>

                <th>
                  <OrderByField field="ingredientes" />
                </th>
                <th>
                  <OrderByField field="stock" />
                </th>
                <th className="text-center text-neutral ">Status</th>
                <th className="text-center text-neutral ">Acciones</th>
              </tr>
            </thead>

            <tbody>
              {Array.isArray(data) ? (
                data.map(({ id, imagen, nombre, tipo, descripcion, ingredientes, stock, estado }, I) => {
                  return (
                    <tr
                      key={I}
                      className={`${I % 2 === 0 && `bg-green-100`}  ${!estado && "bg-red-200/50"}`}
                    >
                      <td>
                        <div className="avatar p-1 relative">
                          <div className="w-24 rounded-full">
                            <img
                              src={imagen}
                              className={!estado && "filter grayscale"}
                            />
                          </div>
                          <span className="absolute top-[0.1rem] left-[0.1rem] ">{id}</span>
                        </div>
                      </td>
                      <td className="b font-bold">{nombre}</td>
                      <td className="">
                        <div className="badge badge-neutral">{tipo}</div>
                      </td>
                      <td className=" ">{descripcion}</td>
                      <td className=" ">{ingredientes}</td>
                      <td className=" ">{stock}</td>
                      <td className=" ">
                        {estado ? (
                          <AiFillCheckSquare className=" text-3xl text-accent" />
                        ) : (
                          <TbSquareForbid2 className=" text-3xl text-warning" />
                        )}
                      </td>
                      <td>
                        <div className=" h-full w-full flex flex-col  justify-center items-center gap-y-2 ">
                          <span
                            className="tooltip tooltip-left tooltip-top"
                            data-tip="Editar vianda"
                          >
                            <EditCrud route={`/admin/viandas/actualizar-vianda/${id}`} />
                          </span>

                          <ToogleEstadoVianda
                            localHost={process.env.LOCALHOST}
                            id={id}
                            estado={estado}
                          />
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
            </tbody>
          </table>
        </div>
      </RowResponsive>
    </div>
  )
}

export default AdminViandasPage
