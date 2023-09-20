import Image from "next/image"
import Link from "next/link"

const CallToAction = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="hero  bg-base hidden  ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <Image
              width={400}
              height={400}
              alt="imagen de la vianda"
              src="https://res.cloudinary.com/deezwetqk/image/upload/v1695173696/pexels-photo-1618913_k3zghi.jpg"
              className="max-w-md rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">Agenda tu menu!</h1>
              <p className="py-6 font-semibold text-lg w-[35rem]">
                Cocinamos por vos para que te alimentes bien toda la semana.Alimentacion saludable y de calidad
              </p>
              <Link href="/catalog/home">
                <button className="btn btn-primary">Ver menu</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CallToAction
