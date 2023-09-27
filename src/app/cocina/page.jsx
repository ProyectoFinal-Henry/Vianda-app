import axios from "axios"
import PedidosCocina from "@/components/adminCocina/PedidosCocina"
export const dynamic = "force-dynamic"
const AdminCocina = async () => {
  const resPedido = await axios.get(`${process.env.LOCALHOST}/api/pedidos`)
  const dataPedido = resPedido.data

  return (
    <>
      <PedidosCocina dataPedido={dataPedido} />
    </>
  )
}

export default AdminCocina
