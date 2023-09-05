import React from "react";
import { useRouter } from "next/navigation";
import { Linden_Hill } from "next/font/google";
import Link from "next/link";

function CardAllDishes(props) {
  const router = useRouter();
  const { data } = props;

  if (!Array.isArray(data)) {
    return <p>No hay datos disponibles</p>;
  }

  return (
    <>
      {data.map(
        ({ id, imagen, nombre, tipo, descripcion, ingredientes, stock }) => {
          return (
            <div key={id} className="mb-6">
              <Link href={`/catalog/detail/${id}`}>
                <div className="card w-72 h-96 bg-primary-focus hover:scale-110 duration-300 shadow-xl mx-auto cursor-default">
                  <figure>
                    <img className="h-auto w-full" src={imagen} alt={nombre} />
                  </figure>
                  <div className="card-body p-5">
                    <h2 className="card-title">{nombre}</h2>
                    <p>{descripcion}</p>
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
                          <a>{ingredientes}</a>
                        </li>
                      </ul>
                    </div>
                    <div className="card-actions justify-end">
                      <div className="badge badge-outline">{tipo}</div>
                      <div className="badge badge-outline">📦{stock}</div>
                    </div>
                  </div>
                </div>
              </Link>
              ;
            </div>
          );
        }
      )}
    </>
  );
}

export default CardAllDishes;
