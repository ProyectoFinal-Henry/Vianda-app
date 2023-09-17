"use client"
import LoadingComponentApp from "@/app/loading"

import CardsMenuIssue from "@/components/adminLayout/menu/CardsMenuIssue"
import RowResponsive from "@/components/formaters/RowResponsive"
import axios from "axios"
import { useState, useEffect, useRef, useCallback } from "react"
import { toPng } from "html-to-image"
const MenuIssuePageAdmin = () => {
  const [viandas, setViandas] = useState([])

  const viandasGetter = async () => {
    const res = await axios.get(`/api/menu?all=true`)
    setViandas(res.data)
  }
  useEffect(() => {
    viandasGetter()
  }, [])
  const elementToExportRef = useRef(null)

  const menuExporter = useCallback(() => {
    if (elementToExportRef.current) {
      toPng(elementToExportRef.current)
        .then((dataUrl) => {
          const link = document.createElement("a")
          link.href = dataUrl
          link.download = "exported-image.png" // Nombre del archivo de descarga
          link.click()
        })
        .catch((error) => {
          alert("Exportado como imagen error")
          console.error("Error al exportar como imagen:", error)
        })
    }
  }, [])
  const semana = ["lunes", "martes", "miercoles", "jueves", "viernes"]
  return (
    <>
      <RowResponsive>
        <div className="overflow-x-auto max-w-full">
          <div className=" text-center">
            <div
              className="btn btn-primary btn-block max-w-full mr-auto"
              onClick={menuExporter}
            >
              Exportar menu
            </div>
          </div>
          <div
            id="menu"
            ref={elementToExportRef}
            className="min-w-[72rem] bg-base-100"
          >
            {viandas.length !== 0 ? (
              <>
                {semana.map((dia) => (
                  <div
                    key={dia}
                    className=" bg-primary-100  rounded-xl shadow-xl p-4  w-full"
                  >
                    <h1 className="text-3xl font-bold text-gray-800 block mr-auto ">
                      <span className="capitalize">{dia}</span>{" "}
                    </h1>
                    <div
                      id="menuRow"
                      className="flex flex-row justify-center flex-wrap gap-4 items-stretch min-w-full  rounded-xl  p-4  w-full"
                    >
                      <CardsMenuIssue
                        viandas={viandas}
                        dia={dia}
                        tipo={"vegetariano"}
                      />
                      <CardsMenuIssue
                        viandas={viandas}
                        dia={dia}
                        tipo={"sinHarinas"}
                      />
                      <CardsMenuIssue
                        viandas={viandas}
                        dia={dia}
                        tipo={"dieta"}
                      />
                      <CardsMenuIssue
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
          </div>
        </div>
      </RowResponsive>
    </>
  )
}

export default MenuIssuePageAdmin
