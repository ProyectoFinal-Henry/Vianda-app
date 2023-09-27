"use client";
import { AiFillHome } from "react-icons/ai";
import { useEffect, useState } from "react";
import { CgLogOff } from "react-icons/cg";
import { RiShoppingBasketFill } from "react-icons/ri";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { FiMenu } from "react-icons/fi";
import { FaAngellist } from "react-icons/fa";
import axios from "axios";
import Link from "next/link";
import { UserAuth } from "@/context/AuthContext";
import LoadingComponentApp from "@/app/loading";
import { useRouter } from "next/navigation";
import { useCarrito } from "@/context/CarritoContext";

function MisDatos({ tokenData }) {
  const { setFlagLogeed, setUserDataCarrito, setViandas } = useCarrito();
  const router = useRouter();
  const { user, googleLogout } = UserAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setUserDataCarrito(tokenData);
    setFlagLogeed(true);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      nombre: "",
      email: "",
      dni: "",
      telefono: "",
      direccion: "",
    },
  });

  const [success, setSuccess] = useState(false);
  const [userData, setUserData] = useState({
    nombre: "",
    email: "",
    dni: "",
    telefono: "",
    direccion: "",
    id: null,
  });

  useEffect(() => {
    setValue("nombre", tokenData.nombre);
    setValue("email", tokenData.email);
    setValue("dni", tokenData.dni);
    setValue("telefono", tokenData.telefono);
    setValue("direccion", tokenData.direccion);
    setUserData({
      nombre: tokenData.nombre,
      email: tokenData.email,
      dni: tokenData.dni,
      telefono: tokenData.telefono,
      direccion: tokenData.direccion,
      id: tokenData.id,
    });
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    setIsLoading(true);
  }, [user]);

  const onSubmit = handleSubmit(async (data) => {
    const { id, nombre, email, dni, telefono, direccion } = data;

    const formData = {
      nombreCompleto: nombre,
      email: email,
      dni: dni,
      telefono: telefono,
      direccion: direccion,
      id: id,
    };

    try {
      const updateUser = await axios.put(
        `/api/usuarios/${userData.id}`,
        formData
      );
      const updateToken = await axios.put("/api/auth/modify", formData);
      router.refresh();
      setSuccess(true);

      await new Promise((resolve) => setTimeout(resolve, 2500));
      setSuccess(false);
    } catch (error) {
      console.log(error);
    }
  });

  const handleGoogleLogout = async () => {
    setUserDataCarrito({ id: 0 });
    setFlagLogeed(false);
    setViandas([]);

    try {
      const response = await axios.post("/api/auth/logout");
      if (response.status === 200) await googleLogout();
      router.push("/catalog/login");
      router.refresh();
    } catch (error) {
      await googleLogout();
    }
  };

  return (
    <>
      {isLoading ? (
        <div className="min-h-screen">
          <LoadingComponentApp />
        </div>
      ) : (
        <div className="flex flex-col md:flex-row items-start max-w-full lg:max-w-6xl lg:mx-auto min-h-[90vh]">
          <div
            id="NavAdmin"
            className="navbar text-black z-10 text-lg md:m-10 md:my-[10vh]"
          >
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
                    <Link href={`/catalog/mi-cuenta/`}>
                      <BsFillPersonLinesFill className="text-accent" /> Mis
                      datos Personales
                    </Link>
                  </li>
                  <li>
                    <Link href={"/catalog/mi-cuenta/pedidos"}>
                      <RiShoppingBasketFill className="text-accent" /> Mis
                      pedidos
                    </Link>
                  </li>
                  {/* <hr className="bg-black" /> */}
                  <li>
                    <Link href={"/catalog"}>
                      <AiFillHome className="text-sm text-accent" /> Volver al
                      inicio
                    </Link>
                  </li>
                  <li>
                    <button onClick={handleGoogleLogout}>
                      <CgLogOff className="text-base text-accent" /> Cerrar
                      sesion
                    </button>
                  </li>
                </ul>
              </div>
              <Link
                className=" min-w-[80%] sm:min-w-[40%]"
                href={"/admin"}
              ></Link>
            </div>

            <div className="navbar-center hidden md:flex">
              <ul className="menu menu-vertical px-1">
                <li tabIndex={1}>
                  <Link className="text-base" href={`/catalog/mi-cuenta/`}>
                    <BsFillPersonLinesFill className="text-xl text-accent" />{" "}
                    Mis datos Personales
                  </Link>
                </li>
                <li tabIndex={1}>
                  <Link
                    className="text-base"
                    href={"/catalog/mi-cuenta/pedidos"}
                  >
                    <RiShoppingBasketFill className="text-xl text-accent" /> Mis
                    pedidos
                  </Link>
                </li>
                {/* <hr className="bg-black" /> */}
                <li tabIndex={1}>
                  <Link className="text-base" href={"/catalog"}>
                    <AiFillHome className="text-xl text-accent" /> Volver al
                    inicio
                  </Link>
                </li>
                <li tabIndex={1}>
                  <button onClick={handleGoogleLogout}>
                    <CgLogOff className="text-2xl text-accent" /> Cerrar Sesión
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col justify-center md:justify-start items-center bg-base-100 w-[90%] mx-[5%] mb-[5%] md:w-[300%] md:mx-[4%] md:mr-[8%] md:my-[10vh] rounded-2xl border-2 border-neutral/30 drop-shadow-lg px-2 pt-2 pb-6 ">
            {success && (
              <div className="alert alert-info border-2 font-extrabold my-6 shadow-secondary shadow-xl border-primary flex flex-col justify-center">
                <div className="flex gap-x-2 items-center">
                  <FaAngellist className=" text-4xl" />
                  <span>Usuario actualizado correctamente!</span>
                </div>
              </div>
            )}
            <h1 className="w-full font-bold ml-3 p-2">MIS DATOS PERSONALES</h1>

            <form onSubmit={onSubmit} className="w-full">
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
                      maxLength: {
                        value: 30,
                        message: "Se ha excedido del maximo de 30 caracteres",
                      },
                      minLength: {
                        value: 3,
                        message: "El nombre debe tener al menos 3 caracteres",
                      },
                      required: {
                        value: true,
                        message: "Este campo es requerido",
                      },
                      pattern: {
                        value: /^[A-Za-z\s]+$/,
                        message: "No debe contener números ni símbolos",
                      },
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
                    {...register("email", {})}
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
                      maxLength: {
                        value: 12,
                        message: "El campo acepta maximo 12 caracteres",
                      },
                      minLength: {
                        value: 5,
                        message: "El campo debe tener al menos 5 caracteres",
                      },
                      required: {
                        value: true,
                        message: "Este campo es requerido",
                      },
                      pattern: {
                        value: /^[0-9]+$/,
                        message: "Debe contener solo debe contener números",
                      },
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
                      pattern: {
                        value: /^[0-9]+$/,
                        message: "Solo debe contener números",
                      },
                      required: {
                        value: true,
                        message: "El campo es requerido",
                      },
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
                      maxLength: {
                        value: 30,
                        message: "Máximo de numeros excedido",
                      },
                      minLength: { value: 5, message: "Mínimo 5 caracteres" },
                      required: {
                        value: true,
                        message: "Este campo es requerido",
                      },
                    })}
                  />
                  {errors.direccion && (
                    <span className="mt-1 text-xs text-warning ml-3">
                      {errors.direccion.message}
                    </span>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="flex items-center gap-x-2 first-letter:font-bold btn-accent px-10 py-1 rounded-md ml-3 mt-6 mb-0"
              >
                Guardar Cambios
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default MisDatos;
