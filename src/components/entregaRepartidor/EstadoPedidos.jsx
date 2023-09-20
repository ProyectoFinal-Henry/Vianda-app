"use client";

import { useEffect, useState } from "react";
import CardsPedidos from "./CardsPedidos";
import axios from "axios";

const EstadoPedidos = ({ data }) => {
  const [pedidos, setPedidos] = useState([]);

  const cantidadTotal = pedidos.length;

  let cantidadDespachada = 0;
  let cantidadEntregado = 0;

  pedidos.forEach((pedido) => {
    if (pedido.estado === "pagado") {
      cantidadDespachada++;
    } else if (pedido.estado === "entregado") {
      cantidadEntregado++;
    }
  });

  useEffect(() => {
    axios.get(`${process.env.LOCALHOST}/api/pedidos`).then((response) => {
      const res = response.data;
      setPedidos(res);
    });
  }, [pedidos]);

  const estadopedido = (event) => {
    const dataFiltered = data.filter(
      (ele) => ele.estado === event.target.value
    );
    setPedidos(dataFiltered);
  };
  // console.log(pedidos);
  return (
    <div id="contenedor">
      <div
        id="contenedorEstado"
        className=" flex flex-col items-center justify-center gap-4 "
      >
        <h1 className="text-center bg-primary/95 p-3 px-4 rounded mt-3 ">
          Estado de pedidos
        </h1>

        <div id="contenedorPedidos" className="flex flex-row gap-7">
          <div className="flex flex-col items-center ">
            <p className="bg-orange-400/95 p-2 rounded px-7 ">Total</p>
            <p className="font-semibold bg-base-200 p-[ 0.125 rem] px-6 mt-2 rounded">
              {cantidadTotal}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="bg-orange-400/95 p-2 rounded px-7">Listos</p>
            <p className="font-semibold bg-accent  p-[ 0.125 rem] px-6 mt-2 rounded">
              {cantidadEntregado}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="bg-orange-400/95 p-2 rounded">Pendientes</p>
            <p className="font-semibold bg-warning p-[0.125rem] px-6 mt-2 rounded">
              {cantidadDespachada}
            </p>
          </div>
        </div>
        <div className="text-lg p-1 px-2 rounded bg-primary/95">
          Haz click para ver el detalle del Pedidos
        </div>
        <div className="flex flex-row gap-3">
          <button className="btn" value="pagado" onClick={estadopedido}>
            pagado
          </button>
          <button className="btn" value="despachado" onClick={estadopedido}>
            Pendientes
          </button>
        </div>
      </div>
      <CardsPedidos setPedidos={setPedidos} pedidos={pedidos} />
    </div>
  );
};
export default EstadoPedidos;
// "use client";

// import { useEffect, useState } from "react";
// import CardsPedidos from "./CardsPedidos";
// import EntregaPage from "@/app/admin/mensajero/page";
// import axios from "axios";
// import Link from "next/link";
// Link;

// const EstadoPedidos = ({ data }) => {
//   const [pedidos, setPedidos] = useState([]);

//   const cantidadTotal = pedidos.length;

//   const estadopedido = async (event) => {
//     try {
//       console.log(event.target.value);
//       const estado = encodeURIComponent(event.target.value);
//       const res = await axios.get(
//         `${process.env.LOCALHOST}/api/pedidos?estado=${estado}`
//       );

//       setPedidos(res.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // let cantidadDespachada = 0;
//   // let cantidadEntregado = 0;

//   // pedidos.forEach((pedido) => {
//   //   if (pedido.estado === "pagado") {
//   //     cantidadDespachada++;
//   //   } else if (pedido.estado === "entregado") {
//   //     cantidadEntregado++;
//   //   }
//   // });

//   // useEffect(() => {
//   //   axios.get(`${process.env.LOCALHOST}/api/pedidos`).then((response) => {
//   //     const res = response.data;
//   //     setPedidos(res);
//   //   });
//   // }, [pedidos]);

//   // const estadopedido = (event) => {
//   //   const dataFiltered = data.filter(
//   //     (ele) => ele.estado === event.target.value
//   //   );
//   //   setPedidos(dataFiltered);
//   // };
//   // console.log(pedidos);
//   return (
//     <>
//       <div id="contenedor">
//         <div
//           id="contenedorEstado"
//           className="flex flex-col items-center justify-center font-semibold gap-3 bg-[#FAFF1A]  border-y-4 border-[#FF0000] pb-2"
//         >
//           <div
//             id="contenedorPedidos"
//             className="flex flex-row gap-3 h-10 items-center justify-center "
//           >
//             <div className="flex flex-row gap-1">
//               <p className="text-2xl text-[1.625rem] ">Total: </p>
//               <p className="text-2xl text-[1.625rem] ">{cantidadTotal}</p>
//             </div>
//             <div className="flex flex-row gap-1">
//               <p className="text-2xl text-[1.625rem]">Listos:</p>
//               <p className="text-2xl text-[1.625rem] text-[#008B38]">
//                 {cantidadTotal}
//               </p>
//             </div>
//             <div className="flex flex-row gap-1">
//               <p className="text-2xl text-[1.625rem]">Pendientes:</p>
//               <p className="text-2xl text-[1.625rem] text-[#FF0000]">
//                 {cantidadTotal}
//               </p>
//             </div>
//           </div>

//           <div className=" flex flex-row gap-3 ">
//             {/* <Link href={`/admin/mensajero/pedidos?estado=pagado`}> */}
//             <button
//               className="btn bg-[#00FF0A] text-xl font-bold px-10"
//               value="pagado"
//               onClick={estadopedido}
//             >
//               <div className="flex flex-row">
//                 <p>Listos:</p>
//                 <p>{cantidadTotal}</p>
//               </div>
//             </button>
//             {/* </Link> */}

//             <button
//               className="btn bg-[#FF0303] text-xl font-bold px-5"
//               value="despachado"
//               onClick={estadopedido}
//             >
//               Pendientes
//             </button>
//           </div>
//         </div>
//       </div>
//       <CardsPedidos pedidos={pedidos} />
//     </>
//   );
// };
// export default EstadoPedidos;
