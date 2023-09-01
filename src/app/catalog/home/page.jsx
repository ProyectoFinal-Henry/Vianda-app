import Card from "@/components/cards/card";
import CardRecomend from "@/components/cards/cardRecomend";

function Homepage() {
  return (
    <>
      <div>
        <div className="flex justify-end mr-32 mt-10" >
        <button className="btn btn-accent font-bold text-lg">
          REALIZAR PEDIDO
        </button>
        </div>
        <h1 className="ml-16 mt-10 p-5 badge badge-secondary text-lg font-bold">
          Categorias en nuestro Menu
        </h1>
        <div className="grid grid-cols-4 gap-3 mx-10 ">
          <Card />
        </div>
        <h1 className="ml-16 mt-10 p-5 badge badge-secondary text-lg font-bold">
          Recomendados de la semana
        </h1>
        <div className="grid grid-cols-4 gap-3 mx-10 ">
          <CardRecomend />
        </div>
        <div className="flex justify-end mr-32 mb-10" >
        <button className="btn btn-accent font-bold text-lg">
          REALIZAR PEDIDO
        </button>
        </div>
      </div>
    </>
  );
}

export default Homepage;
