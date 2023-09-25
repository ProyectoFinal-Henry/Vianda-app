import NavAdmin from "@/components/adminLayout/NavAdmin";
import Footer from "@/components/footer/Footer";
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'

export const metadata = {
  title: "ViandApp - Administrador",
  description: "",
};

const layoutAdmin = ({ children }) => {
  const cookieStore = cookies();
  const token = cookieStore.get('myToken');
  let tokenData = null; // Inicializamos como null

  if (token) {
    try {
      tokenData = jwt.verify(token.value, 'secret');
    } catch (error) {
      // Maneja el error si la verificación falla
      console.error('Error al verificar el token:', error);
    }
  }
  return (
    <>
      <>
        <NavAdmin tokenData={tokenData} />
        {children}
        <Footer />
      </>
    </>
  );
};

export default layoutAdmin;
