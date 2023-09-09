"use client";
import FormResponsiveContainer from "../formaters/FormResponsiveContainer";
import { useForm } from "react-hook-form";
import { useState } from "react";
import {
  AiFillLock,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

export const UserFormRegister = () => {
  const [visible, setVisible] = useState(false);

  const contraseñaVisibilidad = () => {
    setVisible((prevState) => !prevState);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  console.log(register);
  console.log(errors);

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    reset();
  });

  return (
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
              <label className="label" htmlFor="nombre">
                <span className="label-text font-medium ">Nombre Completo</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input min-w-full input-bordered w-full  input-sm rounded h-7 bg-neutral-50"
                {...register("nombre", {
                  required: {
                    value: true,
                    message: "El nombre es requerido",
                  },
                  minLength: {
                    value: 3,
                    message: "El nombre debe tener al menos 2 caracteres",
                  },
                  maxLength: {
                    value: 15,
                    message: "El nombre debe tener máximo 15 caracteres",
                  },
                  pattern: {
                    value: /^[A-Za-z\s]+$/,
                    message: "No debe contener números ni símbolos",
                  },
                })}
              />

              {errors.nombre && <span>{errors.nombre.message}</span>}
            </div>
            <div className="form-control  w-full pb-2 ">
              <label className="label" htmlFor="email">
                <span className="label-text font-medium">Email</span>
              </label>
              <input
                type="email"
                placeholder="Type here"
                className="input input-bordered w-full  input-sm  bg-neutral-50  rounded h-7  "
                {...register("email", {
                  required: {
                    value: true,
                    message: "El email es requerido",
                  },
                  pattern: {
                    value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                    message: "Correo no válido",
                  },
                })}
              />
              {errors.email && <span>{errors.email.message}</span>}
            </div>
          </div>
          <div className="flex flex-col md:flex-row   min-w-full gap-x-3">
            <div className="form-control w-full pb-2 ">
              <label className="label" htmlFor="telefono">
                <span className="label-text font-medium ">Teléfono</span>
              </label>
              <input
                type="tel"
                placeholder="Type here"
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
                <span className="">{errors.telefono.message}</span>
              )}
            </div>
            <div className="form-control  w-full pb-2 ">
              <label className="label" htmlFor="dni">
                <span className="label-text font-medium ">DNI</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full  input-sm bg-neutral-50  rounded h-7"
                {...register("dni", {
                  required: {
                    value: true,
                    message: "El DNI es requerido",
                  },
                  minLength: {
                    value: 8,
                    message:
                      "No corresponde con la mínima cantidad de números requeridos",
                  },
                  maxLength: {
                    value: 8,
                    message: "Máximo de numeros excedido",
                  },
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "El DNI solo debe contener números",
                  },
                })}
              />
              {errors.dni && <span>{errors.dni.message}</span>}
            </div>
          </div>
          <div className="flex flex-col md:flex-row   min-w-full gap-x-3">
            <div className="form-control w-full pb-2 ">
              <label className="label" htmlFor="contraseña">
                <span className="label-text font-medium ">Contraseña</span>
              </label>
              <input
                type="password"
                placeholder="Type here"
                className="input min-w-full input-bordered w-full  input-sm bg-neutral-50 rounded h-7"
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
                    value: /^[A-Z][a-zA-Z0-9]*$/,
                    message:
                      "La contraseña debe contener minúsculas,mayúsculas y numeros",
                  },
                })}
              />

              <button
                type="button"
                class="relative flex right-8 items-center ml-2 h-full mr-10"
                onClick={contraseñaVisibilidad}
              >
                {visible ? (
                  <AiOutlineEye className="text-xl" />
                ) : (
                  <AiOutlineEyeInvisible className="text-xl" />
                )}
              </button>
            </div>
            {errors.contraseña && <span>{errors.contraseña.message}</span>}

            <div className="form-control  w-full pb-2 ">
              <label className="label" htmlFor="direccion">
                <span className="label-text font-medium ">Dirección</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full  input-sm bg-neutral-50  rounded h-7"
                {...register("direccion", {
                  required: {
                    value: true,
                    maxLength: {
                      value: 30,
                      message: "Este campo es requerido",
                    },
                  },
                })}
              />
              {errors.direccion && <span>{errors.direccion.message}</span>}
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
  );
};
