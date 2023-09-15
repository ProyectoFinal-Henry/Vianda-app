"use client"
import FormResponsiveContainer from "@/components/formaters/FormResponsiveContainer"
import RowResponsive from "@/components/formaters/RowResponsive"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { FaAngellist } from "react-icons/fa"
import { GiSandsOfTime } from "react-icons/gi"
const UsuariosForm = ({ usuarioId }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      rol: "",
      nombreCompleto: "",
      telefono: "",
      email: "",
      dni: "",
      password: "",
      direccion: "",
    },
  })
  //mensaje de exito se emuestra si se pudo enviar la vianda
  const [success, setSuccess] = useState(false)

  //sacar el id del useEffect para mandarlo cunado sea update
  const [idDb, setIdDb] = useState("/")
  //entre el get y el contenido del formulario
  const [loadingDown, setLoadingDown] = useState(false)
  //entre el submit y la respuesta del server
  const [loadingUp, setLoadingUp] = useState(false)

  const router = useRouter()

  //traer registro de la base de datos
  useEffect(() => {
    if (usuarioId) {
      setLoadingDown(true)
      ;(async () => {
        const toUpdateReq = await axios(`/api/usuarios/${usuarioId}`)
        const data = toUpdateReq.data

        setValue("rol", data.rol)
        setValue("nombreCompleto", data.nombreCompleto)
        setValue("telefono", data.telefono)
        setValue("email", data.email)
        setValue("dni", data.dni)
        setValue("password", data.password)
        setValue("direccion", data.direccion)
        setLoadingDown(false)
      })()

      // pasarlo com value de los campos
    }
  }, [usuarioId, setValue])

  const onSubmit = handleSubmit(async (data) => {
    const { id, rol, nombreCompleto, telefono, email, dni, direccion } = data

    //  remapear para sacar el archivo
    const formData = {
      id,
      nombreCompleto,
      rol,
      telefono,
      email,
      dni,
      direccion,
    }
    let newUser = null //inicializar respuesta del server
    setLoadingUp(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    if (!usuarioId) {
      newUser = await axios.post(`/api/usuarios`, formData)
    } else {
      newUser = await axios.put(`/api/usuarios/${usuarioId}`, formData)
    }
    setLoadingUp(false)

    if (newUser.data === "Usuario creado exitosamente") {
      setSuccess(true)
      //   console.log("file: page.jsx:38  newUser.data:", newUser.data)
    }
    await new Promise((resolve) => setTimeout(resolve, 2500))
    setSuccess(false)
    !usuarioId ? router.push("/admin/usuarios") : router.push("/admin/usuarios")
    router.refresh()
  })
  return (
    <>
      <RowResponsive>
        <FormResponsiveContainer>
          <h1 className="text-2xl font-bold uppercase">{!usuarioId ? "Crear Usuario" : "Actualizar Usuario"}</h1>
          {success && (
            <div className="alert alert-info border-2 font-extrabold my-6 shadow-secondary shadow-xl border-primary flex flex-col justify-center">
              <div className="flex gap-x-2 items-center">
                <FaAngellist className=" text-4xl" />
                <span>El Usuario sido creado!</span>
              </div>
              <span>Dirigiendo a la lista....</span>
            </div>
          )}
          {/* carga para update mientras llegan los datos */}
          {usuarioId && loadingDown && (
            <div className="alert alert-info border-2 font-extrabold my-6 shadow-secondary shadow-xl border-primary flex items-center animate-bounce">
              <GiSandsOfTime className=" text-2xl" />
              <span>Cargando datos del Usuario......</span>
            </div>
          )}
          {/* carga para create mientras suben los datos */}
          {loadingUp && (
            <div className="alert alert-info border-2 font-extrabold my-6 shadow-secondary shadow-xl border-primary flex items-center animate-bounce">
              <GiSandsOfTime className=" text-2xl" />
              <span>Cargando Usuario en el sistema......</span>
            </div>
          )}
          <form
            className="w-full"
            onSubmit={onSubmit}
          >
            {/* Nombre */}
            <div className="form-control  w-full ">
              <label className="label ml-3  pb-1">
                <span className="label-text text-lg font-medium capitalize">Nombre Completo</span>
              </label>
              {/* ============= */}
              <input
                {...register("nombreCompleto", {
                  required: {
                    value: true,
                    message: "Nombre es requerido",
                  },
                  minLength: {
                    value: 3,
                    message: "El nombre debe tener al menos 3 caracteres",
                  },
                  maxLength: {
                    value: 30,
                    message: "Se ha excedido del maximo de 30 caracteres",
                  },
                  pattern: {
                    value: /^[A-Za-z\s]+$/,
                    message: "No debe contener números ni símbolos",
                  },
                })}
                type="text"
                className="input input-sm   input-bordered w-full max-w-[75%] ml-[10%]"
              />
              {errors.nombreCompleto && <div className=" ml-10 mt-2 capitalize text-red-500 gap-2">{errors.nombreCompleto.message}</div>}
            </div>

            <div className="flex flex-row gap-2 items-center justify-center">
              {/* rol */}
              <div className="form-control  w-full ">
                <label className="label ml-3  pb-1">
                  <span className="label-text text-lg font-medium capitalize">rol</span>
                </label>
                {/* ============= */}
                <select
                  {...register("rol", {
                    required: { value: true, message: "el campo es requerido" },
                  })}
                  className="select select-sm   select-bordered w-full max-w-[75%] ml-[10%]"
                >
                  <option value="cliente">cliente</option>
                  <option value="repartidor">repartidor</option>
                  <option value="cocina">cocina</option>
                  <option value="administrador">administrador</option>
                </select>
                {errors.rol && <div className=" ml-10 mt-2 capitalize text-red-500 gap-2">{errors.rol.message}</div>}
              </div>
            </div>

            {/* telefono */}
            <div className="form-control  w-full ">
              <label className="label ml-3  pb-1">
                <span className="label-text text-lg font-medium capitalize">telefono</span>
              </label>
              {/* ============= */}
              <input
                {...register("telefono", {
                  required: {
                    value: true,
                    message: "Este campo es requerido",
                  },
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Solo debe contener números",
                  },
                })}
                type="tel"
                className="input input-sm   input-bordered w-full max-w-[75%] ml-[10%]"
              />
              {errors.telefono && <div className=" ml-10 mt-2 capitalize text-red-500 gap-2">{errors.telefono.message}</div>}
            </div>
            {/* email */}
            <div className="form-control  w-full ">
              <label className="label ml-3  pb-1">
                <span className="label-text text-lg font-medium capitalize">email</span>
              </label>
              {/* ============= */}
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "Este campo es requerido",
                  },
                  pattern: {
                    value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                    // value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: "Correo no válido",
                  },
                })}
                type="email"
                className="input input-sm   input-bordered w-full max-w-[75%] ml-[10%]"
              />
              {errors.email && <div className=" ml-10 mt-2 capitalize text-red-500 gap-2">{errors.email.message}</div>}
            </div>
            {/* dni */}
            <div className="form-control  w-full ">
              <label className="label ml-3  pb-1">
                <span className="label-text text-lg font-medium capitalize">dni</span>
              </label>
              {/* ============= */}
              <input
                {...register("dni", {
                  required: {
                    value: true,
                    message: "Este campo es requerido",
                  },
                  minLength: {
                    value: 5,
                    message: "El campo debe tener al menos 5 caracteres",
                  },
                  maxLength: {
                    value: 12,
                    message: "El campo acepta maximo 12 caracteres",
                  },
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Debe contener solo debe contener números",
                  },
                })}
                type="text"
                className="input input-sm   input-bordered w-full max-w-[75%] ml-[10%]"
              />
              {errors.dni && <div className=" ml-10 mt-2 capitalize text-red-500 gap-2">{errors.dni.message}</div>}
            </div>
            {/* direccion */}
            <div className="form-control  w-full ">
              <label className="label ml-3  pb-1">
                <span className="label-text text-lg font-medium capitalize">direccion</span>
              </label>
              {/* ============= */}
              <input
                {...register("direccion", {
                  required: {
                    value: true,
                    message: "Este campo es requerido",
                  },
                  maxLength: {
                    value: 30,
                    message: "Máximo de numeros excedido",
                  },
                })}
                type="text"
                className="input input-sm   input-bordered w-full max-w-[75%] ml-[10%]"
              />
              {errors.direccion && <div className=" ml-10 mt-2 capitalize text-red-500 gap-2">{errors.direccion.message}</div>}
            </div>

            <div className="form-control  w-full max-w-[75%] ml-[10%] my-4 ">
              <button
                className="btn btn-accent btn-block "
                type="submit"
              >
                {usuarioId ? "Actualizar Usuario" : "Crear Usuario"}
              </button>
            </div>
          </form>
        </FormResponsiveContainer>
      </RowResponsive>
    </>
  )
}

export default UsuariosForm
