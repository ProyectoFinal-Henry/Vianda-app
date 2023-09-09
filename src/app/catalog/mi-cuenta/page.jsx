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
      <div className="flex flex-col md:flex-row justify-start items-start" >

        <div id="NavAdmin" className="navbar text-black z-10 text-lg ">

          <div className="navbar-start ">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost  md:hidden">
                <FiMenu className="text-2xl" />
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52"
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

          <div className="navbar-center hidden  lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li tabIndex={1}>
                <Link className="text-lg" href={"/admin/viandas/"}>
                  Viandas
                </Link>
              </li>
              <li tabIndex={1}>
                <Link className="text-lg" href={"/admin/viandas/"}>
                  Menu Diario
                </Link>
              </li>
              <li tabIndex={1}>
                <Link className="text-lg" href={"/admin/viandas/"}>
                  Cartas
                </Link>
              </li>
            </ul>
          </div>
        </div>




        <div className="flex flex-col justify-center  items-center bg-base-100 w-[90%] mx-[5%] my-[5%] md:w-[70%] md:mx-auto rounded-2xl border-2 border-neutral/30 drop-shadow-lg px-2 py-6 md:my-[10vh] ">
          <h1>MIS DATOS PERSONALES</h1>

          <form className="w-full">
            <div className="flex flex-col md:flex-grow justify-start">
              <div className="flex flex-col w-[50%]">
                <label className="label ml-3 pb-1">
                  <span className="label-text text-lg font-medium">
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
                  className="input input-bordered w-full max-w-[95%] ml-3"
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

              <div className="flex flex-col w-[50%]">
                <label className="label ml-3 pb-1">
                  <span className="label-text text-lg font-medium">
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
                  className="input input-bordered w-full max-w-[95%] ml-3"
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
