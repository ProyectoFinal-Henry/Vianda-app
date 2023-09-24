import axios from "axios"
import Image from "next/image"
import Link from "next/link"
import { BsFillBoxSeamFill } from "react-icons/bs"

async function CardRecomend() {
  const res = await axios.get(`${process.env.LOCALHOST}/api/viandas`)
  const data = res.data

  const randomIndices = []
  while (randomIndices.length < 4) {
    const randomIndex = Math.floor(Math.random() * data.length)
    if (!randomIndices.includes(randomIndex)) {
      randomIndices.push(randomIndex)
    }
  }

  const randomViandas = randomIndices.map((index) => data[index])

  return (
    <>
      <div className="flex justify-center w-full my-12 px-2 ">
        <h2 className="text-slate-700 font-extrabold text-2xl md:text-4xl text-left md:min-w-fit mt-12 md:mt-0">
          Recomendados de la semana
        </h2>
      </div>
      <div className="min-w-full flex flex-row flex-wrap  justify-between  my-6 gap-y-2 px-2">
        {randomViandas.map((vianda, index) => (
          <Link
            href={`/catalog?modal=${vianda.id}`}
            scroll={false}
            key={index}
            className="card-compact bg-amber-300 max-w-[49%] min-w-[49%]  
             md:max-w-[265px] md:min-w-[265px] md:min-h-[360px] 
                 shadow-xl cursor-default rounded-xl 
            active:transform active:scale-105 active:shadow-md active:bg-amber-400 transform transition-transform hover:scale-110
          "
          >
            <figure>
              <Image
                width={300}
                height={300}
                className="rounded-t-xl object-cover min-w-full min-h-[150px] max-h-[150px] md:min-h-[200px] md:max-h-[200px]"
                src={vianda.imagen}
                alt={vianda.nombre}
              />
            </figure>

            <div className="card-body p-4 min-h-max ">
              <div className="text-lg  text-slate900 font-bolder badge-outline">{vianda.tipo}</div>
              <div className="card-actions   items-center">
                <BsFillBoxSeamFill />
                <div className="font-extrabold text-xl">{vianda.stock}</div>
              </div>
              <h2 className="card-title leading-5">{vianda.nombre}</h2>
              <p>{vianda.ingredientes}</p>

              <div className="card-actions justify-end"></div>
            </div>
          </Link>
        ))}{" "}
      </div>
    </>
  )
}

export default CardRecomend
