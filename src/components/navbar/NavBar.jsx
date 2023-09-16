"use client"
import { BiCartAdd } from "react-icons/bi"
import { BsFillCartCheckFill } from "react-icons/bs"
import { BsPersonCircle } from "react-icons/bs"

import axios from "axios"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

import Link from "next/link"
import Image from "next/image"

import { useCarrito } from "@/context/CarritoContext"

function NavBar() {
  const { cantidadTotal, precioTotal } = useCarrito()

  const [logeado, setLogeado] = useState(false)

  const router = useRouter()

  useEffect(() => {
    const loginstatus = async () => {
      const response = await axios.get("/api/auth/check")

      response.data.error && setLogeado(false)
      response.data.id && setLogeado(true)
      router.refresh()
    }

    loginstatus()
  }, [])

  const logout = async () => {
    const log = await axios.post("/api/auth/logout")
    router.refresh()
    router.push("/catalog/login")
    router.refresh()
  }
  return (
    <>
      <div className="navbar bg-base-100 shadow md:max-w-[98%] md:mx-auto shadowl-xl px-4">
        <div className="flex-1">
          <Link href="/catalog">
            <img
              src="/images/corporate/logogreen.png"
              alt="imagen logo"
              className="  max-w-[200px] md:max-w-[250px] "
            />
          </Link>
        </div>
        <div className="flex flex-row-reverse items-center justify-between gap-x-2 ">
          <div className="dropdown dropdown-end">
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
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
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
          <div className="dropdown dropdown-end items-center">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar mt-1"
            >
              <BsPersonCircle
                className=" text-5xl text-emerald-800 
               "
              />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link
                  href={"/catalog/mi-cuenta"}
                  className="justify-between"
                >
                  Mi Cuenta
                </Link>
              </li>

              <li>{logeado ? <button onClick={logout}>Cerrar Sesion</button> : <Link href={"/catalog/login"}>Iniciar Sesion</Link>}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar
