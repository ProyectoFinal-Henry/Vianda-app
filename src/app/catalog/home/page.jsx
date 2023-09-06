import CardTipes from "@/components/cards/CardTipes"
import CardRecomend from "@/components/cards/cardRecomend"
import Pagination from "@/components/cards/Pagination"
import axios from "axios"

async function Homepage() {
  const res = await axios.get(`${process.env.LOCALHOST}/api/viandas`)
  const data = res.data

  return (
    <>
      <div className="my-10">
        <div className="flex justify-center sm:flex sm:justify-end sm:mr-32">
          <button className="btn btn-info hover:bg-lime-300 font-bold text-lg">INICIAR PEDIDO</button>
        </div>

        <div className="flex justify-center">
          <h1 className="mt-10 p-5 badge badge-secondary text-lg font-bold">Categorias en nuestro Menu</h1>
        </div>
        <div className="grid grid-rows-4 gap-3 sm:flex justify-evenly flex-wrap mt-6">
          <CardTipes />
        </div>

        <div className="flex justify-center">
          <h1 className="mt-10 p-5 badge badge-secondary text-lg font-bold">Recomendados de la semana</h1>
        </div>
        <div className="grid grid-rows-3 gap-3 sm:flex justify-evenly flex-wrap mt-6">
          <CardRecomend />
        </div>

        <div className="flex justify-center">
          <h1 className="mt-10 p-5 badge badge-secondary text-lg font-bold">Menu</h1>
        </div>

        <div>
          <Pagination data={data} />
        </div>

        <div className="flex justify-center mt-5 sm:flex sm:justify-end sm:mr-32">
          <button className="btn btn-info hover:bg-lime-300 font-bold text-lg">INICIAR PEDIDO</button>
        </div>
      </div>
    </>
  )
}

export default Homepage
