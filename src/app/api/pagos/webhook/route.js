import axios from "axios";
import mercadopago from "mercadopago";
import { NextResponse } from "next/server";



export async function POST(request) {
    const url = request.url
    const { searchParams } = new URL(request.url);
    const paymentId = Number(searchParams.get("data.id"))
    const paymentType = searchParams.get("type")
    try {

        if (paymentType === "payment") {
            const result = await axios.get(`https://api.mercadopago.com/v1/payments/${paymentId}`, {

                headers: {
                    'Authorization': `Bearer ${process.env.MERCADOPAGO_API_KEY}`
                }
            })
            const status = result.data.status;
            const idPedido = result.data.metadata.id_pedido;
            const estado = "pagado";
            //!put a la db
            try {
                if (status === "approved") {
                    const resultado = await axios.put(`${process.env.LOCALHOST}/api/pedidos`, { idPedido, estado })
                }
            } catch (error) {
                return NextResponse.json(error.message);
            }
        }
        return NextResponse.json("ok!")
    } catch (error) {
        return NextResponse.json(error.message);
    }
}