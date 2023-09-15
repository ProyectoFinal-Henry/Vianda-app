"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const ModalUserExit = (props) => {
  const currentPath = usePathname()

  return (
    <dialog
      id="my_modal_1"
      className="flex flex-col items-center justify-center fixed top-0 left-0 bg-neutral-600/50 min-h-screen min-w-full z-30"
    >
      <div className="modal-box">
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4 text-slate-700 text-center pt-16">El usuario se ha creado exitosamente</p>
        <div className="modal-action">
          <form method="dialog">
            {currentPath.includes("/admin") ? (
              <Link href={"/admin/usuarios"}>
                <button
                  className="btn bg-accent/80"
                  onClick={() => {
                    props.setModalExit(false)
                  }}
                >
                  Ver Usuarios
                </button>
              </Link>
            ) : (
              currentPath.includes("/catalog") && (
                <Link href="/catalog/login">
                  <button
                    className="btn bg-accent/80"
                    onClick={() => {
                      props.setModalExit(false)
                    }}
                  >
                    Close
                  </button>
                </Link>
              )
            )}
          </form>
        </div>
      </div>
    </dialog>
  )
}
