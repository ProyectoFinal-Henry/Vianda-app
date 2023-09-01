"use client"
import FormResponsiveContainer from "@/components/formaters/FormResponsiveContainer"
import axios from "axios"
import React from "react"

const AdminNuevaViandaPage = () => {
  const handleSubmit = async (e) => {
    e.preventDefault()
    // const res = await axios.post(`${process.env.LOCALHOST}/api/viandas`, body)
    // const data = res.data
  }
  return (
    <>
      <div>Aqui un formulario que crea la vianda</div>

      <FormResponsiveContainer>
        <h1 className="text-2xl font-bold uppercase">Creacion de viandas</h1>
        <form
          className="w-full"
          onSubmit={handleSubmit}
        >
          <div className="form-control  w-full ">
            <label className="label ml-3  pb-1">
              <span className="label-text text-lg font-medium">Nombre Vianda</span>
            </label>
            <input
              type="text"
              placeholder="Arroz con pollo lasagna etc.."
              className="input   input-bordered w-full max-w-[75%] ml-[10%]"
            />
          </div>
          <div className="form-control  w-full ">
            <label className="label ml-3  pb-1">
              <span className="label-text text-lg font-medium">Tipo Vianda</span>
            </label>
            <select class="select select-bordered w-full max-w-[75%] ml-[10%]">
              <option
                disabled
                selected
              >
                Escogé Un Tipo
              </option>
              <option value="clasico">Clásico</option>
              <option value="sin">Sin Harinas</option>
              <option value="vegetariano">Vegetariano</option>
              <option value="dieta">Dieta</option>
            </select>
          </div>
          <div className="form-control  w-full ">
            <label className="label ml-3  pb-1">
              <span className="label-text text-lg font-medium">Descripcion</span>
            </label>
            <textarea
              type="text"
              placeholder="Arroz con pollo lasagna etc.."
              className="textarea   input-bordered w-full max-w-[75%] ml-[10%]"
            />
          </div>
          <div className="form-control  w-full ">
            <label className="label ml-3  pb-1">
              <span className="label-text text-lg font-medium">Ingredientes</span>
            </label>
            <textarea
              type="text"
              placeholder="Arroz con pollo lasagna etc.."
              className="textarea   input-bordered w-full max-w-[75%] ml-[10%]"
            />
          </div>
          <div className="form-control  w-full ">
            <label className="label ml-3  pb-1">
              <span className="label-text text-lg font-medium">Imagen</span>
            </label>
            <input
              type="file"
              class="file-input file-input-bordered w-full max-w-[75%] ml-[10%]"
            />
          </div>
          <div className="form-control  w-full ">
            <label className="label ml-3  pb-1">
              <span className="label-text text-lg font-medium">Stock</span>
            </label>
            <input
              type="Number"
              className="input   input-bordered w-full max-w-[75%] ml-[10%]"
            />
          </div>
          <div className="form-control  w-full max-w-[75%] ml-[10%] my-4 ">
            <button
              className="btn btn-accent btn-lg"
              type="submit"
            >
              Crear Vianda
            </button>
          </div>
        </form>
      </FormResponsiveContainer>
    </>
  )
}

export default AdminNuevaViandaPage
