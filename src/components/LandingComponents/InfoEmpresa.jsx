const InfoEmpresa = () => {
  return (
    <>
      <div
        id="container-reconocimiento"
        className="flex justify-center items-center bg-accent p-11 py-30"
      >
        <div className="stats shadow  ">
          <div className="stat place-items-center">
            <div className="stat-title  text-zinc-500">Experiencia</div>
            <div className="stat-value">2años</div>
            <div className="stat-desc text-zinc-800">
              {" "}
              2 años de experiencia en el servicio de viandas{" "}
            </div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title  text-zinc-500">Usuarios</div>
            <div className="stat-value text-primary">300</div>
            <div className="stat-desc   text-zinc-800">
              300 usuarios eligen ViandApp
            </div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title  text-zinc-500">Pedidos</div>
            <div className="stat-value">141.000</div>
            <div className="stat-desc  text-zinc-800">
              141.000 pedidos hechos
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoEmpresa;
