"use client"

import FormResponsiveContainer from "../formaters/FormResponsiveContainer"
import bcrypt from "bcryptjs"
import { useForm } from "react-hook-form"
import { useEffect, useState } from "react"
import { AiFillLock, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { FcGoogle } from "react-icons/fc"
import axios from "axios"
import { ModalUserError } from "./ModalUserError"
import { ModalUserExit } from "./ModalUserExit"
import { usePathname } from "next/navigation" // ver url-david
import { welcome } from "@/app/api/email/templates"
import { UserAuth } from "@/context/AuthContext"

export const UserFormRegister = ({ rol }) => {
  const { user } = UserAuth()
  const [visible, setVisible] = useState(false)
  const [toastEmail, setToastEmail] = useState(false)
  const [modalErroCreateUser, setModalErrorCreateUser] = useState(false)
  const [modalExit, setModalExit] = useState(false)
  const [google, setGoogle] = useState(false)

  //si es admin dejarlo ver el campo rol
  const currentPath = usePathname()
  const [isAdmin, setIsadmin] = useState(false)
  const userPriviledge = async () => {
    if (rol === "administrador" && currentPath.includes("/admin")) {
      setIsadmin(true)
    }
  }

  useEffect(() => {
    userPriviledge()
    if (user) {
      setGoogle(true)
    } else {
      setGoogle(false)
    }
  }, [])
  const passwordVisibility = () => {
    setVisible((prevState) => !prevState)
  }
  const enviarCorreoBienvenida = async (infoUsuario) => {
    try {
      const body = {
        to: infoUsuario.email,
        subject: "Bienvenido/a a Viandapp",
        text: "Version texto",
        html: welcome(infoUsuario.nombre),
      }
      const res = await axios.post("/api/email", body)
    } catch (error) {}
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const randomPassword = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    const length = 10
    let password = ""
    for (let i = 0; i < length; i++) {
      const randomChar = chars.charAt(Math.floor(Math.random() * chars.length))
      password = password + randomChar
    }
    return password;
  }

  const onSubmit = handleSubmit(async (data) => {
    try {
      setToastEmail(false)
      let newData = data
      const saltRounds = 10
      if (google) {
        newData.nombreCompleto = user.displayName
        newData.email = user.email
        data.password = randomPassword()
      }
      const passwordHashed = await new Promise((resolve, reject) => {
        bcrypt.hash(data.password, saltRounds, function (err, hash) {
          if (err) {
            console.error(err)
            reject(err)
            return
          }
          resolve(hash)
        })
      })
        newData.password = passwordHashed

      const response = await axios.post("/api/usuarios/registro", newData)

      if (response.status === 202) {
        setToastEmail(true)
      } else if (response.status === 203) {
        setModalErrorCreateUser(true)
      } else {
        //si todo sale bien, crear el token aqui mismo
        const infoUsuario = {
          nombre: newData.nombreCompleto,
          email: newData.email,
        }
        setModalExit(true)
        enviarCorreoBienvenida(infoUsuario)
      }
    } catch (error) {
      console.log(error)
    }

    reset()
  })

  return (
    <>
      <FormResponsiveContainer>
        <div
          id="contenedorPrincipal"
          className=" flex flex-col items-center justify-center min-w-full px-10 py-5"
        >
          <div
            id="contenedorH1"
            className="justify-center "
          >
            {google ? <h1 className="text-center text-lg">COMPLETAR REGISTRO</h1> : <h1 className="text-center text-lg">CREAR CUENTA</h1>}
          </div>
          <div
            className="divider  
        "
          ></div>
          <form
            action=""
            className="min-w-full flex flex-col justify-center items-center "
            onSubmit={onSubmit}
          >
            <div className="flex flex-col md:flex-row   min-w-full gap-x-9  ">
              <div className="form-control w-full pb-2 ">
                <label
                  className="label"
                  htmlFor="nombreCompleto"
                >
                  <span className="label-text font-medium ">Nombre Completo</span>
                </label>
                {google ? (
                  <input
                    type="text"
                    className="input min-w-full input-bordered w-full  input-sm rounded h-7 bg-neutral-50"
                    value={user?.displayName}
                    disabled="true"
                  />
                ) : (
                  <input
                    type="text"
                    placeholder="nombre"
                    className="input min-w-full input-bordered w-full  input-sm rounded h-7 bg-neutral-50"
                    {...register("nombreCompleto", {
                      required: {
                        value: true,
                        message: "Este campo es requerido",
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
                  />
                )}
                {errors.nombreCompleto && <span className="mt-1 text-xs text-warning">{errors.nombreCompleto.message}</span>}
              </div>

              <div className="form-control  w-full pb-2 ">
                <label
                  className="label"
                  htmlFor="email"
                >
                  <span className="label-text font-medium">Email</span>
                </label>
                {google ? (
                  <input
                    type="email"
                    value={user?.email}
                    disabled="true"
                    className="input input-bordered w-full  input-sm  bg-neutral-50  rounded h-7 "
                  />
                ) : (
                  <input
                    type="email"
                    placeholder="email@example.com"
                    className="input input-bordered w-full  input-sm  bg-neutral-50  rounded h-7 "
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
                  />
                )}

                {errors.email && <span className="mt-1 text-xs text-warning">{errors.email.message}</span>}
                {toastEmail && <div>{`El email ingresado ya existe`} </div>}
              </div>
            </div>

            <div className="flex flex-col md:flex-row   min-w-full gap-x-9">
              <div className="form-control w-full pb-2 ">
                <label
                  className="label"
                  htmlFor="telefono"
                >
                  <span className="label-text font-medium ">Teléfono</span>
                </label>
                <input
                  type="tel"
                  placeholder="teléfono"
                  className="input min-w-full input-bordered w-full  input-sm bg-neutral-50 rounded h-7"
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
                />
                {errors.telefono && <span className="mt-1 text-xs text-warning">{errors.telefono.message}</span>}
              </div>
              <div className="form-control  w-full pb-2 ">
                <label
                  className="label"
                  htmlFor="dni"
                >
                  <span className="label-text font-medium ">DNI</span>
                </label>
                <input
                  type="text"
                  placeholder="DNI"
                  className="input input-bordered w-full  input-sm bg-neutral-50  rounded h-7"
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
                />
                {errors.dni && <span className="mt-1 text-xs text-warning">{errors.dni.message}</span>}
              </div>
            </div>
            <div className={`flex flex-col items-center md:flex-row min-w-full ${google ? "justify-start" : "justify-center"} gap-x-9`}>
              <div className="form-control w-full pb-2 ">
                <label className="label">
                  <span className="label-text font-medium ">Contraseña</span>
                </label>
                <div className="flex flex-row">
                  {google ? (
                    <input
                      type="password"
                      className=" relative input min-w-full input-bordered w-full  input-sm bg-neutral-50 rounded h-7"
                      disabled="true"
                      {...register("password", {
                        required: {
                          value: false,
                        },
                      })}
                    />
                  ) : (
                    <input
                      type={visible ? "text" : "password"}
                      placeholder="contraseña"
                      className=" relative input min-w-full input-bordered w-full  input-sm bg-neutral-50 rounded h-7"
                      {...register("password", {
                        required: {
                          value: true,
                          message: "Este campo es requerido",
                        },
                        minLength: {
                          value: 6,
                          message: "La contraseña debe tener al menos 6 caracteres",
                        },
                        pattern: {
                          value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
                          message: "La contraseña debe contener minúsculas,mayúsculas y numeros",
                        },
                      })}
                    />
                  )}

                  {google ? null : (
                    <button
                      type="button"
                      className="relative min-w-min   ml-3  right-9"
                      onClick={passwordVisibility}
                    >
                      {visible ? <AiOutlineEye className="text-xl mr-0" /> : <AiOutlineEyeInvisible className="text-xl mr-0" />}
                    </button>
                  )}
                </div>

                {errors.password && <span className="mt-1 text-xs text-warning">{errors.password.message}</span>}
              </div>

              <div className="form-control w-full pb-2 ">
                <label
                  className="label"
                  htmlFor="direccion"
                >
                  <span className="label-text font-medium">Dirección</span>
                </label>
                <input
                  type="text"
                  placeholder="dirección"
                  className="  input input-bordered w-full  input-sm bg-neutral-50  rounded h-7"
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
                />
                {errors.direccion && <span className="mt-1 text-xs text-warning">{errors.direccion.message}</span>}
              </div>
            </div>
            {/* !================================= mostrar condicionalmente si es admin INICIO*/}
            {isAdmin && (
              <div className="flex flex-col  items-center justify-center md:flex-row   min-w-full gap-x-9">
                <div className="form-control  w-full ">
                  <label className="label ml-3  pb-1">
                    <span className="label-text font-medium capitalize">rol</span>
                  </label>
                  {/* ============= */}
                  <select
                    {...register("rol", {
                      required: {
                        value: true,
                        message: "el campo es requerido",
                      },
                    })}
                    className="select select-sm   select-bordered w-full h-7 bg-neutral-50 "
                  >
                    <option value="cliente">cliente</option>
                    <option value="repartidor">repartidor</option>
                    <option value="cocina">cocina</option>
                    <option value="administrador">administrador</option>
                  </select>
                  {errors.rol && <div className=" ml-10 mt-2 capitalize text-red-500 gap-2">{errors.rol.message}</div>}
                </div>

                <div className="form-control  w-full pb-2 "></div>
              </div>
            )}
            {/* !================================= mostrar condicionalmente si es admin FIN*/}
            <div className="flex mt-5 justify-center">
              <button
                type="submit"
                className="flex items-center py-1  btn-accent bg-accent px-12 rounded-md mt-3"
              >
                <AiFillLock className="text-xl text-white" />
                {google ? (
                  <span className="pl-2 text-white font-semibold">Registrarse</span>
                ) : (
                  <span className="pl-2 text-white font-semibold">Completar registro</span>
                )}
              </button>
            </div>
            <div
              className="divider 
        "
            ></div>
          </form>
        </div>
      </FormResponsiveContainer>
      {modalErroCreateUser && <ModalUserError setModalErrorCreateUser={setModalErrorCreateUser} />}
      {modalExit && <ModalUserExit setModalExit={setModalExit} />}
    </>
  )
}
