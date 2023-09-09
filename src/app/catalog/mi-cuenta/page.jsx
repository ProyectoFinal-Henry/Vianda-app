"use client";
import { useForm } from "react-hook-form";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";

function MiCuenta() {
  const {
    register,
    formState: { errors },
  } = useForm();

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
                  <Link href={"/admin/viandas/"}>Mis datos Personales</Link>
                </li>
                <li>
                  <Link href={"/admin/viandas/"}>Mis pedidos</Link>
                </li>
                <li>
                  <Link href={"/admin/viandas/"}>Mis reseñas</Link>
                </li>
                <li>
                  <Link href={"/admin/viandas/"}>Cerrar sesion</Link>
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
                <Link className="text-base" href={"/admin/viandas/"}>
                  Mis datos Personales
                </Link>
              </li>
              <li tabIndex={1}>
                <Link className="text-base" href={"/admin/viandas/"}>
                  Mis pedidos
                </Link>
              </li>
              <li tabIndex={1}>
                <Link className="text-base" href={"/admin/viandas/"}>
                    Mis reseñas
                </Link>
              </li>
              <li tabIndex={1}>
                <Link className="text-base" href={"/admin/viandas/"}>
                    Cerrar sesion
                </Link>
              </li>
            </ul>
          </div>
        </div>




        <div className="flex flex-col justify-center md:justify-start items-center bg-base-100 w-[90%] mx-[5%] mb-[5%] md:w-[300%] md:mx-[0%] md:mr-[8%] md:my-[10vh] rounded-2xl border-2 border-neutral/30 drop-shadow-lg px-2 pt-2 pb-6 ">
          <h1 className="w-full font-bold ml-3 p-2" >MIS DATOS PERSONALES</h1>

          <form className="w-full">
            <div className="flex flex-col md:flex-row md:flex-wrap justify-start">
              <div className="flex flex-col w-[100%] md:w-[50%]">
                <label className="label ml-3 pb-1">
                  <span className="label-text text-base font-medium">
                    Nombre Completo
                  </span>
                </label>
                <input
                  {...register("nombre", {
                    maxLength: { value: 40, message: "Máximo 40 caracteres" },
                    minLength: { value: 5, message: "Mínimo 5 caracteres" },
                    required: { value: true, message: "el campo es requerido" },
                  })}
                  type="text"
                  placeholder="Nombre"
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
                  {...register("nombre", {
                    maxLength: { value: 40, message: "Máximo 40 caracteres" },
                    minLength: { value: 5, message: "Mínimo 5 caracteres" },
                    required: { value: true, message: "el campo es requerido" },
                  })}
                  type="text"
                  placeholder="Nombre"
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
                    DNI
                  </span>
                </label>
                <input
                  {...register("nombre", {
                    maxLength: { value: 40, message: "Máximo 40 caracteres" },
                    minLength: { value: 5, message: "Mínimo 5 caracteres" },
                    required: { value: true, message: "el campo es requerido" },
                  })}
                  type="text"
                  placeholder="Nombre"
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
                    Telefono
                  </span>
                </label>
                <input
                  {...register("nombre", {
                    maxLength: { value: 40, message: "Máximo 40 caracteres" },
                    minLength: { value: 5, message: "Mínimo 5 caracteres" },
                    required: { value: true, message: "el campo es requerido" },
                  })}
                  type="text"
                  placeholder="Nombre"
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
                    Direccion
                  </span>
                </label>
                <input
                  {...register("nombre", {
                    maxLength: { value: 40, message: "Máximo 40 caracteres" },
                    minLength: { value: 5, message: "Mínimo 5 caracteres" },
                    required: { value: true, message: "el campo es requerido" },
                  })}
                  type="text"
                  placeholder="Nombre"
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

              
              

              
            </div>

            <button>Guardar Cambios</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default MiCuenta;
