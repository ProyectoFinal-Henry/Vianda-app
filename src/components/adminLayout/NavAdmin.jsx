import Image from "next/image"
import Link from "next/link"
import { FiMenu } from "react-icons/fi"

const NavAdmin = () => {
  return (
    <>
      <div
        id="NavAdmin"
        className="navbar bg-accent text-white z-10"
      >
        <div className="navbar-start">
          <div className="dropdown ">
            <label
              tabIndex={0}
              className="btn btn-ghost  lg:hidden"
            >
              <FiMenu className="text-2xl" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-neutral rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2 bg-accent">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <Link
            className=" min-w-[80%] sm:min-w-[40%]"
            href={"/admin"}
          >
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
              <Link href={"/admin/viandas/"}>Viandas</Link>
              {/* <details>
                <summary>Viandas</summary>
                <ul className="p-2 bg-accent   rounded-t-none">
                  <li>
                    <Link href={"/admin/viandas/"}>Ver Todas</Link>
                  </li>
                  <li>
                    <Link href={"/admin/viandas/nueva-vianda"}>Crear Vianda</Link>
                  </li>
                </ul>
              </details> */}
            </li>

            <li tabIndex={2}>
              <details>
                <summary>Menu Diario</summary>
                {/* <ul className="p-2 bg-accent">
                  <li>
                    <a>Ver Todos</a>
                  </li>
                  <li>
                    <a>Crear Nuevo</a>
                  </li>
                </ul> */}
              </details>
            </li>

            <li tabIndex={3}>
              <details>
                <summary>Cartas</summary>
                {/* <ul className="p-2 bg-accent">
                  <li>
                    <a>Ver Todas</a>
                  </li>
                  <li>
                    <a>Crear Nueva</a>
                  </li>
                </ul> */}
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            className="ink link-primary font-extrabold mr-10 "
            href={"/"}
          >
            Salir Del Admin
          </Link>
        </div>
      </div>
    </>
  )
}

export default NavAdmin
