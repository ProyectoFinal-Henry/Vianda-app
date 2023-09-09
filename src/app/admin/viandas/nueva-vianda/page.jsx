import ViandasForm from "@/components/adminLayout/forms/ViandasForm"
import  NotAdmin  from '@/components/adminLayout/NotAdmin'

const AdminNuevaViandaPage = () => {
  return (
    <>
    {/* <NotAdmin /> ----------------- si no tiene permisos se renderiza este componente, y el resto no*/} 
      <ViandasForm />
    </>
  )
}

export default AdminNuevaViandaPage
