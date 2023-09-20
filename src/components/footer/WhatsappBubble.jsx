"use client"
import { RiWhatsappFill } from "react-icons/ri"
import { useState } from "react"

const WhatsappBubbleComponent = () => {
  const [bounce, setBounce] = useState(false)
  return (
    <>
      <div
        className=" tooltip tooltip-accent fixed bottom-4 right-4  bg-white 
        tooltip-left rounded-full p-1 md:p-2 text-white font-bold rounded-bl-lg  "
        data-tip="Contáctanos por whatsapp"
      >
        <a
          className="    "
          href="https://api.whatsapp.com/send?phone=573115228664&text=Hola%20,quisiera ordenar%20mis%20viandas%20por%20whatsapp%20e%20informaci%C3%B3n%20de%20tus%20servicios"
          target="_blank"
        >
          <RiWhatsappFill
            className="
            text-5xl
            md:text-6xl
          
          text-green-500
         
         "
          />
        </a>
      </div>
    </>
  )
}

export default WhatsappBubbleComponent
