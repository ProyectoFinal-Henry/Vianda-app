import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import RowResponsive from "@/components/formaters/RowResponsive";
import Image from "next/image";
import Link from "next/link";

const TeamPage = () => {
  const order = [1, 2, 3, 4, 5, 6, 7];
  const ramdonOrder = order.sort(() => Math.random() - 0.5);

  return (
    <>
      <RowResponsive>
        <h1 className=" text-green-800 text-3xl min-w-full text-center font-bold my-12">
          {" "}
          ViandApp DREAM TEAM
        </h1>
        <div
          id="teamWrapper"
          className="flex flex-row   flex-wrap gap-12 justify-center  px-2 "
        >
          <div
            className={`teamCard  max-w-[50%] min-w-[250px] md:max-w-[290px] flex flex-col items-start justify-center  rounded-lg gap-4  p-2 order-${ramdonOrder[0]}`}
          >
            <Image
              className=" ProfilePic aspect-square object-cover rounded-full border-4 border-green-800 p-3 mx-auto"
              src={
                "https://res.cloudinary.com/deezwetqk/image/upload/c_scale,w_300/v1696264607/1692129917166_uwl2iu.jpg"
              }
              height={"250"}
              width={"250"}
              alt="David Mejia Developer"
            />
            <div className="Name font-bold text-base-content text-2xl">
              David Mejia
            </div>
            <div className="Position font-semibold text-green-800">
              Team Leader
            </div>
            <div className="abstract">
              Planificador de interfaz, UX y lógica de negocio
            </div>
            <div className="SocialTape flex justify-start gap-3 px-4   bg-green-800 min-w-full py-2 text-white text-3xl rounded-lg">
              <Link href={"https://github.com/davidalejoms"} target="_blank">
                <AiFillGithub />
              </Link>

              <Link
                href={"https://www.linkedin.com/in/david-mejia-4b713842/"}
                target="_blank"
              >
                <AiFillLinkedin />
              </Link>
            </div>
          </div>
          <div
            className={`teamCard  max-w-[50%] min-w-[250px] md:max-w-[290px] flex flex-col items-start justify-center  rounded-lg gap-4  p-2 order-${ramdonOrder[1]}`}
          >
            <Image
              className=" ProfilePic aspect-square object-cover rounded-full border-4 border-green-800 p-3 mx-auto"
              src={
                "https://res.cloudinary.com/deezwetqk/image/upload/c_scale,w_300/v1696254665/WhatsApp_Image_2023-09-30_at_11.16.54_AM_zblwik.jpg"
              }
              /* https://res.cloudinary.com/deezwetqk/image/upload/v1696254665/WhatsApp_Image_2023-09-30_at_11.16.54_AM_zblwik.jpg */
              height={"250"}
              width={"250"}
              alt="Francisco Meza Developer"
            />
            <div className="Name font-bold text-base-content text-2xl">
              Francisco Meza
            </div>
            <div className="Position font-semibold text-green-800">
              Backend Leader
            </div>
            <div className="abstract">
              Endpoints Master, Estructura de datos, Proteccion de Rutas
            </div>
            <div className="SocialTape flex justify-start gap-3 px-4   bg-green-800 min-w-full py-2 text-white text-3xl rounded-lg">
              <Link href={"https://github.com/Franmeza"} target="_blank">
                <AiFillGithub />
              </Link>

              <Link
                href={"https://www.linkedin.com/in/franmeza/"}
                target="_blank"
              >
                <AiFillLinkedin />
              </Link>
            </div>
          </div>
          <div
            className={`teamCard  max-w-[50%] min-w-[250px] md:max-w-[290px] flex flex-col items-start justify-center  rounded-lg gap-4  p-2 order-${ramdonOrder[2]}`}
          >
            <Image
              className=" ProfilePic aspect-square object-cover rounded-full border-4 border-green-800 p-3 mx-auto"
              src={
                "https://res.cloudinary.com/deezwetqk/image/upload/c_scale,w_300/v1696254665/WhatsApp_Image_2023-09-30_at_9.50.18_AM_y5rvdi.jpg"
              }
              height={"250"}
              width={"250"}
              alt="Mauro Fallico Developer"
            />
            <div className="Name font-bold text-base-content text-2xl">
              Mauro Fallico
            </div>
            <div className="Position font-semibold text-green-800">
              Authentication Expert
            </div>
            <div className="abstract">
              Autenticación y lógicas de redireccionamientos.
            </div>
            <div className="SocialTape flex justify-start gap-3 px-4   bg-green-800 min-w-full py-2 text-white text-3xl rounded-lg">
              <Link href={"https://github.com/maurofallico"} target="_blank">
                <AiFillGithub />
              </Link>

              <Link
                href={"https://www.linkedin.com/in/maurofallico/"}
                target="_blank"
              >
                <AiFillLinkedin />
              </Link>
            </div>
          </div>
          <div
            className={`teamCard  max-w-[50%] min-w-[250px] md:max-w-[290px] flex flex-col items-start justify-center  rounded-lg gap-4  p-2 order-${ramdonOrder[3]}`}
          >
            <Image
              className=" ProfilePic aspect-square object-cover rounded-full border-4 border-green-800 p-3 mx-auto "
              src={
                "https://res.cloudinary.com/deezwetqk/image/upload/c_scale,w_300/v1696266391/WhatsApp_Image_2023-09-30_at_8.32.04_AM_splqg7-removebg-preview_1_nskcog.png"
              }
              height={"250"}
              width={"250"}
              alt="Gonzalo Odenni Developer"
            />
            <div className="Name font-bold text-base-content text-2xl">
              Gonzalo Odenni
            </div>
            <div className="Position font-semibold text-green-800">
              E-commerce Expert{" "}
            </div>
            <div className="abstract">
              Plataforma de pago y Logistica de órdenes
            </div>
            <div className="SocialTape flex justify-start gap-3 px-4   bg-green-800 min-w-full py-2 text-white text-3xl rounded-lg">
              <Link href={"https://github.com/gonodd"} target="_blank">
                <AiFillGithub />
              </Link>

              <Link
                href={"https://www.linkedin.com/in/gonzalo-oddeni/"}
                target="_blank"
              >
                <AiFillLinkedin />
              </Link>
            </div>
          </div>
          <div
            className={`teamCard  max-w-[50%] min-w-[250px] md:max-w-[290px] flex flex-col items-start justify-center  rounded-lg gap-4  p-2 order-${ramdonOrder[4]}`}
          >
            <Image
              className=" ProfilePic aspect-square object-cover rounded-full border-4 border-green-800 p-3 mx-auto "
              src={
                "https://res.cloudinary.com/deezwetqk/image/upload/c_scale,w_300/v1696254665/WhatsApp_Image_2023-09-30_at_11.06.48_AM_xrlbeo.jpg"
              }
              /* https://res.cloudinary.com/deezwetqk/image/upload/v1696254665/WhatsApp_Image_2023-09-30_at_11.06.48_AM_xrlbeo.jpg */
              height={"250"}
              width={"250"}
              alt="Luciana Gatti Developer"
            />
            <div className="Name font-bold text-base-content text-2xl">
              Luciana Gatti
            </div>
            <div className="Position font-semibold text-green-800">
              Kitchen Role Integrator{" "}
            </div>
            <div className="abstract">
              Plataforma de producción y cadena de suministro
            </div>
            <div className="SocialTape flex justify-start gap-3 px-4   bg-green-800 min-w-full py-2 text-white text-3xl rounded-lg">
              <Link href={"https://github.com/gonodd"} target="_blank">
                <AiFillGithub />
              </Link>

              <Link
                href={"https://www.linkedin.com/in/gonzalo-oddeni/"}
                target="_blank"
              >
                <AiFillLinkedin />
              </Link>
            </div>
          </div>
          <div
            className={`teamCard  max-w-[50%] min-w-[250px] md:max-w-[290px] flex flex-col items-start justify-center  rounded-lg gap-4  p-2 order-${ramdonOrder[5]}`}
          >
            <Image
              className=" ProfilePic aspect-square object-cover rounded-full border-4 border-green-800 p-3 mx-auto "
              src={
                "https://res.cloudinary.com/deezwetqk/image/upload/c_scale,w_300/v1696267006/WhatsApp_Image_2023-09-30_at_11.11.42_AM_snbnj1.jpg"
              }
              height={"250"}
              width={"250"}
              alt="Luciana Gatti Developer"
            />
            <div className="Name font-bold text-base-content text-2xl">
              Antonella Rios
            </div>
            <div className="Position font-semibold text-green-800">
              stakeholders Management
            </div>
            <div className="abstract">
              Logicas de registro y manejo de usuarios del sistema
            </div>
            <div className="SocialTape flex justify-start gap-3 px-4   bg-green-800 min-w-full py-2 text-white text-3xl rounded-lg">
              <Link href={"https://github.com/antonellalm"} target="_blank">
                <AiFillGithub />
              </Link>

              <Link
                href={"https://www.linkedin.com/in/antonella-rios-335503232/"}
                target="_blank"
              >
                <AiFillLinkedin />
              </Link>
            </div>
          </div>
          <div
            className={`teamCard  max-w-[50%] min-w-[250px] md:max-w-[290px] flex flex-col items-start justify-center  rounded-lg gap-4  p-2 order-${ramdonOrder[6]}`}
          >
            <Image
              className=" ProfilePic aspect-square object-cover rounded-full border-4 border-green-800 p-3 mx-auto "
              src={
                "https://res.cloudinary.com/deezwetqk/image/upload/c_scale,w_300/v1696254665/WhatsApp_Image_2023-09-30_at_8.49.30_AM_cl0evh.jpg"
              }
              /* https://res.cloudinary.com/deezwetqk/image/upload/v1696254665/WhatsApp_Image_2023-09-30_at_8.49.30_AM_cl0evh.jpg */
              height={"250"}
              width={"250"}
              alt="Luciana Gatti Developer"
            />
            <div className="Name font-bold text-base-content text-2xl">
              Diego Rosas
            </div>
            <div className="Position font-semibold text-green-800">
              User Environment|
            </div>
            <div className="abstract">Pedidos y Perfiles del Client Side</div>
            <div className="SocialTape flex justify-start gap-3 px-4   bg-green-800 min-w-full py-2 text-white text-3xl rounded-lg">
              <Link href={"https://github.com/diego34346"} target="_blank">
                <AiFillGithub />
              </Link>

              <Link
                href={"https://www.linkedin.com/in/diegofeliperosas"}
                target="_blank"
              >
                <AiFillLinkedin />
              </Link>
            </div>
          </div>
        </div>
      </RowResponsive>
    </>
  );
};

export default TeamPage;
/* c_scale,w_300/ */
