"use client"
import PedidosPDFPage from "@/app/admin/pedidos/pedidos-pdf/page"
import { PDFDownloadLink } from "@react-pdf/renderer"
import { useEffect, useState } from "react"
import { BsFileEarmarkPdfFill } from "react-icons/bs"
import axios from "axios"

const ExporterPdf = ({ pedidoId }) => {
  // for development:
  //  pedidoId = 1
  const [data, setData] = useState([])
  const [click, setClick] = useState(false)
  const dataGetter = async () => {
    const URL = `/api/pedidos/detalle-pedido/${pedidoId}`
    try {
      const res = await axios(URL)
      const dataOrder = res.data
      // const { id, totalVenta, estado, fecha, usuario, detallePedido } = dataOrder
      setData(dataOrder)
    } catch (error) {
      throw new Error("Error al realizar la solicitud")
    }
  }

  useEffect(() => {
    dataGetter()
  }, [click])
  return (
    <>
      {data && (
        <>
          <PDFDownloadLink document={<PedidosPDFPage pedido={data} />}>
            <BsFileEarmarkPdfFill
              className="text-xl text-red-500 hover:text-red-600 cursor-pointer"
              onClick={() => setClick(true)}
            />
          </PDFDownloadLink>
        </>
      )}
    </>
  )
}

export default ExporterPdf
