"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import LoadingComponentApp from "@/app/loading";
import axios from 'axios'
import { useRouter } from "next/navigation";
import { UserAuth } from "@/context/AuthContext"

const NotAdmin = () => {
  const {user, googleLogout} = UserAuth()
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, []);

  const logout = async () =>{
    try {
      const response = await axios.post("/api/auth/logout")
      if (response.status === 200) await googleLogout()
      router.push('/catalog/login')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {isLoading ? (
        <div className="min-h-screen">
          <LoadingComponentApp />
        </div>
      ) : (
        <div className="flex flex-col bg-base-100 items-center justify-center text-center text-4xl z-50 top-0 left-0 right-0 bottom-0 fixed">
          No tienes los permisos para ingresar a esta sección.
          <div className="flex flex-row gap-10">
            <Link href="/catalog">
              <button className="mt-10 bg-accent text-white px-6 py-3 rounded-3xl text-[14px] transition-transform hover:scale-110 text-lg font-semibold ">
                Volver al Home
              </button>
            </Link>
            <Link href="/catalog/login">
              <button
              onClick={logout}
              className="mt-10 bg-accent text-white px-6 py-3 rounded-3xl text-[14px] transition-transform hover:scale-110 text-lg font-semibold ">
                Ingresar como Administrador
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default NotAdmin;