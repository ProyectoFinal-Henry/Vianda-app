"use client";

export const ModalUserError = (props) => {
  return (
    <dialog
      id="my_modal_1"
      className="flex flex-col items-center justify-center fixed top-0 left-0 bg-neutral-600/50 min-h-screen min-w-full z-30  "
    >
      <div className="modal-box ">
        <p className="py-4 text-black text-center pt-16 ">
          Ocurrio un error creando el usuario, intente nuevamente
        </p>

        <div className="modal-action">
          <form method="dialog">
            <button
              className="btn bg-accent/80"
              onClick={() => {
                props.setModalErrorCreateUser(false);
              }}
            >
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};
