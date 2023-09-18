import { TbSquareForbid2 } from "react-icons/tb";

import { AiFillCheckSquare } from "react-icons/ai";
import Link from "next/link";
import axios from "axios";
import RowResponsive from "@/components/formaters/RowResponsive";
import EditCrud from "@/components/actions/EditCrud";
import SearchBarViandas from "@/components/adminLayout/SearchBarViandas";

import NotAdmin from "@/components/adminLayout/NotAdmin";

// import { prisma } from "@/libs/prisma"
// import PaginationAdmin from "@/components/adminLayout/PaginationAdmin"
import ToogleEstadoUsuario from "@/components/actions/ToogleEstadoUsuario";
import FilterUsers from "@/components/adminLayout/usuarios/FilterUsers";
// import PaginationUsuarios from "@/components/adminLayout/PaginationUsuarios"

const UsuariosPageAdmin = async ({ searchParams }) => {
  let data = [];

  const parameters = new URLSearchParams(searchParams);
  const querytosend = "?" + parameters.toString();

  try {
    const url = `${process.env.LOCALHOST}/api/usuarios${querytosend}`;
    const res = await axios.get(url);

    if (res.data.message) {
      data = res.data.message;
    } else {
      data = Array.isArray(res.data) ? res.data : [res.data];
    }
  } catch (error) {
    data = error;
  }

  return (
    <div>
      {/* <NotAdmin /> ----------------- si no tiene permisos se renderiza este componente, y el resto no*/}
      <RowResponsive>
        <div className="flex flex-col mt-10 pb-4 items-center  w-full">
          <h1 className="font-extrabold text-2xl md:text-3xl ">
            Lista de Usuarios del sistema
          </h1>
          <div className="flex flex-row items-center justify-center gap-x-4 min-w-full">
            {/* <SearchBarViandas /> */}

            <Link
              className="btn btn-accent my-3 text-white ml-auto "
              href="/admin/usuarios/nuevo-usuario"
            >
              Crear Usuario
            </Link>
          </div>
        </div>
        <div className="overflow-x-auto max-w-full">
          <table className="table ">
            <thead>
              <tr className="bg-green-400">
                <th className="text-center text-neutral ">
                  {/* <OrderByField field="nombre" /> */}
                  Id
                </th>
                <th className="text-left text-neutral ">
                  {/* <OrderByField field="tipo" /> */}
                  Rol
                </th>
                <th className="text-center text-neutral ">
                  {/* <OrderByField field="descripcion" /> */}
                  Nombre Completo
                </th>
                <th className="text-center text-neutral ">
                  {/* <OrderByField field="ingredientes" /> */}
                  Teléfono
                </th>
                <th className="text-left text-neutral ">
                  {/* <OrderByField field="stock" /> */}
                  Email
                </th>
                <th className="text-left text-neutral ">
                  {/* <OrderByField field="stock" /> */}
                  DNI
                </th>
                <th className="text-left text-neutral ">
                  {/* <OrderByField field="stock" /> */}
                  Direccion
                </th>
                <th className="text-center text-neutral ">Status</th>

                <th className="text-center text-neutral ">Acciones</th>
              </tr>
            </thead>

            <tbody>
              <FilterUsers />

              {Array.isArray(data) ? (
                data.map(
                  (
                    {
                      id,
                      rol,
                      nombreCompleto,
                      telefono,
                      email,
                      dni,
                      direccion,
                      activo,
                      pedidos,
                    },
                    I
                  ) => {
                    return (
                      <tr
                        key={I}
                        className={`${I % 2 === 0 && `bg-accent/30`}  ${
                          !activo && "bg-red-400/50"
                        }`}
                      >
                        <td>{id}</td>
                        <td>
                          <div className="badge py-3 font-bold capitalize">
                            {rol}
                          </div>
                        </td>
                        <td>{nombreCompleto}</td>
                        <td>
                          <a className="underline" href={`tel:+52${telefono}`}>
                            {telefono}
                          </a>
                        </td>
                        <td>
                          <a className="underline" href={`mailto:${email}`}>
                            {email}
                          </a>
                        </td>
                        <td>{dni}</td>
                        <td>{direccion}</td>
                        <td>
                          {activo ? (
                            <span className="text-neutral font-bold">
                              Activo
                            </span>
                          ) : (
                            <span className="text-warning">Inactivo</span>
                          )}
                        </td>

                        <td>
                          <div className=" h-full w-full flex flex-row  justify-center items-center gap-y-2 ">
                            <span
                              className="tooltip tooltip-left tooltip-top"
                              data-tip="Editar Usuario"
                            >
                              <EditCrud
                                route={`/admin/usuarios/actualizar-usuario/${id}`}
                              />
                            </span>

                            <ToogleEstadoUsuario
                              localHost={process.env.LOCALHOST}
                              id={id}
                              estado={activo}
                            />
                          </div>
                        </td>
                      </tr>
                    );
                  }
                )
              ) : (
                <tr>
                  <td colSpan={"7"}>
                    <h1 className=" w-full text-2xl md:text-3xl text-center">
                      {data}
                    </h1>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          {/* <PaginationUsuarios totalPages={totalPages} /> */}
        </div>
      </RowResponsive>
    </div>
  );
};

export default UsuariosPageAdmin;
