import Image from "next/image"
import Link from "next/link"

const Stylebadges = () => {
  return (
    <>
      <Link
        id="styleeat"
        href={"/catalog/checkout"}
        className="w-full 
       flex flex-col justify-center my-12"
      >
        <div className="flex flex-col items-center justify-around  md:gap-12 px-2 ">
          <h2 className="text-slate-700 font-extrabold text-2xl md:text-4xl text-left md:min-w-fit my-10 md:mt-0">Comé según tu estilo:</h2>

          <div
            className="flex flex-row flex-wrap justify-center gap-8items-stretch md:min-w-[90%] gap-8 px-2"
            id="badgeWrapper"
          >
            <div
              className=" max-w-[40%] md:max-w-[20%]  hover:scale-105"
              id="badge"
            >
              <Image
                height={"150"}
                width={"150"}
                className="rounded-full object-cover min-w-[130px] min-h-[130px] aspect-square   spinner"
                alt={"clasico"}
                src="https://res.cloudinary.com/deezwetqk/image/upload/v1695169713/clasico_rxpd8k.png"
              />

              <h2 className="text-slate-700 font-extrabold text-xl md:text-2xl text-center  md:min-w-fit">Clasico</h2>
            </div>

            <div
              className=" max-w-[40%] md:max-w-[20%] hover:scale-105"
              id="badge"
            >
              <Image
                height={"150"}
                width={"150"}
                className="rounded-full object-cover min-w-[130px] min-h-[130px] aspect-square    spinner"
                alt={"vegetariano"}
                src="https://res.cloudinary.com/deezwetqk/image/upload/v1695169709/dieta_zd9erw.png"
              />

              <h2 className="text-slate-700 font-extrabold text-xl md:text-2xl text-center  md:min-w-fit">Vegetariano</h2>
            </div>

            <div
              className=" max-w-[40%] md:max-w-[20%] hover:scale-105"
              id="badge"
            >
              <Image
                height={"150"}
                width={"150"}
                className="rounded-full object-cover min-w-[130px] min-h-[130px] aspect-square   spinner"
                alt={"Sin Harinas"}
                src="https://res.cloudinary.com/deezwetqk/image/upload/v1695169710/sin_harinas_card_tahoug.png"
              />

              <h2 className="text-slate-700 font-extrabold text-xl md:text-2xl text-center  md:min-w-fit">Sin Harinas</h2>
            </div>
            <div
              className=" max-w-[40%] md:max-w-[20%] hover:scale-105"
              id="badge"
            >
              <Image
                height={"150"}
                width={"150"}
                className="rounded-full object-cover min-w-[130px] min-h-[130px] aspect-square   spinner"
                alt={"vegetariano"}
                src="https://res.cloudinary.com/deezwetqk/image/upload/v1695169711/vegetariano_card_caypy4.png"
              />

              <h2 className="text-slate-700 font-extrabold text-xl md:text-2xl text-center  md:min-w-fit">Dieta</h2>
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}

export default Stylebadges
