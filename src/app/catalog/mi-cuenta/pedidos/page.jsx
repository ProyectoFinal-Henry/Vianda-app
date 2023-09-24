import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import Pedidos from "@/components/mi-cuenta/Pedidos";
import Detalle from "@/components/detailll/Detalle";
import axios from "axios";

async function MisPedidos() {
  const cookieStore = cookies();
  const token = cookieStore.get("myToken");
  let tokenData = null;

  if (token) {
    try {
      tokenData = jwt.verify(token.value, "secret");
    } catch (error) {
      // Maneja el error si la verificación falla
      console.error("Error al verificar el token:", error);
    }
  }

  const res = await axios.get(`${process.env.LOCALHOST}/api/viandas`)
  const data = res.data

  return (
    <>
      <Detalle data={data} />
      <Pedidos tokenData={tokenData} />
    </>
  );
}

export default MisPedidos;
