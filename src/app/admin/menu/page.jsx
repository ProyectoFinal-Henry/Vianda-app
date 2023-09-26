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
    if (viandas.length === 0) {
      viandasGetter()
    }
  }, [])

  const handleResetViandas = async () => {
    const objetoReset = {}
    try {
      const res = await axios.delete(`/api/menu?reset=true`)
    } catch (error) {
      throw new Error(error.message)
    }
    window.location.reload() //!OJO CON ESTO!
  }

  const semana = ["lunes", "martes", "miercoles", "jueves", "viernes"]
  return (
    <>
      <RowResponsive>
        {viandas.length !== 0 ? (
          <>
            <div className="flex flex-row justify-center md:justify-start mb-4 flex-wrap gap-4 items-right w-full md:max-w-[896px] ">
              <button
                className="btn btn-sm btn-warning text-white rounded-md "
                onClick={handleResetViandas}
              >
                Reiniciar Menu
              </button>
              <Link
                href={"/admin/menu/issue-menu"}
                className="btn btn-sm btn-primary rounded-md "
              >
                EXPORTAR MENU SEMANAL COMO IMAGEN
              </Link>
            </div>
            <div className="divider   "></div>
            {semana.map((dia) => (
              <div key={dia}>
                {dia !== "lunes" && <div className={"divider"}></div>}
                <div className="flex flex-row justify-start items-center gap-8 mx-2 ">
                  <h1 className="text-xl md:text-3xl  font-bold   ">
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
                    setViandas={setViandas}
                  />
                  <CardsMenu
                    viandas={viandas}
                    dia={dia}
                    tipo={"sinHarinas"}
                    setViandas={setViandas}
                  />
                  <CardsMenu
                    viandas={viandas}
                    dia={dia}
                    tipo={"dieta"}
                    setViandas={setViandas}
                  />
                  <CardsMenu
                    viandas={viandas}
                    dia={dia}
                    tipo={"clasico"}
                    setViandas={setViandas}
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
