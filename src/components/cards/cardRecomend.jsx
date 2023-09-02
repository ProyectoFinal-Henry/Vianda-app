import axios from "axios";

async function CardRecomend() {
  const res = await axios.get(`${process.env.LOCALHOST}/api/viandas`);
  const data = res.data;
  
  // Obtener tres índices aleatorios únicos
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
        <div key={index} className="my-6 ml-8">
          <div className="card w-80 h-96 bg-primary-focus hover:scale-110 duration-300 shadow-xl mx-auto cursor-default">
            <figure>
              <img className="h-auto w-full" src={vianda.imagen} alt={vianda.nombre} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {vianda.nombre}
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>{vianda.descripcion}</p>
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
