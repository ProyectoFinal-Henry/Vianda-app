import mercadopago from "mercadopago";
import { NextResponse } from "next/server";

export async function POST(request) {

    const { precioTotal, idPedido, usuarioNombre, usuarioEmail } = await request.json()

    mercadopago.configure({
        access_token: process.env.MERCADOPAGO_API_KEY
    });
    try {
        const result = await mercadopago.preferences.create({
            items: [{
                title: "Pedido Semanal",
                unit_price: Number(precioTotal),
                currency_id: "ARS",
                quantity: 1,
            }],
            back_urls: {
                success: `${process.env.LOCALHOST}/catalog`,
                pending: `${process.env.LOCALHOST}/catalog`,
                failure: `${process.env.LOCALHOST}/catalog`,
            },
            notification_url: `${process.env.LOCALHOST}/api/pagos/webhook`,
            metadata: {
                idPedido: idPedido,
                usuarioNombre: usuarioNombre,
                usuarioEmail: usuarioEmail,
            },
        })
        return NextResponse.json(result.body.init_point);
    } catch (error) {
        return NextResponse.json(error.message);
    }
}