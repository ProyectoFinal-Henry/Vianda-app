import ViandasForm from "@/components/adminLayout/forms/ViandasForm"

const AdminActualizarViadaPage = ({ params }) => {
  return (
    <div>
      {/* <NotAdmin /> ----------------- si no tiene permisos se renderiza este componente, y el resto no*/}
      <ViandasForm viandaId={params.viandaId} />
    </div>
  )
}

export default AdminActualizarViadaPage
