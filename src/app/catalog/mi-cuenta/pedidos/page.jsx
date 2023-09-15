"use client"
import React from 'react';
import { useEffect, useState } from "react";
import MisPedidos from '@/components/mi-cuenta/MisPedidos';
import axios from "axios";

function Pedidos() {

  const [userData, setUserData] = useState({
    id: null,
  });

  useEffect(() => {
    try {
      //la petición get a /check lo que hace es traer todos los datos de la sesión que están guardadas en el token
      axios.get("/api/auth/check").then((res) => {
        setUserData({
          id: res.data.id,
        });
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <MisPedidos userData={userData}/>
    </>
  );
}

export default Pedidos;