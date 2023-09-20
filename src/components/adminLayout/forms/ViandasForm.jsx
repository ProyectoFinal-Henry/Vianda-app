"use client"
import FormResponsiveContainer from "@/components/formaters/FormResponsiveContainer"
import axios from "axios"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { FaAngellist } from "react-icons/fa"
import { GiSandsOfTime } from "react-icons/gi"
const ViandasForm = ({ viandaId }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      id: "",
      nombre: "",
      tipo: "",
      descripcion: "",
      ingredientes: "",
      imagen: "",
      stock: "",
    },
  })
  //mensaje de exito se emuestra si se pudo enviar la vianda
  const [success, setSuccess] = useState(false)
  //para enviar el archivo solito sin pasarlo por react hook form
  const [file, setFile] = useState(null)
  //para sacar la imagen del use effect porq ue react hook form saca los demas directo a los inputs
  const [imagenTmp, setImagenTmp] = useState("")
  //sacar el id del useEffect para mandarlo cunado sea update
  const [idDb, setIdDb] = useState("/")
  //entre el submit y la respuesta del server
  const [loadingUp, setLoadingUp] = useState(false)

  const router = useRouter()

  //traer registro de la base de datos
  useEffect(() => {
    if (viandaId) {
      ;(async () => {
        const toUpdateReq = await axios(`/api/viandas/${viandaId}`)
        const data = toUpdateReq.data
        setValue("nombre", data.nombre)
        setValue("tipo", data.tipo)
        setValue("descripcion", data.descripcion)
        setValue("ingredientes", data.ingredientes)
        setValue("stock", data.stock)
        setImagenTmp(data.imagen)
        setIdDb(data.id)
      })()

      // pasarlo com value de los campos
    }
  }, [viandaId, setValue])

  const onSubmit = handleSubmit(async (data) => {
    const { nombre, tipo, descripcion, ingredientes, stock } = data

    //  remapear para sacar el archivo
    const formData = new FormData()
    formData.append("nombre", nombre)
    formData.append("tipo", tipo)
    formData.append("descripcion", descripcion)
    formData.append("ingredientes", ingredientes)
    //si no se actualizó mandar la url que tenia
    if (!file) {
      formData.append("imagen", imagenTmp)
    } else {
      formData.append("imagen", file)
    }
    formData.append("stock", stock)
    if (viandaId) {
      formData.append("id", idDb)
    }
    let newVianda = null

    setLoadingUp(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    if (!viandaId) {
      newVianda = await axios.post(`/api/viandas`, formData)
    } else {
      newVianda = await axios.put(`/api/viandas`, formData)
    }
    setLoadingUp(false)

    if (newVianda.data === "Vianda creada exitosamente!") {
      setSuccess(true)
      //   console.log("file: page.jsx:38  newVianda.data:", newVianda.data)
    }
    await new Promise((resolve) => setTimeout(resolve, 2500))
    setSuccess(false)
    !viandaId ? router.push("/admin/viandas") : router.push("/admin/viandas")
    router.refresh()
  })
  return (
    <>
      <FormResponsiveContainer>
        <h1 className="text-2xl font-bold uppercase">{!viandaId ? "Crear Viandas" : "Actualizar Vianda"}</h1>
        {success && (
          <div className="alert alert-info border-2 font-extrabold my-6 shadow-secondary shadow-xl border-primary flex flex-col justify-center">
            <div className="flex gap-x-2 items-center">
              <FaAngellist className=" text-4xl" />
              <span>la Vianda ha sido creada!</span>
            </div>
            <span>Dirigiendo a la lista....</span>
          </div>
        )}
        {/* carga para update mientras llegan los datos */}
        {imagenTmp === "" && viandaId && (
          <div className="alert alert-info border-2 font-extrabold my-6 shadow-secondary shadow-xl border-primary flex items-center animate-bounce">
            <GiSandsOfTime className=" text-2xl" />
            <span>Cargando datos de la vianda......</span>
          </div>
        )}
        {/* carga para create mientras suben los datos */}
        {loadingUp && (
          <div className="alert alert-info border-2 font-extrabold my-6 shadow-secondary shadow-xl border-primary flex items-center animate-bounce">
            <GiSandsOfTime className=" text-2xl" />
            <span>Cargando vianda en el sistema......</span>
          </div>
        )}
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
                maxLength: { value: 40, message: "Máximo 40 caracteres" },
                minLength: { value: 5, message: "Mínimo 5 caracteres" },
                required: { value: true, message: "el campo es requerido" },
              })}
              type="text"
              placeholder="Arroz con pollo lasagna etc.."
              className="input input-sm   input-bordered w-full max-w-[75%] ml-[10%]"
            />
            {errors.nombre?.type === "required" && <div className=" ml-10 mt-2 capitalize text-red-500 gap-2">{errors.nombre.message}</div>}
            {errors.nombre?.type === "maxLength" && <div className="ml-10 mt-2 capitalize text-red-500 gap-2">{errors.nombre.message}</div>}
            {errors.nombre?.type === "minLength" && <div className="ml-10 mt-2 capitalize text-red-500 gap-2">{errors.nombre.message}</div>}
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
              <option Value="">Escogé Un Tipo</option>
              <option Value="clasico">Clásico</option>
              <option Value="sinHarinas">Sin Harinas</option>
              <option Value="vegetariano">Vegetariano</option>
              <option Value="dieta">Dieta</option>
            </select>
            {errors.tipo?.type === "required" && <div className=" ml-10 mt-2 capitalize text-red-500 gap-2">{errors.tipo.message}</div>}
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
                maxLength: { value: 100, message: "Máximo 100 Caracteres" },
              })}
              type="text"
              placeholder="Arroz con pollo lasagna etc.."
              className="textarea   input-bordered w-full max-w-[75%] ml-[10%]"
            />
            {errors.descripcion?.type === "required" && (
              <div className=" ml-10 mt-2 capitalize text-red-500 gap-2">{errors.descripcion.message}</div>
            )}
            {errors.descripcion?.type === "minLength" && (
              <div className=" ml-10 mt-2 capitalize text-red-500 gap-2">{errors.descripcion.message}</div>
            )}
            {errors.descripcion?.type === "maxLength" && (
              <div className=" ml-10 mt-2 capitalize text-red-500 gap-2">{errors.descripcion.message}</div>
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
                maxLength: { value: 100, message: "Máximo 100 Caracteres" },
              })}
              type="text"
              placeholder="Arroz con pollo lasagna etc.."
              className="textarea   input-bordered w-full max-w-[75%] ml-[10%]"
            />
            {errors.ingredientes?.type === "required" && (
              <div className=" ml-10 mt-2 capitalize text-red-500 gap-2">{errors.ingredientes.message}</div>
            )}
            {errors.ingredientes?.type === "minLength" && (
              <div className=" ml-10 mt-2 capitalize text-red-500 gap-2">{errors.ingredientes.message}</div>
            )}
            {errors.ingredientes?.type === "maxLength" && (
              <div className=" ml-10 mt-2 capitalize text-red-500 gap-2">{errors.ingredientes.message}</div>
            )}
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
              className="input input-sm   input-bordered w-full max-w-[75%] ml-[10%]"
            />
            {errors.stock?.type === "required" && <div className=" ml-10 mt-2 capitalize text-red-500 gap-2">{errors.stock.message}</div>}
            {errors.stock?.type === "min" && <div className=" ml-10 mt-2 capitalize text-red-500 gap-2">{errors.stock.message}</div>}
            {errors.stock?.type === "max" && <div className=" ml-10 mt-2 capitalize text-red-500 gap-2">{errors.stock.message}</div>}
          </div>
          <div className="form-control  w-full items-center my-4 justify-center">
            <div className="avatar">
              <div className="w-[60%] mx-auto  rounded">
                {/* cunado se entre a new que muestre una imagen demo */}
                {imagenTmp === "" && (
                  <Image
                    src="https://res.cloudinary.com/deezwetqk/image/upload/v1695171792/imagePlaceholder_sy51to.png" //todo:cuando no hay mostrar un skeleton, cunado se actualie mostrar el nuevo valor
                    alt={"vianda to show"}
                    width={300}
                    height={300}
                  />
                )}
                {/* cunado se traiga de update que e comporte como ahora */}
                <Image
                  src={imagenTmp} //todo:cuando no hay mostrar un skeleton, cunado se actualie mostrar el nuevo valor
                  alt={"vianda to show"}
                  width={300}
                  height={300}
                />
                {/* cunado se ponga una nueva imagen que se ponga aqui */}
              </div>
            </div>
          </div>
          <div className="form-control  w-full ">
            <label className="label ml-3  pb-1">
              <span className="label-text text-lg font-medium">Imagen</span>
            </label>
            {/* ============= */}

            {viandaId ? (
              <input
                type="file"
                className="file-input file-input-bordered w-full max-w-[75%] ml-[10%]"
                onChange={(e) => {
                  setFile(e.target.files[0])
                  setImagenTmp(URL.createObjectURL(e.target.files[0]))
                }}
              />
            ) : (
              <input
                {...register("imagen", { required: { value: true, message: "Imagen requerida" } })}
                type="file"
                className="file-input file-input-sm file-input-secondary file-input-bordered border-accent w-full max-w-[75%] ml-[10%]"
                onChange={(e) => {
                  setFile(e.target.files[0])
                  if (e.target.files[0]) {
                    setImagenTmp(URL.createObjectURL(e.target.files[0]))
                  } else {
                    setImagenTmp("")
                  }
                }}
              />
            )}
            {errors.imagen?.type === "required" && <div className=" ml-10 mt-2 capitalize text-red-500 gap-2">{errors.imagen.message}</div>}
          </div>

          <div className="form-control  w-full max-w-[75%] ml-[10%] my-4 ">
            <button
              className="btn btn-accent btn-block "
              type="submit"
            >
              {viandaId ? "Actualizar Vianda" : "Crear Vianda"}
            </button>
          </div>
        </form>
      </FormResponsiveContainer>
    </>
  )
}

export default ViandasForm
