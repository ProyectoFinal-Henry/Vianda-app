"use client";

import React from "react";
import { FiAward } from "react-icons/fi";
import axios from "axios";
import { useEffect, useState } from "react";
import NotAdmin from "@/components/adminLayout/NotAdmin";

const AdminDashboard = () => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {

      axios.get("/api/auth/check").then((res) => {
        if (res.data.rol === "administrador") {
          setAuth(true);
        } else {
          setAuth(false);
        }
      });
  }, []);

  return (
    <div>
      {auth ? (
        <>
          <div
            className="w-full min-h-[85vh] hidden md:block bg-contain bg-no-repeat overflow-scroll"
            style={{ backgroundImage: 'url("/demoToDelete/adminD.png")' }}
          >
            <div className="min-h-[1900px]"></div>
          </div>
          <div
            className="w-full min-h-[85vh] md:hidden bg-contain bg-center bg-no-repeat overflow-scroll"
            style={{ backgroundImage: 'url("/demoToDelete/adminM.png")' }}
          >
            <div className="min-h-[1900px]"></div>
          </div>
        </>
      ) : (
        <NotAdmin />
      )}
    </div>
  );
};

export default AdminDashboard;
