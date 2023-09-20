import axios from "axios"
import Image from "next/image"
import { FaShoppingCart } from "react-icons/fa"
const page = async ({ params }) => {
  const res = await axios.get(`${process.env.LOCALHOST}/api/viandas/${params.detailID}`)
  const vianda = res.data
  return (
    <div className="flex justify-center items-center h-screen">
      {" "}
      <div className=" flex flex-row gap-x-12">
        <div id="contenedorImg">
          <Image
            width={400}
            height={400}
            src={vianda.imagen}
            className="max-w-md rounded-lg shadow-2xl"
            alt="imagen comida"
          />
        </div>
        <div
          id="contenedorText"
          className="flex flex-col gap-3"
        >
          <div>
            <h2 className="text-center font-bold text-4xl w-[30rem] tracking-widest">{vianda.nombre}</h2>
          </div>
          <div
            className="divider  
        "
          ></div>

          <div className=" flex flex-row gap-2">
            <div className="  ">
              <p className=" font-semibold">Tipo : </p>
            </div>
            <div>
              {" "}
              <p className="capitalize"> {vianda.tipo}</p>
            </div>
          </div>

          <div className=" flex flex-row gap-2">
            <div className=" ">
              <p className="font-semibold">Descripcion :</p>
            </div>
            <div>
              {" "}
              <p className="capitalize">{vianda.descripcion}</p>
            </div>
          </div>

          <div className=" flex flex-row gap-2">
            <div className=" ">
              <p className=" font-semibold">Ingredientes :</p>
            </div>
            <div>
              {" "}
              <p className="capitalize">{vianda.ingredientes}</p>
            </div>
          </div>

          <div className=" flex flex-row gap-2">
            <div className=" ">
              <p className=" font-semibold">Stock:</p>
            </div>
            <div>
              {" "}
              <p>{vianda.stock}</p>
            </div>
          </div>
          <div>
            <button className="btn btn-sm text-white bg-accent">
              Agregar <FaShoppingCart className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
