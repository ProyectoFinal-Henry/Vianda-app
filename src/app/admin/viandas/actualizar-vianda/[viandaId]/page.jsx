import ViandasForm from "@/components/adminLayout/forms/ViandasForm"
import React from "react"

const AdminActualizarViadaPage = ({ params }) => {
  return (
    <div>

      <ViandasForm viandaId={params.viandaId} />
    </div>
  )
}

export default AdminActualizarViadaPage
