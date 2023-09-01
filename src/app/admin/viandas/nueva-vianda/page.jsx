"use client"
import FormResponsiveContainer from "@/components/formaters/FormResponsiveContainer"
import { useForm } from "react-hook-form"

const AdminNuevaViandaPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  // console.log("file: page.jsx:7  errors:", errors)

  const onSubmit = handleSubmit((data) => {
    console.log("file: page.jsx:9  data:", data)
  })
  return (
    <>
      <div>Aqui un formulario que crea la vianda</div>

      <FormResponsiveContainer>
        <h1 className="text-2xl font-bold uppercase">Creacion de viandas</h1>
        <form
          className="w-full"
          onSubmit={onSubmit}
        >
          <div className="form-control  w-full ">
            <label className="label ml-3  pb-1">
              <span className="label-text text-lg font-medium">Nombre Vianda</span>
            </label>
            {/* ============= */}
            <input
              {...register("nombre", {
                maxLength: { value: 20, message: "Máximo 20 caracteres" },
                minLength: { value: 5, message: "Mínimo 5 caracteres" },
                required: { value: true, message: "el campo es requerido" },
              })}
              type="text"
              placeholder="Arroz con pollo lasagna etc.."
              className="input   input-bordered w-full max-w-[75%] ml-[10%]"
            />
            {errors.nombre?.type === "required" && <div className=" ml-14 badge badge-error gap-2">{errors.nombre.message}</div>}
            {errors.nombre?.type === "maxLength" && <div className="ml-14 badge badge-error gap-2">{errors.nombre.message}</div>}
            {errors.nombre?.type === "minLength" && <div className="ml-14 badge badge-error gap-2">{errors.nombre.message}</div>}
          </div>
          <div className="form-control  w-full ">
            <label className="label ml-3  pb-1">
              <span className="label-text text-lg font-medium">Tipo Vianda</span>
            </label>
            {/* ============= */}

            <select
              {...register("tipo", { required: { value: true, message: "debes escoger un tipo de vianda" } })}
              className="select select-bordered w-full max-w-[75%] ml-[10%]"
            >
              <option value="">Escogé Un Tipo</option>
              <option value="clasico">Clásico</option>
              <option value="sin">Sin Harinas</option>
              <option value="vegetariano">Vegetariano</option>
              <option value="dieta">Dieta</option>
            </select>
            {errors.tipo?.type === "required" && <div className=" ml-14 badge badge-error gap-2">{errors.tipo.message}</div>}
          </div>
          <div className="form-control  w-full ">
            <label className="label ml-3  pb-1">
              <span className="label-text text-lg font-medium">Descripcion</span>
            </label>
            {/* ============= */}

            <textarea
              {...register("descripcion")}
              type="text"
              placeholder="Arroz con pollo lasagna etc.."
              className="textarea   input-bordered w-full max-w-[75%] ml-[10%]"
            />
          </div>
          <div className="form-control  w-full ">
            <label className="label ml-3  pb-1">
              <span className="label-text text-lg font-medium">Ingredientes</span>
            </label>
            {/* ============= */}

            <textarea
              {...register("ingredientes")}
              type="text"
              placeholder="Arroz con pollo lasagna etc.."
              className="textarea   input-bordered w-full max-w-[75%] ml-[10%]"
            />
          </div>
          <div className="form-control  w-full ">
            <label className="label ml-3  pb-1">
              <span className="label-text text-lg font-medium">Imagen</span>
            </label>
            {/* ============= */}

            <input
              {...register("imagen")}
              type="file"
              className="file-input file-input-bordered w-full max-w-[75%] ml-[10%]"
            />
          </div>
          <div className="form-control  w-full ">
            <label className="label ml-3  pb-1">
              <span className="label-text text-lg font-medium">Stock</span>
            </label>
            {/* ============= */}

            <input
              {...register("stock")}
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
