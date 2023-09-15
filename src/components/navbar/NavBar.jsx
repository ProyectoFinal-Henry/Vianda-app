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

  const loginLogout = async () => {
    const response = await axios.get("/api/auth/check")
    if (response.status === 200) {
      await axios.post("/api/auth/logout")
    }
    router.refresh()
    router.push("/catalog/login")
  }

  return (
    <>
      <div className="navbar bg-base-100 shadow  shadowl-xl">
        <div className="flex-1">
          <Link href="/catalog">
            <Image
              width={150}
              height={100}
              src="/verde.png"
              alt="imagen logo"
              className=" h-auto w-auto"
            />
          </Link>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <span className="badge badge-sm indicator-item">{cantidadTotal}</span>
                <BiCartAdd className="text-2xl" />
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">{`${cantidadTotal} Items`}</span>
                <span className="text-info">Subtotal: ${precioTotal}</span>
                <div className="card-actions">
                  <Link href={"/catalog/checkout"}>
                    <button className="btn btn-primary btn-sm btn-block">Ver carrito</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <BsPersonCircle className=" text-4xl text-center" />
              </div>
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
              <li>
                <a>Settings</a>
              </li>
              <li>
                <button onClick={loginLogout}>Login/Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar
