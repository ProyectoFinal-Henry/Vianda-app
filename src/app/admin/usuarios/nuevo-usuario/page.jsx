import UsuariosForm from "@/components/adminLayout/forms/UsuariosForm"
import RowResponsive from "@/components/formaters/RowResponsive"
import { UserFormRegister } from "@/components/register/UserFormRegister"

const NewUserPageAdmin = () => {
  return (
    <>
      <RowResponsive>
        <UserFormRegister />
      </RowResponsive>
    </>
  )
}

export default NewUserPageAdmin
