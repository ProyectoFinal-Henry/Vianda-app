import axios from "axios";
import Image from "next/image";
const page = async ({ params }) => {
  const res = await axios.get(
    `${process.env.LOCALHOST}/api/viandas/${params.detailID}`
  );
  const vianda = res.data;
  return (
    <div>
      {" "}
      <div className="flex flex-col items-center justify-center mw-[70rem] rounded-sm ">
        <div>
          <h2 className="text-center font-bold text-4xl w-[30rem] tracking-widest">
            {vianda.nombre}
          </h2>
        </div>
        <div className="mt-[1rem] mb-[2rem]">
          <Image
            src="/AABARAAA-removebg-preview.png"
            alt="barra"
            width={200}
            height={50}
          />
        </div>
        <div>
          <img
            src={vianda.imagen}
            className="max-w-md rounded-lg shadow-2xl"
            alt=""
          />
        </div>
        <div className="mt-10 bg-secondary px-9 rounded-xl">
          <div className=" ">
            <p className="text-xl font-semibold">Tipo</p>
          </div>
          <div>
            {" "}
            <p>{vianda.tipo}</p>
          </div>
        </div>

        <div className="mt-10 bg-secondary px-9 rounded-xl text-center">
          <div className=" ">
            <p className="text-xl font-semibold">Descripcion</p>
          </div>
          <div>
            {" "}
            <p>{vianda.descripcion}</p>
          </div>
        </div>

        <div className="mt-10 bg-secondary px-9 rounded-xl text-center">
          <div className=" ">
            <p className="text-xl font-semibold">Ingredientes</p>
          </div>
          <div>
            {" "}
            <p>{vianda.ingredientes}</p>
          </div>
        </div>

        <div className="mt-10 bg-secondary px-9 rounded-xl text-center">
          <div className=" ">
            <p className="text-xl font-semibold">Stock</p>
          </div>
          <div>
            {" "}
            <p>{vianda.stock}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
