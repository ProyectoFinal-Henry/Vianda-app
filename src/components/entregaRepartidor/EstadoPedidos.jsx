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
