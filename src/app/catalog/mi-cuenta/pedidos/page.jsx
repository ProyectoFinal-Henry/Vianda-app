import Pedidos from "@/components/mi-cuenta/Pedidos";
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'

function PedidosPage() {
  const cookieStore = cookies()
  const token = cookieStore.get('myToken')
  const tokenData = jwt.verify(token.value, 'secret')  

  return (
    <>
      <Pedidos tokenData={tokenData} />
    </>
  );
}

export default PedidosPage;