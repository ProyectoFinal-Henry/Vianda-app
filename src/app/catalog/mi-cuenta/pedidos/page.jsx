import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import Pedidos from "@/components/mi-cuenta/Pedidos";

function MisPedidos() {
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

  return (
    <>
      <Pedidos tokenData={tokenData} />
    </>
  );
}

export default MisPedidos;
