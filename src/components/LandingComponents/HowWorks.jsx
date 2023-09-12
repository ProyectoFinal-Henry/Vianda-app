import Image from "next/image"
export const HowWorks = () => {
  return (
    <section className="container mx-auto my-10  ">
      <h1 className="font-bold text-4xl mb-3 min-w-full text-center">Como funciona</h1>
      <div className="flex flex-col items-center my-4  ">
        <Image
          src="/AABARAAA-removebg-preview.png"
          alt="barra"
          width={200}
          height={50}
        />
      </div>

      <div
        id="cardsWrapper"
        className="flex flex-row flex-wrap justify-center  items-center  gap-8  max-w-[85%] mx-auto mb-20 "
      >
        {/* !================================================================== */}
        <div
          id="card-1 "
          className="bg-white  rounded-2xl shadow-2xl md:min-w-[25%] md:max-w-[25%] md:min-h-[520px] flex flex-col justify-between items-center"
        >
          <Image
            src="/img1Landing.png"
            alt="asi funciona la app imagen"
            width={350}
            height={350}
            className="object-cover w-full h-full p-3 rounded-t-xl"
          />

          <h1 className="font-bold text-xl text-center mt-3">Elegi tus viandas</h1>

          <div className="  my-7 bg-primary rounded-md max-w-[90%] place-content-center p-2  mx-auto">
            <p className=" text-lg text-center">Escoje las viandas que gustes y selecciona los dias en que las desees</p>
          </div>
        </div>
        <div
          id="card-2 "
          className="bg-white  rounded-2xl shadow-2xl md:min-w-[30%] md:max-w-[30%] md:min-h-[520px] flex flex-col justify-between items-center"
        >
          <Image
            src="/img2Landing.png"
            alt="asi funciona la app imagen"
            width={350}
            height={350}
            className="object-cover w-full h-full p-3 rounded-t-xl"
          />

          <h1 className="font-bold text-xl text-center mt-3">Nosotros te la llevamos a tu casa</h1>

          <div className="  my-7 bg-primary rounded-md max-w-[90%] place-content-center p-2  mx-auto">
            <p className=" text-lg text-center">
              {" "}
              Una vez que ejecutas el pedido te lo llevamos las viandas a tu casa en los dias correspondientes
            </p>
          </div>
        </div>
        <div
          id="card-3 "
          className="bg-white  rounded-2xl shadow-2xl md:min-w-[30%] md:max-w-[30%] md:min-h-[520px] flex flex-col justify-between items-center"
        >
          <Image
            src="/img4Landing.png"
            alt="asi funciona la app imagen"
            width={350}
            height={350}
            className="object-cover w-full h-full p-3 rounded-t-xl"
          />

          <h1 className="font-bold text-xl text-center mt-3">Disfruta de tu comida</h1>

          <div className="  my-7 bg-primary rounded-md max-w-[90%] place-content-center p-2  mx-auto">
            <p className=" text-lg text-center">Recibe y disfruta de lo casero en tu mesa</p>
          </div>
        </div>
      </div>
    </section>
  )
}
