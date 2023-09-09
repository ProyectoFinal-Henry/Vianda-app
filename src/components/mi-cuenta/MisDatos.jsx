"use client";
import { useEffect, useState } from "react"
import { CgLogOff } from "react-icons/cg"; 
import { RiShoppingBasketFill } from "react-icons/ri"; 
import { MdRateReview } from "react-icons/md"; 
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";


function MisDatos({usuarioId}) {

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({defaultValues: {
    nombre: "",
    email: "",
    dni: "",
    telefono: "",
    direccion: "",
  },});


  useEffect(() => {
    if (usuarioId) {
      ;(async () => {
        const toUpdateReq = await axios(`/api/usuarios/${usuarioId}`)
        const data = toUpdateReq.data
        setValue("nombre", data.nombreCompleto)
        setValue("email", data.email)
        setValue("dni", data.dni)
        setValue("telefono", data.telefono)
        setValue("direccion", data.direccion)
        setIdDb(data.id)
      })()
    }
  }, [usuarioId, setValue])



  return (    
    <>
      <div className="flex flex-col md:flex-row items-start" >

        <div id="NavAdmin" className="navbar text-black z-10 text-lg md:m-10 md:my-[10vh]">

          <div className="navbar-start ">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost  md:hidden">
                <FiMenu className="text-2xl" />
              </label>
              <ul
                tabIndex={0}
                className="menu menu-md dropdown-content z-50 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link href={"/catalog/mi-cuenta"}><BsFillPersonLinesFill className="text-accent"/> Mis datos Personales</Link>
                </li>
                <li>
                  <Link href={"/catalog/mi-cuenta/pedidos"}><RiShoppingBasketFill className="text-accent"/> Mis pedidos</Link>
                </li>
                <li>
                  <Link href={"/catalog/mi-cuenta/resenias"}><MdRateReview className="text-accent"/> Mis reseñas</Link>
                </li>
                <hr className="bg-black"/>
                <li>
                  <Link href={"/"}><CgLogOff className="text-base text-accent"/> Cerrar sesion</Link>
                </li>
              </ul>
            </div>
            <Link
              className=" min-w-[80%] sm:min-w-[40%]"
              href={"/admin"}
            ></Link>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-vertical px-1">
              <li tabIndex={1}>
                <Link className="text-base" href={"/catalog/mi-cuenta"}>
                  <BsFillPersonLinesFill className="text-xl text-accent"/> Mis datos Personales
                </Link>
              </li>
              <li tabIndex={1}>
                <Link className="text-base" href={"/catalog/mi-cuenta/pedidos"}>
                  <RiShoppingBasketFill className="text-xl text-accent"/> Mis pedidos
                </Link>
              </li>
              <li tabIndex={1}>
                <Link className="text-base" href={"/catalog/mi-cuenta/resenias"}>
                  <MdRateReview className="text-xl text-accent"/> Mis reseñas
                </Link>
              </li>
              <hr className="bg-black"/>
              <li tabIndex={1}>
                <Link className="text-base" href={"/"}>
                  <CgLogOff className="text-2xl text-accent"/> Cerrar sesion
                </Link>
              </li>
            </ul>
          </div>
        </div>



        <div className="flex flex-col justify-center md:justify-start items-center bg-base-100 w-[90%] mx-[5%] mb-[5%] md:w-[300%] md:mx-[0%] md:mr-[8%] md:my-[10vh] rounded-2xl border-2 border-neutral/30 drop-shadow-lg px-2 pt-2 pb-6 ">
          <h1 className="w-full font-bold ml-3 p-2" >MIS DATOS PERSONALES</h1>

          <form onSubmit={handleSubmit((data)=>{
            console.log(data);
          })} className="w-full">
            <div className="flex flex-col md:flex-row md:flex-wrap justify-start">
              <div className="flex flex-col w-[100%] md:w-[50%]">
                <label className="label ml-3 pb-1">
                  <span className="label-text text-base font-medium">
                    Nombre Completo
                  </span>
                </label>
                <input
                  {...register("nombre", {
                    maxLength: { value: 30, message: "Máximo 40 caracteres" },
                    minLength: { value: 5, message: "Mínimo 5 caracteres" },
                    required: { value: true, message: "El campo es requerido" },
                  })}
                  type="text"
                  placeholder="Ej. Pepito Perez"
                  className="input input-bordered input-sm w-full max-w-[95%] ml-3"
                />
                {errors.nombre?.type === "required" && (
                  <div className=" ml-20 mt-2 badge badge-error gap-2">
                    {errors.nombre.message}
                  </div>
                )}
                {errors.nombre?.type === "maxLength" && (
                  <div className="ml-20 mt-2 badge badge-error gap-2">
                    {errors.nombre.message}
                  </div>
                )}
                {errors.nombre?.type === "minLength" && (
                  <div className="ml-20 mt-2 badge badge-error gap-2">
                    {errors.nombre.message}
                  </div>
                )}
              </div>

              
              <div className="flex flex-col w-[100%] md:w-[50%]">
                <label className="label ml-3 pb-1">
                  <span className="label-text text-base font-medium">
                    Email
                  </span>
                </label>
                <input
                  {...register("email", {
                  })}
                  type="text"
                  placeholder="diego@email.com"
                  className="input input-bordered bg-neutral-200 bg-opacity-70 input-sm w-full max-w-[95%] ml-3"
                  disabled 
                />
              </div>


              <div className="flex flex-col w-[100%] md:w-[50%]">
                <label className="label ml-3 pb-1">
                  <span className="label-text text-base font-medium">
                    DNI
                  </span>
                </label>
                <input
                  {...register("dni", {
                    maxLength: { value: 15, message: "Máximo 40 caracteres" },
                    minLength: { value: 5, message: "Mínimo 5 caracteres" },
                    required: { value: true, message: "El campo es requerido" },
                  })}
                  type="text"
                  placeholder="Ej. CC 12345678"
                  className="appearance-none input input-bordered input-sm w-full max-w-[95%] ml-3 "
                />
                {errors.dni?.type === "required" && (
                  <div className=" ml-20 mt-2 badge badge-error gap-2">
                    {errors.dni.message}
                  </div>
                )}
                {errors.dni?.type === "maxLength" && (
                  <div className="ml-20 mt-2 badge badge-error gap-2">
                    {errors.dni.message}
                  </div>
                )}
                {errors.dni?.type === "minLength" && (
                  <div className="ml-20 mt-2 badge badge-error gap-2">
                    {errors.dni.message}
                  </div>
                )}
              </div>


              <div className="flex flex-col w-[100%] md:w-[50%]">
                <label className="label ml-3 pb-1">
                  <span className="label-text text-base font-medium">
                    Telefono
                  </span>
                </label>
                <input
                  {...register("telefono", {
                    maxLength: { value: 40, message: "Máximo 30 caracteres" },
                    minLength: { value: 5, message: "Mínimo 5 caracteres" },
                    required: { value: true, message: "El campo es requerido" },
                  })}
                  type="text"
                  placeholder="Ej. 3109876543 - 2345678"
                  className="input input-bordered input-sm w-full max-w-[95%] ml-3"
                />
                {errors.telefono?.type === "required" && (
                  <div className=" ml-20 mt-2 badge badge-error gap-2">
                    {errors.telefono.message}
                  </div>
                )}
                {errors.telefono?.type === "maxLength" && (
                  <div className="ml-20 mt-2 badge badge-error gap-2">
                    {errors.telefono.message}
                  </div>
                )}
                {errors.telefono?.type === "minLength" && (
                  <div className="ml-20 mt-2 badge badge-error gap-2">
                    {errors.telefono.message}
                  </div>
                )}
              </div>


              <div className="flex flex-col w-[100%] md:w-[50%]">
                <label className="label ml-3 pb-1">
                  <span className="label-text text-base font-medium">
                    Direccion
                  </span>
                </label>
                <input
                  {...register("direccion", {
                    maxLength: { value: 40, message: "Máximo 40 caracteres" },
                    minLength: { value: 5, message: "Mínimo 5 caracteres" },
                    required: { value: true, message: "El campo es requerido" },
                  })}
                  type="text"
                  placeholder="Ej. Calle falsa 123"
                  className="input input-bordered input-sm w-full max-w-[95%] ml-3"
                />
                {errors.direccion?.type === "required" && (
                  <div className=" ml-20 mt-2 badge badge-error gap-2">
                    {errors.direccion.message}
                  </div>
                )}
                {errors.direccion?.type === "maxLength" && (
                  <div className="ml-20 mt-2 badge badge-error gap-2">
                    {errors.direccion.message}
                  </div>
                )}
                {errors.direccion?.type === "minLength" && (
                  <div className="ml-20 mt-2 badge badge-error gap-2">
                    {errors.direccion.message}
                  </div>
                )}
              </div>

            </div>

            <button type="submit"
                className="flex items-center gap-x-2 first-letter:font-bold btn-accent bg-opacity-80 px-10 py-1 rounded-md ml-3 mt-6 mb-0"
              >                          
                Guardar Cambios
              </button>
          </form>
        </div>
      </div>
    </>  
  );
}

export default MisDatos;