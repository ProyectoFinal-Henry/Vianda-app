"use client";

import Image from "next/image";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import axios from "axios";
import { useRouter } from "next/navigation";

const NavAdmin = () => {
  const router = useRouter();

  const logout = async () => {
    const response = await axios.post("/api/auth/logout");
    if (response.status === 200) {
      router.refresh();
      router.push("/catalog");
    }
  };

  return (
    <>
      <div id="NavAdmin" className="navbar bg-accent text-white z-10 text-lg">
        <div className="navbar-start">
          <div className="dropdown ">
            <label tabIndex={0} className="btn btn-ghost  lg:hidden">
              <FiMenu className="text-2xl" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-accent rounded-box w-52"
            >
              <li>
                <Link href={"/admin/viandas/"}>Viandas</Link>
              </li>
              <li>
                <Link href={"/admin/pedidos/"}>Pedidos</Link>
              </li>
              <li>
                <Link href={"/admin/usuarios/"}>Usuarios</Link>
              </li>
            </ul>
          </div>
          <Link className=" min-w-[80%] sm:min-w-[40%]" href={"/admin"}>
            <Image
              id="logo"
              className="min-w-full"
              width={"40"}
              height={"40"}
              alt="logo ViandApp"
              src={"/images/corporate/logoViandApp.svg"}
            />
          </Link>
        </div>
        <div className="navbar-center hidden  lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li tabIndex={1}>
              <Link className="text-lg" href={"/admin/viandas/"}>
                Viandas
              </Link>
            </li>
            <li tabIndex={1}>
              <Link className="text-lg" href={"/admin/pedidos/"}>
                Pedidos
              </Link>
            </li>
            <li tabIndex={1}>
              <Link className="text-lg" href={"/admin/usuarios"}>
                Usuarios
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <button
            onClick={logout}
            className="ink link-primary font-extrabold mr-0 md:mr-10 "
            href={"/"}
          >
            Salir Del Admin
          </button>
        </div>
      </div>
    </>
  );
};

export default NavAdmin;
