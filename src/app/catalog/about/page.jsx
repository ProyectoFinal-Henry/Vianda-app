import { BsSafe2 } from "react-icons/bs"
import { FcDataEncryption } from "react-icons/fc"
import { SiAxios } from "react-icons/si"
import { BiMailSend } from "react-icons/bi"
import { SiPrisma } from "react-icons/si"
import { GiDonut } from "react-icons/gi"
import { FaQrcode } from "react-icons/fa"
import { SiReactos } from "react-icons/si"
import { BsInputCursorText } from "react-icons/bs"
import { SiMercadopago } from "react-icons/si"
import { SiJsonwebtokens } from "react-icons/si"
import { SiFirebase } from "react-icons/si"
import { GiDaisy } from "react-icons/gi"
import { SiDaisyui } from "react-icons/si"
import { BsFillCloudCheckFill } from "react-icons/bs"
import { BsFilePdfFill } from "react-icons/bs"
import { FaReact } from "react-icons/fa"
import { TbBrandNextjs } from "react-icons/tb"
import { SiTailwindcss } from "react-icons/si"
import RowResponsive from "@/components/formaters/RowResponsive"
import Link from "next/link"
import TeamPage from "../team/page"

const AboutPage = () => {
  return (
    <>
      <RowResponsive>
        {" "}
        <h1 className=" text-green-800 text-3xl min-w-full text-center font-bold my-12">NUESTRO STACK!</h1>
        <div className="flex flex-row flex-wrap gap-12 justify-center items-center my-12">
          {/* 

*/}
          <div className="techItem flex flex-col justify-center items-center ">
            <div className="icon">
              <TbBrandNextjs className="text-6xl text-green-800" />
            </div>
            <div className="name text-2xl mt-4">Next JS 13</div>
          </div>

          {/* 

*/}
          <div className="techItem flex flex-col justify-center items-center ">
            <div className="icon">
              <FaReact className="text-6xl text-green-800" />
            </div>
            <div className="name text-2xl mt-4">React JS</div>
          </div>
          {/* 

*/}
          <div className="techItem flex flex-col justify-center items-center ">
            <div className="icon">
              <SiTailwindcss className="text-6xl text-green-800" />
            </div>
            <div className="name text-2xl mt-4">Tailwind</div>
          </div>
          {/* 

*/}
          <div className="techItem flex flex-col justify-center items-center ">
            <div className="icon">
              <BsFilePdfFill className="text-4xl my-2 text-green-800" />
            </div>
            <div className="name text-2xl mt-4">React PDF</div>
          </div>

          {/* 

*/}
          <div className="techItem flex flex-col justify-center items-center ">
            <div className="icon">
              <BsFillCloudCheckFill className="text-6xl text-green-800" />
            </div>
            <div className="name text-2xl mt-4">Cloudinary</div>
          </div>

          {/* 

*/}
          <div className="techItem flex flex-col justify-center items-center ">
            <div className="icon">
              <GiDaisy className="text-6xl text-green-800" />
            </div>
            <div className="name text-2xl mt-4">Daisy UI</div>
          </div>
          {/* 

*/}
          <div className="techItem flex flex-col justify-center items-center ">
            <div className="icon">
              <SiFirebase className="text-6xl text-green-800" />
            </div>
            <div className="name text-2xl mt-4">firebase</div>
          </div>
          {/* 

*/}
          <div className="techItem flex flex-col justify-center items-center ">
            <div className="icon">
              <SiJsonwebtokens className="text-6xl text-green-800" />
            </div>
            <div className="name text-2xl mt-4">JWToken</div>
          </div>
          {/* 

*/}
          <div className="techItem flex flex-col justify-center items-center ">
            <div className="icon">
              <SiMercadopago className="text-6xl text-green-800" />
            </div>
            <div className="name text-2xl mt-4">Mercado Pago</div>
          </div>
          {/* 

*/}
          <div className="techItem flex flex-col justify-center items-center ">
            <div className="icon">
              <BsInputCursorText className="text-6xl text-green-800" />
            </div>
            <div className="name text-2xl mt-4">Hook Form</div>
          </div>
          {/* 

*/}
          <div className="techItem flex flex-col justify-center items-center ">
            <div className="icon">
              <SiReactos className="text-6xl text-green-800" />
            </div>
            <div className="name text-2xl mt-4">React Icons</div>
          </div>
          {/* 

*/}
          <div className="techItem flex flex-col justify-center items-center ">
            <div className="icon">
              <FaQrcode className="text-6xl text-green-800" />
            </div>
            <div className="name text-2xl mt-4">React QR</div>
          </div>
          {/* 

*/}
          <div className="techItem flex flex-col justify-center items-center ">
            <div className="icon">
              <GiDonut className="text-6xl text-green-800" />
            </div>
            <div className="name text-2xl mt-4">Sweet alert</div>
          </div>
          {/* 

*/}
          <div className="techItem flex flex-col justify-center items-center ">
            <div className="icon">
              <SiPrisma className="text-6xl text-green-800" />
            </div>
            <div className="name text-2xl mt-4">Prisma ORM</div>
          </div>
          {/* 

*/}
          <div className="techItem flex flex-col justify-center items-center ">
            <div className="icon">
              <BiMailSend className="text-6xl text-green-800" />
            </div>
            <div className="name text-2xl mt-4">SendGrid</div>
          </div>
          {/* 

*/}
          <div className="techItem flex flex-col justify-center items-center ">
            <div className="icon">
              <SiAxios className="text-6xl text-green-800" />
            </div>
            <div className="name text-2xl mt-4">Axios</div>
          </div>
          {/* 

*/}
          <div className="techItem flex flex-col justify-center items-center ">
            <div className="icon">
              <BsSafe2 className="text-6xl text-green-800" />
            </div>
            <div className="name text-2xl mt-4">Bcrypt</div>
          </div>
        </div>
        <div className="flex flex-col min-w-full justify-center items-center">
          <h1 className=" text-green-800 text-3xl min-w-full text-center font-bold my-12"> VIDEO PROMOCIONAL</h1>
          <div
            id="video"
            class="relative h-0 overflow-hidden max-w-full w-full "
            style={{ paddingBottom: "56.25%" }}
          >
            <iframe
              src="https://www.youtube.com/embed/fgyHvy4sT6Y?si=kzjgQ1tuOLhsHc9a"
              frameborder="0"
              allowfullscreen
              class="absolute top-0 left-0  h-full aspect-video"
            ></iframe>
          </div>
        </div>
        <div className="divider"></div>
        <TeamPage />
      </RowResponsive>
    </>
  )
}

export default AboutPage
