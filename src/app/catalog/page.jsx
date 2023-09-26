import CardTipes from "@/components/cards/CardTipes"
import CardViandasRecommended from "@/components/cards/CardViandasRecommended"
import Pagination from "@/components/cards/Pagination"
import Detalle from "@/components/detailll/Detalle"
import RowResponsive from "@/components/formaters/RowResponsive"
import ButtonCTAOrderBlock from "@/components/home/ButtonCTAOrderBlock"
import FullWidthHeader from "@/components/home/FullWidthHeader"
import Stylebadges from "@/components/home/Stylebadges"
import axios from "axios"
import WhatsappBubbleComponent from "@/components/footer/WhatsappBubble"
import { redirect } from "next/navigation"
import Link from "next/link"
import Image from "next/image"

async function Homepage({searchParams}) {

  const parameters = new URLSearchParams(searchParams);
  const status = parameters.get("status")
  //Por si estamos volviendo desde mercado pago, leemos la query y en caso de que exista el status = approved
  // lo redireccionamos a mi cuenta.
  if( status === "approved"){
    redirect("/catalog/mi-cuenta/pedidos")
  }

  const res = await axios.get(`${process.env.LOCALHOST}/api/menu?all=true`)
  const data = res.data

  return (
    <>
      <Detalle data={data} />
      <RowResponsive>
        <FullWidthHeader />
        <CardViandasRecommended />

        <ButtonCTAOrderBlock />
        <Stylebadges />
      </RowResponsive>
      <div className=" max-w-6xl flex flex-col justify-center mx-auto ">
        <CardTipes />

        <Pagination data={data} />

        <Link
          href={"/catalog/checkout"}
          className="hidden md:block"
        >
          <Image
            alt="cta desktop"
            width={1100}
            height={300}
            src="https://res.cloudinary.com/deezwetqk/image/upload/c_scale,w_1100/v1695169710/CTA_sep7jg.png"
            className="min-w-full"
          />
        </Link>
      </div>
      <Link
        href={"/catalog/checkout"}
        className="md:hidden mt-12"
      >
        <Image
          alt="cta mobile"
          width={300}
          height={300}
          src="https://res.cloudinary.com/deezwetqk/image/upload/c_scale,w_450/v1695169713/ctamobil_zqw0or.png"
          className="min-w-full"
        />
      </Link>
      <WhatsappBubbleComponent />
    </>
  )
}

export default Homepage
