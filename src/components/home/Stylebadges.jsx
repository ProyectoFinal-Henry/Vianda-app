import Image from "next/image"
import Link from "next/link"

const Stylebadges = () => {
  return (
    <>
      <Link
        href={"/catalog/checkout"}
        className="w-full 
       flex flex-col justify-center min-h-[40vh] mt-12"
      >
        <div className="flex flex-col items-center justify-around gap-8 md:gap-12 px-2 ">
          <h2 className="text-slate-700 font-extrabold text-2xl md:text-4xl text-left md:min-w-fit mt-12 md:mt-0">Comé según tu estilo:</h2>

          <div
            className="flex flex-row flex-wrap justify-around gap-4"
            id="badgeWrapper"
          >
            <div
              className=" max-w-[40%] md:max-w-[15%]"
              id="badge"
            >
              <div className="avatar mb-10">
                <div className="w-54 rounded-full">
                  <Image
                    height={"150"}
                    width={"150"}
                    alt={"clasico"}
                    src="https://res.cloudinary.com/deezwetqk/image/upload/v1695169713/clasico_rxpd8k.png"
                  />
                </div>
              </div>

              <h2 className="text-slate-700 font-extrabold text-xl md:text-3xl text-center  md:min-w-fit">Clasico</h2>
            </div>

            <div
              className=" max-w-[40%] md:max-w-[15%]"
              id="badge"
            >
              <div className="avatar mb-10">
                <div className="w-54 rounded-full">
                  <Image
                    height={"150"}
                    width={"150"}
                    alt={"vegetariano"}
                    src="https://res.cloudinary.com/deezwetqk/image/upload/v1695169709/dieta_zd9erw.png"
                  />
                </div>
              </div>

              <h2 className="text-slate-700 font-extrabold text-xl md:text-3xl text-center  md:min-w-fit">Vegetariano</h2>
            </div>

            <div
              className=" max-w-[40%] md:max-w-[15%]"
              id="badge"
            >
              <div className="avatar mb-10">
                <div className="w-54 rounded-full">
                  <Image
                    height={"150"}
                    width={"150"}
                    alt={"Sin Harinas"}
                    src="https://res.cloudinary.com/deezwetqk/image/upload/v1695169710/sin_harinas_card_tahoug.png"
                  />
                </div>
              </div>

              <h2 className="text-slate-700 font-extrabold text-xl md:text-3xl text-center  md:min-w-fit">SIn Harinas</h2>
            </div>
            <div
              className=" max-w-[40%] md:max-w-[15%]"
              id="badge"
            >
              <div className="avatar mb-10">
                <div className="w-54 rounded-full">
                  <Image
                    height={"150"}
                    width={"150"}
                    alt={"vegetariano"}
                    src="https://res.cloudinary.com/deezwetqk/image/upload/v1695169711/vegetariano_card_caypy4.png"
                  />
                </div>
              </div>

              <h2 className="text-slate-700 font-extrabold text-xl md:text-3xl text-center  md:min-w-fit">Dieta</h2>
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}

export default Stylebadges
