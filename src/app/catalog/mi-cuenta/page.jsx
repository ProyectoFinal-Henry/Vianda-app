import MisDatos from "@/components/mi-cuenta/MisDatos";
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'

function MiCuenta() {
  const cookieStore = cookies()
  const token = cookieStore.get('myToken')
  const tokenData = jwt.verify(token.value, 'secret')  

  return (
    <>
      <MisDatos tokenData={tokenData} />
    </>
  );
}

export default MiCuenta;
