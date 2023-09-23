import AdminDashboard from "@/components/adminLayout/AdminDashboard";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import NotAdmin from "@/components/adminLayout/NotAdmin";

const AdminPage = () => {
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
    <>{tokenData.rol === "administrador" ? <AdminDashboard /> : <NotAdmin />}</>
  );
};

export default AdminPage;
