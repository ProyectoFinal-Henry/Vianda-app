import UsuariosForm from "@/components/adminLayout/forms/UsuariosForm"
import RowResponsive from "@/components/formaters/RowResponsive"
import { UserFormRegister } from "@/components/register/UserFormRegister"
import { cookies } from "next/headers"
import jwt from "jsonwebtoken"

const NewUserPageAdmin = () => {
  const cookieStore = cookies()
  const token = cookieStore.get("myToken")
  let tokenData = null

  if (token) {
    try {
      tokenData = jwt.verify(token.value, "secret")
    } catch (error) {
      // Maneja el error si la verificación falla
      console.error("Error al verificar el token:", error)
    }
  }

  return (
    <>
      <RowResponsive>
        <UserFormRegister rol={tokenData.rol} />
      </RowResponsive>
    </>
  )
}

export default NewUserPageAdmin
