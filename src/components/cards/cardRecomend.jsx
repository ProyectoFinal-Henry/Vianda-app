import axios from "axios";

async function CardRecomend() {
  const res = await axios.get(`${process.env.LOCALHOST}/api/viandas`);
  const data = res.data;
  
  const randomIndices = [];
  while (randomIndices.length < 3) {
    const randomIndex = Math.floor(Math.random() * data.length);
    if (!randomIndices.includes(randomIndex)) {
      randomIndices.push(randomIndex);
    }
  }

  const randomViandas = randomIndices.map(index => data[index]);

  return (
    <>
      {randomViandas.map((vianda, index) => (
        <div key={index} className="mb-6">
          <div className="card w-80 h-96 bg-primary-focus hover:scale-110 duration-300 shadow-xl mx-auto cursor-default">
            <figure>
              <img className="h-auto w-full" src={vianda.imagen} alt={vianda.nombre} />
            </figure>
            <div className="card-body p-4 ">
              <h2 className="card-title justify-between ">
                {vianda.nombre}
                <div className="badge badge-secondary ">NEW</div>
              </h2>
              <p>{vianda.descripcion}</p>
              <div className="dropdown">
                    <label tabIndex={0} className="m-1 font-bold cursor-pointer" >Ingredientes
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
        </div>
      ))}
    </>
  );
}

export default CardRecomend;
