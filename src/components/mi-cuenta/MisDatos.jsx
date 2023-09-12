"use client";
import { useEffect, useState } from "react"
import { CgLogOff } from "react-icons/cg"; 
import { RiShoppingBasketFill } from "react-icons/ri"; 
import { MdRateReview } from "react-icons/md"; 
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { FiMenu } from "react-icons/fi";
import axios from "axios";
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
  },
});

/*   useEffect(() => {
    if (usuarioId) {
      ;(async () => {
        const toUpdateReq = await axios(`/api/usuarios/${usuarioId}`)
        const data = toUpdateReq.data
        setValue("nombre", data.nombreCompleto)
        setValue("email", data.email)
        setValue("dni", data.dni)
        setValue("telefono", data.telefono)
        setValue("direccion", data.direccion)
        // setIdDb(data.id)
      })()
    }
  }, [usuarioId, setValue]) */

  useEffect(async () => {
      const response = await axios.get('/api/auth/check')
      //la petición get a /check lo que hace es traer todos los datos de la sesión que están guardadas en el token
      setValue("nombre", response.data.nombre)
      setValue("email", response.data.email)
      setValue("dni", response.data.dni)
      setValue("telefono", response.data.telefono)
      setValue("direccion", response.data.direccion)
  }, [])


  const onSubmit = handleSubmit((data) => {
    console.log(data);
    reset();
  });

    // const onSubmit = handleSubmit(async (data) => {
  //   const {nombreCompleto, email, dni, telefono, direccion } = data
    
  //   const formData = new FormData()
  //   formData.append("nombre", nombreCompleto)
  //   formData.append("email", email)
  //   formData.append("dni", dni)
  //   formData.append("telefono", telefono)
  //   formData.append("direccion", direccion)

  //   if (usuarioId) {
  //     formData.append("id", idDb)
  //   }
    
  //   await new Promise((resolve) => setTimeout(resolve, 1000))  
  //     const UserUpdate = await axios.put(`/api/usuarios/${data.id}`, data)

  // });

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

          <form onSubmit={onSubmit} 
                className="w-full">
            <div className="flex flex-col md:flex-row md:flex-wrap justify-start">
              <div className="flex flex-col w-[100%] md:w-[50%]">
                <label className="label ml-3 pb-1">
                  <span className="label-text text-base font-medium">
                    Nombre Completo
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Nombre Completo"
                  className="input input-bordered input-sm w-full max-w-[95%] ml-3"
                  {...register("nombre", {
                    maxLength: { value: 30, message: "Se ha excedido del maximo de 30 caracteres" },
                    minLength: { value: 3, message: "El nombre debe tener al menos 3 caracteres" },
                    required: { value: true, message: "Este campo es requerido" },
                    pattern: { value: /^[A-Za-z\s]+$/, message: "No debe contener números ni símbolos" },
                  })}
                />
                {errors.nombre && (
                <span className="mt-1 text-xs text-warning ml-3">
                  {errors.nombre.message}
                </span>
              )}
              </div>

              
              <div className="flex flex-col w-[100%] md:w-[50%]">
                <label className="label ml-3 pb-1">
                  <span className="label-text text-base font-medium">
                    Email
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="email@example.com"
                  className="input input-bordered bg-neutral-200 bg-opacity-70 input-sm w-full max-w-[95%] ml-3"
                  disabled 
                  {...register("email", {
                  })}
                />
              </div>


              <div className="flex flex-col w-[100%] md:w-[50%]">
                <label className="label ml-3 pb-1">
                  <span className="label-text text-base font-medium">
                    DNI
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="DNI"
                  className="appearance-none input input-bordered input-sm w-full max-w-[95%] ml-3 "
                  {...register("dni", {
                    maxLength: { value: 12, message: "El campo acepta maximo 12 caracteres" },
                    minLength: { value: 5, message: "El campo debe tener al menos 5 caracteres" },
                    required: { value: true, message: "Este campo es requerido" },
                    pattern: { value: /^[0-9]+$/, message: "Debe contener solo debe contener números" },
                  })}
                />
                {errors.dni && (
                <span className="mt-1 text-xs text-warning ml-3">
                  {errors.dni.message}
                </span>
              )}
              </div>


              <div className="flex flex-col w-[100%] md:w-[50%]">
                <label className="label ml-3 pb-1">
                  <span className="label-text text-base font-medium">
                    Teléfono
                  </span>
                </label>
                <input
                  type="tel"
                  placeholder="Teléfono"
                  className="input input-bordered input-sm w-full max-w-[95%] ml-3"
                  {...register("telefono", {
                    pattern: { value: /^[0-9]+$/, message: "Solo debe contener números" },
                    required: { value: true, message: "El campo es requerido" },
                  })}
                />
                {errors.telefono && (
                <span className="mt-1 text-xs text-warning ml-3">
                  {errors.telefono.message}
                </span>
              )}                
              </div>


              <div className="flex flex-col w-[100%] md:w-[50%]">
                <label className="label ml-3 pb-1">
                  <span className="label-text text-base font-medium">
                    Dirección
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Dirección"
                  className="input input-bordered input-sm w-full max-w-[95%] ml-3"
                  {...register("direccion", {
                    maxLength: { value: 30, message: "Máximo de numeros excedido" },
                    minLength: { value: 5, message: "Mínimo 5 caracteres" },
                    required: { value: true, message: "Este campo es requerido" },
                  })}
                />
                {errors.direccion && (
                <span className="mt-1 text-xs text-warning ml-3">
                  {errors.direccion.message}
                </span>
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