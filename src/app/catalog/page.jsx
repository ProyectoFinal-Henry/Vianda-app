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

import Link from "next/link"

async function Homepage() {
  const res = await axios.get(`${process.env.LOCALHOST}/api/viandas`)
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
      <RowResponsive>
        <CardTipes />

        <Pagination data={data} />

        <Link
          href={"/catalog/checkout"}
          className="hidden md:block"
        >
          <img
            src="/images/CTA.png"
            className="min-w-full"
          />
        </Link>
      </RowResponsive>
      <Link
        href={"/catalog/checkout"}
        className="md:hidden mt-12"
      >
        <img
          src="/images/ctamobil.png"
          className="min-w-full"
        />
      </Link>
      <WhatsappBubbleComponent />
    </>
  )
}

export default Homepage
