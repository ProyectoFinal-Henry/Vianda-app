import axios from "axios"

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
      <div className="max-w-full inline-flex flex-wrap items-stretch gap-2 my-6">
        {randomViandas.map((vianda, index) => (
          <div
            key={index}
            className="card w-[90%] mx-auto sm:max-w-[230px] bg-primary-focus hover:scale-110 duration-300 shadow-xl cursor-default
          "
          >
            <div className="avatar">
              <div className="w-full h-40 rounded-t-2xl ">
                <img
                  src={vianda.imagen}
                  alt={vianda.nombre}
                  height={300}
                  width={300}
                />
              </div>
            </div>
            <div className="card-body p-4 min-h-max ">
              <h2 className="card-title justify-between ">
                {vianda.nombre}
                <div className="badge badge-secondary ">NEW</div>
              </h2>
              <p>{vianda.descripcion}</p>
              <div className="dropdown">
                <label
                  tabIndex={0}
                  className="m-1 font-bold cursor-pointer"
                >
                  Ingredientes
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>{vianda.ingredientes}</a>
                  </li>
                </ul>
              </div>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">{vianda.tipo}</div>
              </div>
            </div>
          </div>
        ))}{" "}
      </div>
    </>
  )
}

export default CardRecomend
