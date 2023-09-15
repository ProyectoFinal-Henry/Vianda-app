"use client"
import LoadingComponentApp from "@/app/loading"
import CardsMenu from "@/components/adminLayout/menu/CardsMenu"
import RowResponsive from "@/components/formaters/RowResponsive"
import axios from "axios"
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
            {semana.map((dia) => (
              <div key={dia}>
                {dia !== "lunes" && <div className={"divider"}></div>}
                <h1 className="text-3xl font-bold text-gray-800 block mr-auto ">
                  Viandas para el <span className="capitalize">{dia}</span>{" "}
                </h1>
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
