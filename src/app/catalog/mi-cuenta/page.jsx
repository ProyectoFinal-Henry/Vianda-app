import MisDatos from "@/components/mi-cuenta/MisDatos";
import axios from "axios";

async function MiCuenta() { 

  const res = await axios.get(`${process.env.LOCALHOST}/api/usuarios`)
  const data = res.data

  return (
    <>
      <MisDatos data={data}/>
    </>
  );
}

export default MiCuenta;
