"use client"

import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import Link from "next/link"
import Image from "next/image"
import LoginLogout from '@/components/LoginLogout/LoginLogout'

import { useCarrito } from '@/context/CarritoContext'

function NavBar() {

  const {cantidadTotal} = useCarrito();
  
  const [logeado, setLogeado] = useState(false)

/*   useEffect(async () => {
    try {
      const response = await axios.get("/api/auth/check");
      if (response.status === 200){
        setLogeado(true)
      }
      else{
        setLogeado(false)
      }

    } catch (error) {
      setLogeado(false)
      console.log(error)
    }
  }, []) */

  const router = useRouter()

/*     const login = async () =>{
      router.refresh()
      router.push('/catalog/login')
    }

    const logout = async () =>{
        const response = await axios.post("/api/auth/logout")
        if (response.status === 200){
          router.refresh()
          router.push('/catalog/login')
        }
      } */


  return (
    <>
      {/* <nav className="bg-primary">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-3">
        

        <ul className="flex text-lg font-bold">
          <li className="btn btn-primary font-bold">
            <Link href="/catalog/registro">Registrarse</Link>
          </li>
          <li className="btn btn-primary font-bold">
            <Link href="/catalog/login">Ingresar</Link>
          </li>
        </ul>
      </div>
    </nav> */}
      <div className="navbar bg-base-100 shadow  shadowl-xl">
        <div className="flex-1">
          <Link href="/">
            <Image
              width={150}
              height={100}
              src="/verde.png"
              alt="imagen logo"
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">{cantidadTotal}</span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">{`${cantidadTotal} Items`}</span>
                <span className="text-info">Subtotal: $999</span>
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
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
             <a>Login</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar
