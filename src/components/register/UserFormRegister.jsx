"use client";

import FormResponsiveContainer from "../formaters/FormResponsiveContainer";
import bcrypt from "bcryptjs";
import { useForm } from "react-hook-form";
import { useState } from "react";
import {
  AiFillLock,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";

import { ModalUserError } from "./ModalUserError";
import { ModalUserExit } from "./ModalUserExit";

export const UserFormRegister = () => {
  const [visible, setVisible] = useState(false);
  const [toastEmail, setToastEmail] = useState(false);
  const [modalErroCreateUser, setModalErrorCreateUser] = useState(false);
  const [modalExit, setModalExit] = useState(false);
  const [email, setEmail] = useState("");

  const passwordVisibility = () => {
    setVisible((prevState) => !prevState);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    try {
      setToastEmail(false);
      let emailIngresado = data.email;
      setEmail(emailIngresado);
      let contraseñaIngresada = data.password;
      const saltRounds = 10;
      const passwordHashed = await new Promise((resolve, reject) => {
        bcrypt.hash(contraseñaIngresada, saltRounds, function (err, hash) {
          if (err) {
            console.error(err);
            reject(err);
            return;
          }
          resolve(hash);
        });
      });
      let newData = data;
      newData.password = passwordHashed;

      console.log(data);
      const res = await axios.post("/api/usuarios/registro", newData);
      console.log(res);
      const resMessage = res.data.message;

      if (resMessage.includes("ya existe")) {
        setToastEmail(true);
      } else if (resMessage.includes("error creando el usuario")) {
        setModalErrorCreateUser(true);
      } else {
        setModalExit(true);
      }
    } catch (error) {
      console.log(error);
    }

    reset();
  });

  return (
    <>
      <FormResponsiveContainer>
        <div
          id="contenedorPrincipal"
          className=" flex flex-col items-center justify-center min-w-full px-10 py-5"
        >
          <div id="contenedorH1" className="justify-center ">
            <h1 className="text-center text-lg">CREAR CUENTA</h1>
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
                <label className="label" htmlFor="nombreCompleto">
                  <span className="label-text font-medium ">
                    Nombre Completo
                  </span>
                </label>
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

                {errors.nombreCompleto && (
                  <span className="mt-1 text-xs text-warning">
                    {errors.nombreCompleto.message}
                  </span>
                )}
              </div>
              <div className="form-control  w-full pb-2 ">
                <label className="label" htmlFor="email">
                  <span className="label-text font-medium">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="input input-bordered w-full  input-sm  bg-neutral-50  rounded h-7  "
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
                {errors.email && (
                  <span className="mt-1 text-xs text-warning">
                    {errors.email.message}
                  </span>
                )}
                {toastEmail && (
                  <div>{`El email ingresado ${email} ya existe`} </div>
                )}
              </div>
            </div>
            <div className="flex flex-col md:flex-row   min-w-full gap-x-9">
              <div className="form-control w-full pb-2 ">
                <label className="label" htmlFor="telefono">
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
                {errors.telefono && (
                  <span className="mt-1 text-xs text-warning">
                    {errors.telefono.message}
                  </span>
                )}
              </div>
              <div className="form-control  w-full pb-2 ">
                <label className="label" htmlFor="dni">
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
                {errors.dni && (
                  <span className="mt-1 text-xs text-warning">
                    {errors.dni.message}
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-col  items-center justify-center md:flex-row   min-w-full gap-x-9">
              <div className="form-control w-full pb-2 ">
                <label className="label">
                  <span className="label-text font-medium ">Contraseña</span>
                </label>
                <div className="flex flex-row">
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
                        message:
                          "La contraseña debe tener al menos 6 caracteres",
                      },
                      pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
                        message:
                          "La contraseña debe contener minúsculas,mayúsculas y numeros",
                      },
                    })}
                  />

                  <button
                    type="button"
                    className="relative min-w-min   ml-3  right-9"
                    onClick={passwordVisibility}
                  >
                    {visible ? (
                      <AiOutlineEye className="text-xl mr-0" />
                    ) : (
                      <AiOutlineEyeInvisible className="text-xl mr-0" />
                    )}
                  </button>
                </div>

                {errors.password && (
                  <span className="mt-1 text-xs text-warning">
                    {errors.password.message}
                  </span>
                )}
              </div>

              <div className="form-control  w-full pb-2 ">
                <label className="label" htmlFor="direccion">
                  <span className="label-text font-medium ">Dirección</span>
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
                {errors.direccion && (
                  <span className="mt-1 text-xs text-warning">
                    {errors.direccion.message}
                  </span>
                )}
              </div>
            </div>
            <div className="flex mt-5 justify-center">
              <button
                type="submit"
                className="flex items-center py-1  btn-accent bg-accent px-12 rounded-md mt-3"
              >
                <AiFillLock className="text-xl text-white" />
                <span className="pl-2 text-white font-semibold">
                  Completar registro
                </span>
              </button>
            </div>
            <div
              className="divider 
        "
            ></div>
          </form>

          <p className="font-medium ">O ingresa con</p>
          <button className="items-center gap-x-1.5 mt-4 flex font-bold border-solid border-neutral border-2 rounded-sm px-4 py-0.5 border-opacity-30">
            <FcGoogle className="text-2xl px-0 mx-0" />
            Google
          </button>
        </div>
      </FormResponsiveContainer>
      {modalErroCreateUser && (
        <ModalUserError setModalErrorCreateUser={setModalErrorCreateUser} />
      )}
      {modalExit && <ModalUserExit setModalExit={setModalExit} />}
    </>
  );
};
