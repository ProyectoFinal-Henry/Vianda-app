"use client"
import LoadingComponentApp from "@/app/loading"
import axios from "axios"
import { BsFillClipboardCheckFill } from "react-icons/bs"
import { useRouter } from "next/navigation"
import { AiOutlineDelete } from "react-icons/ai"
import { useState } from "react"
const ToogleEstadoVianda = ({ id, localHost, estado }) => {
  const [loading, setLoading] = useState(false)

  const router = useRouter()
  const tooglerEstadoVianda = async () => {
    setLoading(true)
    const deletedVianda = await axios.delete(`${localHost}/api/viandas/${id}`)
    router.refresh()
    setLoading(false)
  }
  return (
    <>
      {loading && <LoadingComponentApp />}
      {estado ? (
        <span
          className="tooltip tooltip-warning text-white tooltip-left before:top-2"
          data-tip="Desactivar vianda"
          onClick={tooglerEstadoVianda}
        >
          <AiOutlineDelete className="text-2xl text-warning" />
        </span>
      ) : (
        <span
          className="tooltip tooltip-accent text-white tooltip-left tooltip-top "
          data-tip="Activar vianda"
          onClick={tooglerEstadoVianda}
        >
          <BsFillClipboardCheckFill className=" text-2xl text-accent" />
        </span>
      )}
    </>
  )
}

export default ToogleEstadoVianda
