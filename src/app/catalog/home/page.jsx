
import CardTipes from "@/components/cards/CardTipes";
import CardRecomend from "@/components/cards/CardRecomend";
import Pagination from "@/components/cards/Pagination";
import axios from "axios";

async function Homepage() {

  const res = await axios.get(`${process.env.LOCALHOST}/api/viandas`);
  const data = res.data;

  return (
    <>
      <div>
        <div className="flex justify-end mr-32 mt-10">
          <button className="btn btn-info hover:bg-lime-300 font-bold text-lg">
            REALIZAR PEDIDO
          </button>
        </div>

        <div className="flex justify-center">
          <h1 className="mt-10 p-5 badge badge-secondary text-lg font-bold">
            Categorias en nuestro Menu
          </h1>
        </div>
        <div className="grid grid-cols-4 gap-3 mx-10 ">
          <CardTipes />
        </div>

        <div className="flex justify-center">
          <h1 className="mt-10 p-5 badge badge-secondary text-lg font-bold">
            Recomendados de la semana
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-3 mx-10 ">
          <CardRecomend />
        </div>

        <div className="flex justify-center">
          <h1 className="mt-10 p-5 badge badge-secondary text-lg font-bold">
            Menu
          </h1>
        </div>

        <div>
          <Pagination data={data}/>
        </div>

        <div className="flex justify-end mr-32 my-10">
          <button className="btn btn-info hover:bg-lime-300 font-bold text-lg">
            REALIZAR PEDIDO
          </button>
        </div>
      </div>
    </>
  );
}

export default Homepage;
