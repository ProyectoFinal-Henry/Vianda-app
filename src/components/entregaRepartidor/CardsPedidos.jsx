// .
// .
const CardsPedidos = ({ pedidos, setPedidos }) => {
  return (
    <div
      id="contenedorPrincipal"
      className="flex flex-col items-center justify-center"
    >
      <div id="contenedorDatosPedidos">
        {pedidos.map((ele) => {
          return (
            <div
              id="Datos"
              key={ele.id}
              className="flex flex-col gap-2 border border-solid p-3 mt-3 rounded border-neutral-600"
            >
              <div id="Pedido">
                <p>{`PEDIDO:# ${ele.idTransaccion}`}</p>
              </div>

              <div id="direccion">
                <p>Dirección:</p>
                <p>{ele.usuario.direccion}</p>
              </div>

              <div id="cliente">
                <p>Cliente:</p>
                <p> {ele.usuario.nombreCompleto}</p>
              </div>

              {ele.detallePedido.map((element) => (
                <div key={element.pedidoId}>
                  <span>Vianda:</span>
                  <p>{element.viandaNombre}</p>
                  <div className="flex flex-row gap-1">
                    <span>Cantidad de viandas :</span>
                    <p>{element.cantidad}</p>
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>
      <div id="contenedorBotones">
        <button></button>
        <button></button>
        <button></button>
        <button></button>
      </div>
    </div>
  );
};
export default CardsPedidos;
