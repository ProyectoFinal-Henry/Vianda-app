import Link from "next/link"

const ButtonCTAOrderBlock = () => {
  return (
    <>
      <div className="flex justify-center min-w-full px-2">
          <Link
            href={"/catalog/checkout"}
            className="btn btn-accent  text-white  btn-block  font-bold text-xl"
          >
            INICIAR PEDIDO
          </Link>
        </div>
    </>
  )
}

export default ButtonCTAOrderBlock