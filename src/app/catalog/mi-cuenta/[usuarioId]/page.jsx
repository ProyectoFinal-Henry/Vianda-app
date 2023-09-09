import MisDatos from "@/components/mi-cuenta/MisDatos";

async function MiCuenta({params}) {

  return (
    <>
      <MisDatos usuarioId={params.usuarioId}/>
    </>
  );
}

export default MiCuenta;
