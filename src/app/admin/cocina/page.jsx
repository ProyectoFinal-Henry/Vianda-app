// import axios from "axios";
// import PedidosCocina from "@/components/adminCocina/PedidosCocina"

// const AdminCocina = async () => {

//     const resPedido = await axios.get(`${process.env.LOCALHOST}/api/pedidos`);
//     const dataPedido = resPedido.data;
  

//     return ( 
        
//   <>
//     <PedidosCocina dataPedido={dataPedido} />
//         </>
//  );
// }
 
// export default AdminCocina;


import axios from "axios";
import PedidosCocina from "@/components/adminCocina/PedidosCocina";

const AdminCocina = async () => {


    const resPedido = await axios.get(`${process.env.LOCALHOST}/api/pedidos`);
    const dataPedido = resPedido.data;

    console.log(dataPedido);


  return (
    <>
      <PedidosCocina dataPedido={dataPedido} />
    </>
  );
};

export default AdminCocina;
