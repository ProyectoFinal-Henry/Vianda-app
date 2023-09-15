import UsuariosForm from "@/components/adminLayout/forms/UsuariosForm"

const UpdateUserPageAdmin = ({ params }) => {
  return (
    <div>
      {params.usuarioId}
      <UsuariosForm usuarioId={params.usuarioId} />
    </div>
  )
}

export default UpdateUserPageAdmin
