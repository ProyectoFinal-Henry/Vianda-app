import RowResponsive from "@/components/formaters/RowResponsive"
import { currencyFormater } from "@/libs/utils/currencyFormater"
import axios from "axios"

async function DetallePedidos({ params }) {
  const pedidoId = params.pedidoId
  const URL = `${process.env.LOCALHOST}/api/pedidos/detalle-pedido/${pedidoId}`
  let data
  try {
    const res = await axios(URL)
    data = res.data
  } catch (error) {
    throw new Error("Error al realizar la solicitud")
  }

  const fechaFormateada = new Intl.DateTimeFormat().format(new Date(data.fecha))

  return (
    <RowResponsive>
      <h1 className="font-extrabold text-2xl md:text-3xl mb-10">PEDIDO #{data.id}</h1>
      <div className="flex flex-col md:flex-row max-w-full  gap-10 px-2">
        <table className="table table-zebra">
          <tbody>
            <tr className="bg-green-400">
              <td className=" text-neutral font-extrabold ">Cliente</td>
              <td className="font-extrabold">{data.usuario.nombreCompleto}</td>
            </tr>
            <tr>
              <td className=" text-neutral ">Email</td>
              <td>{data.usuario.email}</td>
            </tr>
            <tr>
              <td className=" text-neutral ">Telefono</td>
              <td>{data.usuario.telefono}</td>
            </tr>
            <tr>
              <td className=" text-neutral ">Total</td>
              <td>{currencyFormater(data.totalVenta)}</td>
            </tr>
            <tr>
              <td className=" text-neutral ">Estado del Pedido</td>
              <td>{data.estado}</td>
            </tr>
            <tr>
              <td className=" text-neutral ">Fecha</td>
              <td>{fechaFormateada}</td>
            </tr>
          </tbody>
        </table>
        <table className="table table-zebra">
          <thead>
            <tr className="bg-green-400">
              <th className="text-neutral">Vianda</th>
              <th className="text-neutral">Cant</th>
              <th className="text-neutral">Valor</th>
              <th className="text-neutral">Total</th>
            </tr>
          </thead>
          <tbody>
            {data.detallePedido.map(({ viandaNombre, precio, cantidad, total }, i) => {
              return (
                <tr key={i}>
                  <td>{viandaNombre}</td>
                  <td>{cantidad}</td>
                  <td>{precio}</td>
                  <td>{currencyFormater(total)}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </RowResponsive>
  )
}

export default DetallePedidos
