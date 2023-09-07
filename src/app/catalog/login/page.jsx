"use client"

import Link from "next/link"
import { useState } from 'react'

const LoginCatalogPage = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className="min-h-screen flex flex-col mt-12 items-center ">
        <h1 className="text-xl font-bold uppercase">INICIAR SESIÓN</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-row mt-8">
            <div className="flex flex-col mx-2">
              <span className="label-text text-sm font-medium mb-1">Email</span>
              <input
                className="w-48"
                type="text"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col mx-2">
              <span className="label-text text-sm font-medium mb-1">Contraseña</span>
              <input
                className="w-48"
                type="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>
          </div>
          <div className="flex mt-5 text-sm">
            <Link
              href="">Olvidé mi contraseña
            </Link>
          </div>
          <div className="flex mt-5">
            <button
              type="submit"
              className="btn-primary px-32 py-0.5 rounded-md"
            >
              Iniciar sesión segura
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default LoginCatalogPage
