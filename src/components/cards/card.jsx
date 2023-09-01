
function Card() {
  return (
    <>
      <div className="my-6">
        <div className="card w-64 bg-primary-focus hover:scale-110 duration-300 shadow-xl mx-auto cursor-default">
          <figure>
            <img src="/images/clasico.png" alt="clasico" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Clasico!</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil ipsum autem ratione voluptatem quidem vitae.</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>

      <div className="my-6">
        <div className="card w-64 bg-primary-focus hover:scale-110 duration-300 shadow-xl m-auto cursor-default">
          <figure>
            <img src="/images/vegetariano.png" alt="vegetariano" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Vegetariano!</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil ipsum autem ratione voluptatem quidem vitae.</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>

      <div className="my-6">
        <div className="card w-64 bg-primary-focus hover:scale-110 duration-300 shadow-xl m-auto cursor-default">
          <figure>
            <img src="/images/sin_harinas.png" alt="sin_harinas" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Sin Harinas!</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil ipsum autem ratione voluptatem quidem vitae.</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>

      <div className="my-6">
        <div className="card w-64 bg-primary-focus hover:scale-110 duration-300 shadow-xl m-auto cursor-default">
          <figure>
            <img src="/images/dieta.png" alt="dieta" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Dieta!</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil ipsum autem ratione voluptatem quidem vitae.</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
