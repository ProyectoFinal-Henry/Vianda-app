
function CardRecomend() {
  return (
    <div className="my-6 ml-8">
      <div className="card w-80 bg-primary-focus hover:scale-110 duration-300 shadow-xl mx-auto cursor-default">
        <figure>
          <img src="/images/sin_harinas.png" alt="Pollo_ensalada" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Pollo con ensalada!
          <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
            ipsum autem ratione voluptatem quidem vitae.
          </p>
          <div className="card-actions justify-end">
          <div className="badge badge-outline">Dieta</div> 
          <div className="badge badge-outline">Sin Harinas</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardRecomend;
