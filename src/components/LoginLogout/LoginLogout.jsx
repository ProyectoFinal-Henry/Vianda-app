"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const LoginLogout = () => {
  const [logeado, setLogeado] = useState(false);

  useEffect(async () => {
    try {
      const response = await axios.get("/api/auth/check");
      if (response.status === 200) {
        setLogeado(true);
      } else {
        setLogeado(false);
      }
    } catch (error) {
      setLogeado(false);
      console.log(error);
    }
  }, []);

  const router = useRouter();

  const login = async () => {
    router.refresh();
    router.push("/admin");
    setLogeado(true);
  };

  const logout = async () => {
    const response = await axios.post("/api/auth/logout");
    if (response.status === 200) {
      setLogeado(false);
      router.refresh();
      router.push("/catalog/login");
    }
    setLogeado(false);
  };

  return (
    <>
      {logeado ? (
        <button onClick={logout}>Logout </button>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </>
  );
};

export default LoginLogout;
