"use client"

import axios from 'axios'
import {useState, useEffect} from 'react'
import NavAdmin from "@/components/adminLayout/NavAdmin"
import Footer from "@/components/footer/Footer"
import  NotAdmin  from '@/components/adminLayout/NotAdmin'

const layoutAdmin = ({ children }) => {

  const [auth, setAuth] = useState(false)

  useEffect(() => {
    try {
      axios.get('/api/auth/check').then((res) => {
        if (res.data.rol === "administrador") {
          setAuth(true);
        } else {
          setAuth(false);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

return (
  <>
    {auth ? (
      <>
        <NavAdmin />
        {children}
        <Footer />
      </>
    ) : (
      <NotAdmin />
    )}
  </>
);
}

export default layoutAdmin
