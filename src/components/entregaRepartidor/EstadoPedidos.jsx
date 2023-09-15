const EstadoPedidos = () => {
  return (
    <div id="contenedorCard">
      <div>
        <h1>Estado de Pedidos</h1>
      </div>

      <div id="contenedorDatosPedidos">
        <div className="flex flex-row">
          <p>Total :</p>
          <p></p>
        </div>
        <div className="flex flex-row">
          <p>Listos:</p>
          <p></p>
        </div>
        <div className="flex flex-row">
          <p>Pendientes:</p>
          <p></p>
        </div>
      </div>

      <div>
        <div>
          <p>Listos</p>
        </div>

        <div>
          <p>Pendientes</p>
        </div>
      </div>
    </div>
  );
};
export default EstadoPedidos;
