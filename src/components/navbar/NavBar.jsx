"use client"
import { BiCartAdd } from "react-icons/bi"
import { BsFillCartCheckFill } from "react-icons/bs"
import { BsPersonCircle } from "react-icons/bs"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Link from "next/link"
import { useCarrito } from "@/context/CarritoContext"
import { UserAuth } from "@/context/AuthContext"
import Image from "next/image"

function NavBar({tokenData}) {
  const [name, setName] = useState()
  const [logeado, setLogeado] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [carritoOpen, setCarritoOpen] = useState(false)

  const { user, googleLogout } = UserAuth()
  const { cantidadTotal, precioTotal, setFlagLogeed, setUserDataCarrito, setViandas } = useCarrito()
  const router = useRouter()

  const handleGoogleLogout = async () => {
    setUserDataCarrito({id:0})
    setFlagLogeed(false)
    setViandas([])
    try {
      const response = await axios.post("/api/auth/logout")
      if (response.status === 200) await googleLogout()
      setLogeado(false)
      setName("")
      router.push("/catalog/login")
      router.refresh()
    } catch (error) {
      await googleLogout()
    }
  }

   useEffect(() => {
    
      if (tokenData) {
        setLogeado(true)
        setName(tokenData.nombre)
      } else {
        setLogeado(false)
        setName("")
      }
  }),
    [tokenData]

  return (
    <>
      <div className="navbar bg-base-100 shadow md:max-w-[98%] md:mx-auto shadowl-xl px-4">
        <div className="flex-1">
          <Link href="/catalog">
            <Image
              src="https://res.cloudinary.com/deezwetqk/image/upload/v1695171792/logogreen_msunlg.png"
              height={100}
              width={250}
              alt="imagen logo"
              className="  max-w-[180px] md:max-w-[250px] "
            />
          </Link>
        </div>

        <div className="flex flex-row-reverse items-center justify-between gap-x-2 ">
          <div
            className="dropdown dropdown-end "
            onClick={() => setCarritoOpen(!carritoOpen)}
          >
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator ">
                <span className="badge badge-sm badge-primary indicator-item">{cantidadTotal}</span>
                <BiCartAdd className="text-4xl text-warning" />
              </div>
            </label>
            <div
              tabIndex={0}
              className={`mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow ${carritoOpen ? "hidden" : ""}`}
            >
              <div className="card-body">
                <span className="font-bold text-lg">{`${cantidadTotal} Items`}</span>
                <span className="text-base ">
                  Subtotal: <span className="font-extrabold ml-2 text-xl">${precioTotal}</span>
                </span>
                <div className="card-actions">
                  <Link href={"/catalog/checkout"}>
                    <button className="btn btn-primary btn-sm btn-block">Mi Menu Semanal</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="dropdown dropdown-end items-center block "
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar mt-1"
            >
              {user ? (
                <img
                  src={user.photoURL}
                  alt="google profile photo"
                  className="rounded-full"
                ></img>
              ) : (
                <BsPersonCircle className=" text-5xl text-emerald-800 " />
              )}
            </label>
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ${menuOpen ? "hidden" : ""}`}
            >
              {logeado? (
                <li>
                <Link
                  href={"/catalog/mi-cuenta"}
                  className="justify-between"
                >
                  Mi Cuenta
                </Link>
              </li>
              ) : (null)}
              

              <li>
                {!logeado ? (
                  <Link href="/catalog/login">Iniciar Sesión</Link>
                ) : (
                  <button onClick={handleGoogleLogout}>Cerrar Sesión</button>
                )}
              </li>
            </ul>
          </div>
          <p className="mx-4 ">{name}</p>
        </div>
      </div>
    </>
  )
}

export default NavBar
