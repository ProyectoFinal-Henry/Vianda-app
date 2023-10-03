"use client";
import { BiCartAdd } from "react-icons/bi";
import { BsFillCartCheckFill } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useCarrito } from "@/context/CarritoContext";
import { UserAuth } from "@/context/AuthContext";
import Image from "next/image";

function NavBar({ tokenData }) {
  const [name, setName] = useState();
  const [logeado, setLogeado] = useState(false);

  const { user, googleLogout } = UserAuth();
  const {
    cantidadTotal,
    precioTotal,
    setFlagLogeed,
    setUserDataCarrito,
    setViandas,
  } = useCarrito();
  const router = useRouter();

  const handleGoogleLogout = async () => {
    setUserDataCarrito({ id: 0 });
    setFlagLogeed(false);
    setViandas([]);
    try {
      const response = await axios.post("/api/auth/logout");
      if (response.status === 200) await googleLogout();
      setLogeado(false);
      setName("");
      router.push("/catalog/login");
      router.refresh();
    } catch (error) {
      await googleLogout();
    }
    document.querySelectorAll(".dropdown").forEach(function (dropdown) {
      dropdown.open = false;
    });
  };

  useEffect(() => {
    if (tokenData) {
      setLogeado(true);
      setName(tokenData.nombre);
    } else {
      setLogeado(false);
      setName("");
    }
  }),
    [tokenData];

  const handleAction = (e) => {
    if (e.target.name === "login") router.push("/catalog/login");
    if (e.target.name === "miCuenta") router.push("/catalog/mi-cuenta");
    document.querySelectorAll(".dropdown").forEach(function (dropdown) {
      dropdown.open = false;
    });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("click", function (e) {
        document.querySelectorAll(".dropdown").forEach(function (dropdown) {
          if (!dropdown.contains(e.target)) {
            dropdown.open = false;
          }
        });
      });
    }
  }, []);

  return (
    <>
      <div className="navbar bg-base-100 shadow md:max-w-[98%] md:mx-auto shadowl-xl px-4">
        <div className="flex-1">
          <Link href="/catalog">
            <Image
              src="https://res.cloudinary.com/deezwetqk/image/upload/c_scale,w_250/v1695171792/logogreen_msunlg.png"
              height={100}
              width={250}
              alt="imagen logo"
              className="  max-w-[180px] md:max-w-[250px] w-auto h-auto"
            />
          </Link>
        </div>
        <div className="flex flex-row items-center justify-between gap-x-2">
          <p className="mx-2">{name}</p>
          <details className="dropdown dropdown-end">
            <summary className="btn bg-opacity-0 border-0 px-0 py-0 w-12 h-12 rounded-full">
              {user ? (
                <img
                  src={user.photoURL}
                  alt="google profile photo"
                  className="rounded-full"
                ></img>
              ) : (
                <BsPersonCircle className=" text-5xl text-emerald-800 " />
              )}
            </summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
              {logeado? (<li>
                <button name="miCuenta" onClick={handleAction}>
                  Mi Cuenta
                </button>
              </li>) : (null)}
              <li>
                {!logeado ? (
                  <button name="login" onClick={handleAction}>
                    Iniciar Sesión
                  </button>
                ) : (
                  <button name="logout" onClick={handleGoogleLogout}>
                    Cerrar Sesión
                  </button>
                )}
              </li>
            </ul>
          </details>
          <details className="dropdown dropdown-end">
            <summary className="btn bg-opacity-0 border-0 px-0 py-0 w-12 h-fit rounded-full mb-1">
              <div className="indicator ">
                <span className="badge badge-sm badge-primary indicator-item">
                  {cantidadTotal}
                </span>
                <BiCartAdd className="text-3xl text-warning" />
              </div>
            </summary>
            <ul className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
              <div className="card-body px-2">
                <span className="font-bold text-lg">{`${cantidadTotal} Items`}</span>
                <span className="text-base ">
                  Subtotal:{" "}
                  <span className="font-extrabold ml-2 text-xl">
                    ${precioTotal}
                  </span>
                </span>
                <div className="card-actions">
                  <Link href={"/catalog/checkout"}>
                    <button className="btn btn-primary btn-sm btn-block">
                      Mi Menu Semanal
                    </button>
                  </Link>
                </div>
              </div>
            </ul>
          </details>
        </div>
      </div>
    </>
  );
}

export default NavBar;
