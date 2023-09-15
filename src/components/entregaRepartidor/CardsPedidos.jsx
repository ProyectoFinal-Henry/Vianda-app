const CardsPedidos = () => {
  return (
    <div id="contenedorPrincipal">
      <div
        id="contenedorEstado"
        className=" flex flex-col items-center justify-center"
      >
        <h1 className="text-center">Estado de pedidos</h1>

        <div id="contenedorPedidos" className="flex flex-row">
          <p>Total: xx</p>
          <p>Listos: xx</p>
          <p>Pendientes:XX</p>
        </div>
        <div className="flex flex-row gap-3">
          <button>listos</button>
          <button>Pendientes</button>
        </div>
      </div>
    </div>
  );
};
export default CardsPedidos;
