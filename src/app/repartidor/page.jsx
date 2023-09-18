"use client";

import React from "react";
import { FiAward } from "react-icons/fi";
import axios from "axios";
import { useEffect, useState } from "react";
import NotAdmin from "@/components/adminLayout/NotAdmin";

const RepartidorDashboard = () => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {

      axios.get("/api/auth/check").then((res) => {
        if (res.data.rol !== "repartidor") {
          setAuth(false);
        } else {
          setAuth(true);
        }
      });
  }, []);

  return (
    <div>
      {auth ? ( 
        <>
          <div className="flex flex-col bg-base-100 items-center justify-center text-center text-4xl z-50 top-0 left-0 right-0 bottom-0 fixed">
            <p>Bienvenido al Dashboard de Repartidor.</p>
            <p>Aquí se visualizarán los pedidos pendientes a entregar.</p>
            </div>
        </>
       ) : (
        <NotAdmin />
      )} 
    </div>
  );
};

export default RepartidorDashboard;
