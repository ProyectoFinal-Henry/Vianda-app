"use client"
import { GiFoodTruck } from "react-icons/gi"
import LoadingComponentApp from "@/app/loading"
import CardsMenu from "@/components/adminLayout/menu/CardsMenu"
import RowResponsive from "@/components/formaters/RowResponsive"
import axios from "axios"
import Link from "next/link"
import { useState, useEffect } from "react"

const MenuPageAdmin = () => {
  const [viandas, setViandas] = useState([])

  const viandasGetter = async () => {
    const res = await axios.get(`/api/menu?all=true`)
    setViandas(res.data)
  }
  useEffect(() => {
    viandasGetter()
  }, [])
  const semana = ["lunes", "martes", "miercoles", "jueves", "viernes"]
  return (
    <>
      <RowResponsive>
        {viandas.length !== 0 ? (
          <>
            <div className="flex flex-row justify-end flex-wrap gap-4 items-right w-full md:max-w-[896px] ">
              <Link
                href={"/admin/menu/issue-menu"}
                className="btn btn-sm btn-primary rounded-md "
              >
                EXPORTAR ESTE MENU COMO IMAGEN
              </Link>
            </div>
            {semana.map((dia) => (
              <div key={dia}>
                {dia !== "lunes" && <div className={"divider"}></div>}

                <div className="flex flex-row justify-start items-center gap-8 ">
                  <h1 className="text-3xl  font-bold   ">
                    Viandas para el <span className="capitalize">{dia}</span>{" "}
                  </h1>
                  <Link
                    href={`/admin/menu/issue-menu?dia=${dia}`}
                    className="btn btn-sm btn-primary rounded-md "
                  >
                    exportar {dia} <GiFoodTruck className=" text-2xl" />
                  </Link>
                </div>

                <div
                  id="menuRow"
                  className="flex flex-row justify-center flex-wrap gap-4 items-center min-w-full"
                >
                  <CardsMenu
                    viandas={viandas}
                    dia={dia}
                    tipo={"vegetariano"}
                  />
                  <CardsMenu
                    viandas={viandas}
                    dia={dia}
                    tipo={"sinHarinas"}
                  />
                  <CardsMenu
                    viandas={viandas}
                    dia={dia}
                    tipo={"dieta"}
                  />
                  <CardsMenu
                    viandas={viandas}
                    dia={dia}
                    tipo={"clasico"}
                  />
                </div>
              </div>
            ))}
          </>
        ) : (
          <LoadingComponentApp />
        )}
      </RowResponsive>
    </>
  )
}

export default MenuPageAdmin
