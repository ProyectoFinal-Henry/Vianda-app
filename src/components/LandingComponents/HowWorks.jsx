import Image from "next/image";
export const HowWorks = () => {
  return (
    <section className="container mb-40  ">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-4xl mb-3">Como funciona</h1>
        <Image
          src="/AABARAAA-removebg-preview.png"
          alt="barra"
          width={200}
          height={50}
        />
      </div>
      <br />
      <div className="flex gap-4 place-content-center">
        <div className="bg-white ">
          <div>
            <Image
              src="/img1Landing.png"
              alt="asi funciona la app imagen"
              width={350}
              height={350}
              className="object-cover w-full h-full p-3"
            />
          </div>
          <div className=" ">
            <div>
              <h1 className="font-bold text-xl text-center mt-3">
                Elegi tus viandas
              </h1>
            </div>
            <div className=" ml-10 mt-7 bg-primary rounded-md w-[20rem] place-content-center p-2 ">
              <p className="ml[50%] text-lg text-center">
                Escoje las viandas que gustes y selecciona los dias en que las
                desees
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white ">
          <div>
            <Image
              src="/img2Landing.png"
              alt="asi funciona la app imagen"
              width={310}
              height={310}
              className="object-cover w-full h-full p-3"
            />
          </div>
          <div className=" ">
            <div>
              <h1 className="font-bold text-xl text-center">
                Nosotros te la llevamos a tu casa
              </h1>
            </div>
            <div className=" ml-10 mt-7 bg-primary rounded-md w-[20rem] place-content-center p-2 ">
              <p className="ml[50%] text-lg text-center">
                Una vez que ejecutas el pedido te lo llevamos las viandas a tu
                casa en los dias correspondientes
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white">
          <div>
            <Image
              src="/img4Landing.png"
              alt="asi funciona la app imagen "
              width={310}
              height={310}
              className="object-cover w-full h-full p-3"
            />
          </div>
          <div className="">
            <div>
              <h1 className="font-bold text-xl text-center">
                Disfruta de tu comida
              </h1>
            </div>
            <div className=" ml-10 mt-7 bg-primary rounded-md w-[20rem] place-content-center p-2 w-b-[10rem]">
              <p className="ml-[4rem] text-lg text-center w-[10rem]">
                Recibe y disfruta de lo casero en tu mesa
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
