import MisDatos from "@/components/mi-cuenta/MisDatos";
import axios from "axios";

async function MiCuenta({params}) {

  return (
    <>
      <MisDatos usuarioId={params.usuarioId}/>
    </>
  );
}

export default MiCuenta;
