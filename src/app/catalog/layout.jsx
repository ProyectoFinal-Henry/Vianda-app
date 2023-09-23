import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navbar/NavBar";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export const metadata = {
  title: "ViandApp - Comida Saludable",
  description: "",
};

const layoutAdmin = ({ children }) => {
  const cookieStore = cookies();
  const token = cookieStore.get("myToken");
  let tokenData = null; // Inicializamos como null

  if (token) {
    try {
      tokenData = jwt.verify(token.value, "secret");
    } catch (error) {
      // Maneja el error si la verificación falla
      console.error("Error al verificar el token:", error);
    }
  }
  return (
    <div>
      <NavBar tokenData={tokenData} />
      {children}
      <Footer tokenData={tokenData} />
    </div>
  );
};

export default layoutAdmin;
