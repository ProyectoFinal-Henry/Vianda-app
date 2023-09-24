import MisDatos from "@/components/mi-cuenta/MisDatos";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import RowResponsive from "@/components/formaters/RowResponsive";

function MiCuenta() {
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
        <MisDatos tokenData={tokenData} />      
    </>
  );
}

export default MiCuenta;
