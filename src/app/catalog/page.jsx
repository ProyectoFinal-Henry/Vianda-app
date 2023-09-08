import CardTipes from "@/components/cards/CardTipes"
import CardViandasRecommended from "@/components/cards/CardViandasRecommended"
import Pagination from "@/components/cards/Pagination"
import RowResponsive from "@/components/formaters/RowResponsive"
import axios from "axios"

async function Homepage() {
  const res = await axios.get(`${process.env.LOCALHOST}/api/viandas`)
  const data = res.data

  return (
    <>
      <RowResponsive>
        <div className="flex justify-center sm:flex sm:justify-end sm:mr-32">
          <button className="btn btn-info hover:bg-lime-300 font-bold text-lg">INICIAR PEDIDO</button>
        </div>

        <div className="flex justify-center w-full">
          <h1 className="mt-10 py-5 bg-secondary  w-full text-center  text-xl font-bold">Categorias en nuestro Menu</h1>
        </div>

        <CardTipes />

        <div className="flex justify-center w-full">
          <h1 className="mt-10 py-5 bg-secondary  w-full text-center  text-xl font-bold">Recomendados de la semana</h1>
        </div>
        <CardViandasRecommended />

        <div className="flex justify-center w-full">
          <h1 className="mt-10 py-5 bg-secondary  w-full text-center  text-xl font-bold"> Menu</h1>
        </div>

        <Pagination data={data} />

        <div className="flex justify-center mt-5 sm:flex sm:justify-end sm:mr-32">
          <button className="btn btn-info hover:bg-lime-300 font-bold text-lg">INICIAR PEDIDO</button>
        </div>
      </RowResponsive>
    </>
  )
}

export default Homepage
