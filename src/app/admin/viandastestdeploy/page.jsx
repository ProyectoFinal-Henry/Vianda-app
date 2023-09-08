// import { TbSquareForbid2 } from "react-icons/tb"

// import { AiFillCheckSquare } from "react-icons/ai"
import Link from "next/link"
import axios from "axios"
import RowResponsive from "@/components/formaters/RowResponsive"
// import EditCrud from "@/components/actions/EditCrud"
// import ToogleEstadoVianda from "@/components/actions/ToogleEstadoVianda"
// import SearchBarViandas from "@/components/adminLayout/SearchBarViandas"
// import Filters from "@/components/adminLayout/Filters"
// import ClearFilters from "@/components/adminLayout/ClearFilters"
// import OrderByField from "@/components/adminLayout/OrderByField"

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
  console.log("file: page.jsx:17  data:", data)

  return (
    <div>
      <RowResponsive>
        <div className="flex flex-col mt-10 pb-4 items-center  w-full">
          <h1 className="font-extrabold text-2xl md:text-3xl ">Lista de Viandas del sistema</h1>
          <div className="flex flex-row items-center justify-center gap-x-4 min-w-full">
            {/* <SearchBarViandas /> */}

            {/* <ClearFilters /> */}
            {/* <Link
              className="btn btn-accent my-3 text-white "
              href="/admin/viandas/nueva-vianda"
            >
              Crear vianda
            </Link> */}
          </div>
          {/* <Filters /> */}
        </div>
        <div className="overflow-x-auto">
          {data.map(({ id, imagen, nombre, tipo, descripcion, ingredientes, stock, estado }, I) => {
            return (
              <div
                className="flex flex-row"
                key={I}
              >
                <div>{id}</div>
                <div>{imagen}</div>
                <div>{nombre}</div>
                <div>{tipo}</div>
                <div>{descripcion}</div>
                <div>{ingredientes}</div>
                <div>{stock}</div>
                <div>{estado}</div>
              </div>
            )
          })}
        </div>
      </RowResponsive>
    </div>
  )
}

export default AdminViandasPage
