
function Card() {
  return (
    <>
      <div className="my-6">
        <div className="card w-72 bg-primary-focus hover:scale-110 duration-300 shadow-xl mx-auto cursor-default">
          <figure>
            <img src="/images/clasico.png" alt="clasico" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Clasico!</h2>
            <p>Platos inspirados en tradiciones culinarias icónicas, como parrilladas y guisos reconfortantes, con sabores atemporales.</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>

      <div className="my-6">
        <div className="card w-72 bg-primary-focus hover:scale-110 duration-300 shadow-xl m-auto cursor-default">
          <figure>
            <img src="/images/vegetariano.png" alt="vegetariano" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Vegetariano!</h2>
            <p>Opciones creativas y sabrosas basadas en plantas, desde ensaladas frescas hasta proteínas vegetales, para satisfacer a amantes de las verduras y conscientes de la alimentación.</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>

      <div className="my-6">
        <div className="card w-72 bg-primary-focus hover:scale-110 duration-300 shadow-xl m-auto cursor-default">
          <figure>
            <img src="/images/sin_harinas.png" alt="sin_harinas" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Sin Harinas!</h2>
            <p>Alternativas saludables y deliciosas, desde resaltar sabores naturales hasta opciones bajas en carbohidratos, ideales para quienes evitan la harina.</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>

      <div className="my-6">
        <div className="card w-72 bg-primary-focus hover:scale-110 duration-300 shadow-xl m-auto cursor-default">
          <figure>
            <img src="/images/dieta.png" alt="dieta" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Dieta!</h2>
            <p>Platos equilibrados y saludables diseñados para mantener el bienestar sin sacrificar el sabor, con ingredientes frescos y preparaciones cuidadosamente seleccionadas.</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
