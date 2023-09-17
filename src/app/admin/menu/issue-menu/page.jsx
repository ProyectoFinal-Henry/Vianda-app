"use client"
import LoadingComponentApp from "@/app/loading"
import { useSearchParams } from "next/navigation"

import CardsMenuIssue from "@/components/adminLayout/menu/CardsMenuIssue"
import RowResponsive from "@/components/formaters/RowResponsive"
import axios from "axios"
import { useState, useEffect, useRef, useCallback } from "react"
import { toPng } from "html-to-image"
const MenuIssuePageAdmin = () => {
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)
  const diaSolo = params.get("dia")

  let semana = ["lunes", "martes", "miercoles", "jueves", "viernes"]

  if (diaSolo) semana = [diaSolo]

  const [viandas, setViandas] = useState([])
  const [loadingImage, setLoadingImage] = useState(false)

  const viandasGetter = async () => {
    const res = await axios.get(`/api/menu?all=true`)
    setViandas(res.data)
  }
  useEffect(() => {
    viandasGetter()
  }, [])

  const elementToExportRef = useRef(null)
  const menuExporter = useCallback(async () => {
    if (elementToExportRef.current) {
      try {
        setLoadingImage(true)
        const img = await toPng(elementToExportRef.current)

        const link = document.createElement("a")
        link.href = img
        link.download = "exported-image.png" // Nombre del archivo de descarga
        link.click()
        setLoadingImage(false)
      } catch (error) {
        alert("Exportado como imagen error")
        console.error("Error al exportar como imagen:", error)
      }
    }
  }, [])
  return (
    <>
      {loadingImage && (
        <div className="z-30">
          <LoadingComponentApp />
        </div>
      )}
      <RowResponsive>
        <div className="overflow-x-auto max-w-full">
          {viandas.length !== 0 && (
            <div className=" text-center">
              <button
                className="btn btn-primary  btn-block btn-sm max-w-[90%] mr-auto"
                onClick={menuExporter}
              >
                Exportar menu
              </button>
            </div>
          )}
          <div
            id="menu"
            ref={elementToExportRef}
            className={`min-w-[72rem]  bg-base-100 ${diaSolo && "max-w-[500px] min-w-[500px]"}`}
          >
            {viandas.length !== 0 ? (
              <>
                {semana.map((dia) => (
                  <div
                    key={dia}
                    className={` bg-primary-100  rounded-xl shadow-xl p-4  w-full `}
                  >
                    {diaSolo && (
                      <div
                        className="
                        flex flex-col justify-center items-center                       
                       text-2xl font-bold text-gray-800 w-[100px]"
                      >
                        <span className="capitalize">{dia}</span>{" "}
                      </div>
                    )}
                    <div
                      id="menuRow"
                      className={`flex flex-row justify-left flex-wrap gap-4 items-stretch min-w-full  rounded-xl  p-4  w-full ${
                        diaSolo && "max-w-[450px] min-w-[450px]"
                      } `}
                    >
                      {!diaSolo && (
                        <div
                          className="
                        flex flex-col justify-center items-center                       
                       text-2xl font-bold text-gray-800 w-[100px]"
                        >
                          <span className="capitalize">{dia}</span>{" "}
                        </div>
                      )}
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
