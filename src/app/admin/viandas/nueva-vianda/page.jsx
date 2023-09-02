"use client"
import FormResponsiveContainer from "@/components/formaters/FormResponsiveContainer"
import { useForm } from "react-hook-form"
const AdminNuevaViandaPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = handleSubmit((data) => {
    const { nombre, tipo, descripcion, ingredientes, imagen, stock } = data
    //  remapear para sacar el archivo
    const dataMapper = {
      nombre,
      tipo,
      descripcion,
      ingredientes,
      imagen: imagen[0].name,
      stock,
    }
    console.log("file: page.jsx:42  dataMapper:", dataMapper)

    //manejo de la imagen
    const formdata = new FormData()
    formdata.append("imagen", imagen)
    console.log(formdata.get("imagen"))
    // uploader(dataMapper.nombre,dataMapper.imagen.)
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
            {errors.nombre?.type === "required" && <div className=" ml-20 mt-2 badge badge-error gap-2">{errors.nombre.message}</div>}
            {errors.nombre?.type === "maxLength" && <div className="ml-20 mt-2 badge badge-error gap-2">{errors.nombre.message}</div>}
            {errors.nombre?.type === "minLength" && <div className="ml-20 mt-2 badge badge-error gap-2">{errors.nombre.message}</div>}
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
            {errors.tipo?.type === "required" && <div className=" ml-20 mt-2 badge badge-error gap-2">{errors.tipo.message}</div>}
          </div>
          <div className="form-control  w-full ">
            <label className="label ml-3  pb-1">
              <span className="label-text text-lg font-medium">Descripcion</span>
            </label>
            {/* ============= */}

            <textarea
              {...register("descripcion", {
                required: { value: true, message: "La descripcion es requerida" },
                minLength: { value: 10, message: "mínimo 10 caracteres" },
                maxLength: { value: 50, message: "Máximo 50 Caracteres" },
              })}
              type="text"
              placeholder="Arroz con pollo lasagna etc.."
              className="textarea   input-bordered w-full max-w-[75%] ml-[10%]"
            />
            {errors.descripcion?.type === "required" && (
              <div className=" ml-20 mt-2 badge badge-error gap-2">{errors.descripcion.message}</div>
            )}
            {errors.descripcion?.type === "minLength" && (
              <div className=" ml-20 mt-2 badge badge-error gap-2">{errors.descripcion.message}</div>
            )}
            {errors.descripcion?.type === "maxLength" && (
              <div className=" ml-20 mt-2 badge badge-error gap-2">{errors.descripcion.message}</div>
            )}
          </div>
          <div className="form-control  w-full ">
            <label className="label ml-3  pb-1">
              <span className="label-text text-lg font-medium">Ingredientes</span>
            </label>
            {/* ============= */}

            <textarea
              {...register("ingredientes", {
                required: { value: true, message: "Ingredientes requeridos" },
                minLength: { value: 10, message: "mínimo 10 caracteres" },
                maxLength: { value: 50, message: "Máximo 50 Caracteres" },
              })}
              type="text"
              placeholder="Arroz con pollo lasagna etc.."
              className="textarea   input-bordered w-full max-w-[75%] ml-[10%]"
            />
            {errors.ingredientes?.type === "required" && (
              <div className=" ml-20 mt-2 badge badge-error gap-2">{errors.ingredientes.message}</div>
            )}
            {errors.ingredientes?.type === "minLength" && (
              <div className=" ml-20 mt-2 badge badge-error gap-2">{errors.ingredientes.message}</div>
            )}
            {errors.ingredientes?.type === "maxLength" && (
              <div className=" ml-20 mt-2 badge badge-error gap-2">{errors.ingredientes.message}</div>
            )}
          </div>
          <div className="form-control  w-full ">
            <label className="label ml-3  pb-1">
              <span className="label-text text-lg font-medium">Imagen</span>
            </label>
            {/* ============= */}

            <input
              {...register("imagen", { required: { value: true, message: "Imagen requerida" } })}
              type="file"
              className="file-input file-input-bordered w-full max-w-[75%] ml-[10%]"
            />
            {errors.imagen?.type === "required" && <div className=" ml-20 mt-2 badge badge-error gap-2">{errors.imagen.message}</div>}
          </div>
          <div className="form-control  w-full ">
            <label className="label ml-3  pb-1">
              <span className="label-text text-lg font-medium">Stock</span>
            </label>
            {/* ============= */}

            <input
              {...register("stock", {
                required: { value: true, message: "el stock es obligatorio" },
                min: { value: 5, message: "el stock minimo es 5" },
                max: { value: 200, message: "el stock maximo es 200" },
              })}
              type="number"
              className="input   input-bordered w-full max-w-[75%] ml-[10%]"
            />
            {errors.stock?.type === "required" && <div className=" ml-20 mt-2 badge badge-error gap-2">{errors.stock.message}</div>}
            {errors.stock?.type === "min" && <div className=" ml-20 mt-2 badge badge-error gap-2">{errors.stock.message}</div>}
            {errors.stock?.type === "max" && <div className=" ml-20 mt-2 badge badge-error gap-2">{errors.stock.message}</div>}
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
