import { BsFileEarmarkPdfFill } from "react-icons/bs";
import axios from "axios";
import Link from "next/link";
import RowResponsive from "@/components/formaters/RowResponsive";
import OrderByField from "@/components/adminLayout/OrderByField";
import PaginationAdmin from "@/components/adminLayout/PaginationAdmin";
import { currencyFormater } from "@/libs/utils/currencyFormater";
import FiltersPedidos from "@/components/adminLayout/listaPedidos/FiltersPedidos";
import ExporterPdf from "@/components/adminLayout/pedidos/exporterPdf";

async function ListaPedidos({ searchParams }) {
  let data = [];

  const parameters = new URLSearchParams(searchParams);
  const querytosend = "?" + parameters.toString();

  try {
    const url = `${process.env.LOCALHOST}/api/pedidos${querytosend}`;
    const res = await axios.get(url);
    data = res.data;
    // console.log(data);
  } catch (error) {
    data = error;
  }

  return (
    <div>
      {/* <NotAdmin /> ----------------- si no tiene permisos se renderiza este componente, y el resto no*/}
      <RowResponsive>
        <div className="flex flex-col mt-10 pb-4 items-center  w-full">
          <h1 className="font-extrabold text-2xl md:text-3xl ">
            Lista de Pedidos del sistema
          </h1>
        </div>
        <div className="overflow-x-auto max-w-full">
          <table className="table table-zebra ">
            <thead>
              <tr className="bg-green-400">
                <th className="text-center text-neutral ">Pedido Id</th>
                <th className="text-center text-neutral ">Nombre</th>
                <th className="text-center text-neutral ">Estado</th>

                <th className="text-center text-neutral ">
                  {/* <OrderByField field="Metodo de Pago" /> */}
                  Metodo de Pago
                </th>

                <th className="text-center text-neutral ">
                  {/* <OrderByField field="fecha" /> */}
                  Fecha
                </th>
                <th className="text-center text-neutral ">
                  {/* <OrderByField field="Transaccion Id" /> */}
                  Tran. Id
                </th>
                <th className="text-center text-neutral ">
                  {/* <OrderByField field="Total Venta" /> */}
                  Total
                </th>

                <th className="text-center text-neutral ">Acciones</th>
              </tr>
            </thead>

            <tbody>
              <FiltersPedidos />

              {Array.isArray(data) ? (
                data.map(
                  (
                    {
                      id,
                      usuario,
                      estado,
                      metodoPago,
                      fecha,
                      idTransaccion,
                      totalVenta,
                    },
                    I
                  ) => {
                    return (
                      <tr
                        key={I}
                        className={`${I % 2 === 0 && `bg-green-100`}  ${
                          !estado && "bg-red-200/50"
                        }`}
                      >
                        <td>{id}</td>
                        <td className="b font-bold">
                          {usuario.nombreCompleto}
                        </td>
                        <td className="text-center">
                          <div className="badge badge-neutral">{estado}</div>
                        </td>
                        <td className=" ">{metodoPago}</td>
                        <td className="text-center">
                          {new Intl.DateTimeFormat().format(new Date(fecha))}
                        </td>
                        <td className="text-center">{idTransaccion}</td>
                        <td className="text-center">
                          {currencyFormater(totalVenta)}
                        </td>

                        <td>
                          <div className="  flex flex-row  justify-center items-center ">
                            <Link
                              className="link mr-6"
                              href={`/admin/pedidos/${id}`}
                            >
                              Ver
                            </Link>
                            <div
                              className="tooltip tooltip-primary tooltip-left "
                              data-tip="exportar en PDF"
                            >
                              <ExporterPdf pedidoId={id} />
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  }
                )
              ) : (
                <tr>
                  <td colSpan={"8"}>
                    <h1 className=" w-full text-2xl md:text-3xl text-center">
                      {data.message}
                    </h1>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          {/* <PaginationAdmin totalPages={5} /> */}
        </div>
      </RowResponsive>
    </div>
  );
}

export default ListaPedidos;
