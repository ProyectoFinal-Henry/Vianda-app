"use client";
import { FaCheckSquare } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { FaTimes } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

const Modallisto = ({ data }) => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const modalentrega = params.get("modalentrega");
  const router = useRouter();
  if (!modalentrega) return null;

  const {
    idTransaccion,
    usuario: { nombreCompleto, direccion },
  } = data[modalentrega - 1];

  return (
    <>
      <div className="  ">
        <div className=" flex flex-col gap-1 items-center font-medium bg-accent/70 p-3 pb-6 rounded">
          <div className="text-3xl flex flex-row gap-1 ">
            <p>#Pedido:</p>
            <p>{idTransaccion}</p>
          </div>
          <div className=" flex flex-row gap-1 mt-2">
            <p>Direccion:</p>
            <p>{direccion}</p>
          </div>
          <div className=" flex flex-row gap-1 ">
            <p>Cliente:</p>
            <p>{nombreCompleto}</p>
          </div>
          <div className=" text-center font-semibold mt-2 text-2xl">
            <p>Confirma entrega?</p>
          </div>
        </div>
        <div className="flex flex-row  items-center justify-center gap-9">
          <button className="btn bg-accent/80">
            <FaCheck className="text-xl" />
          </button>

          <button className="btn bg-warning">
            <FaTimes className="text-xl" />
          </button>
        </div>
      </div>
    </>
  );
};
export default Modallisto;
