"use client"

import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const LoginLogout = () => {

  const [logeado, setLogeado] = useState(false)

  const login = () =>{
    router.push('/catalog/mi-cuenta')
  }

  const logout = async () =>{
      const response = await axios.post("/api/auth/logout")
      if (response.status === 200){
        setLogeado(false)
        router.push('/catalog/login')
      }
    }

  useEffect( () => {
    try {
      axios.get("/api/auth/check").then((res) => {
        if (res.status === 200){
          setLogeado(true)
        }
        else{
          setLogeado(false)
        }
      })
    } catch (error) {
      console.log(error)
    }
  }, [login, logout])
  

  const router = useRouter()
 

      return (
        <>
        {logeado? (<button onClick={logout}>Cerrar Sesión</button>) : (<button onClick={login}>Iniciar Sesión</button>)}
        </>
        )
}

export default LoginLogout