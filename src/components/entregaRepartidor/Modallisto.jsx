"use client";
import { FaCheckSquare } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { FaTimes } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

const Modallisto = ({ pendientes }) => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const modalentrega = params.get("modalentrega");
  // const router = useRouter();
  if (!modalentrega) return null;

  //-----
  const pendiente = pendientes.find((p) => p.idTransaccion === modalentrega);

  const {
    idTransaccion,
    usuario: { nombreCompleto, direccion },
  } = pendiente;

  return (
    <>
      <div className="  ">
        {/* <div className=" flex flex-col gap-1 items-center font-medium bg-accent/70 p-3 pb-6 rounded">
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
        </div> */}
        <button
          className="btn"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          open modal
        </button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">
              Press ESC key or click the button below to close
            </p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
};
export default Modallisto;
