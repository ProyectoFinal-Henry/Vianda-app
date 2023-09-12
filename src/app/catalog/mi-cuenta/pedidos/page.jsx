import React from 'react';
import MisPedidos from '@/components/mi-cuenta/MisPedidos';
import axios from "axios";

async function Pedidos() {

  const resPedido = await axios.get(`${process.env.LOCALHOST}/api/pedidos`);
  const dataPedido = resPedido.data[4];

  const resDetalle = await axios.get(`${process.env.LOCALHOST}/api/pedidos`);
  const dataDetalle = resDetalle.data[4]["detallePedido"];

  return (
    <>
      <MisPedidos dataPedido={dataPedido} dataDetalle={dataDetalle} />
    </>
  );
}

export default Pedidos;