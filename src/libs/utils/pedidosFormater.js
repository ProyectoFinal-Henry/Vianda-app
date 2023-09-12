const pedidosFormater = (fk_usuarioId, precioTotal, metodoPago, estado, viandas) => {

    const detallePedido = viandas.map((vianda) => {
        return {
            "viandaId": vianda.id,
            "cantidad": vianda.cantidad,
            "viandaNombre": vianda.nombre,
            "viandaImagen": vianda.imagen,
            "precio": vianda.precio,
            "total": (Number(vianda.precio) * Number(vianda.cantidad)),
        }
    })

    const formatoPedido = {
        "fk_usuarioId": fk_usuarioId,
        "totalVenta": precioTotal,
        "metodoPago": metodoPago,
        "estado": estado,
        "detallePedido": detallePedido,
    }

    return formatoPedido;
}

export default pedidosFormater;

/*{   "fk_usuarioId": 2, // Reemplaza con el ID del usuario que realiza el pedido
    "totalVenta": 50, // Reemplaza con el total de la venta
    "metodoPago": "Tarjeta de crédito", // Reemplaza con el método de pago
    "estado": "pagado", // Reemplaza con el estado deseado (pagado, despachado, entregado)
    "detallePedido": [
        {
            "viandaId": 1, // Reemplaza con el ID de la vianda
            "cantidad": 2, // Reemplaza con la cantidad deseada
            "viandaNombre": "arroz con pollo",
            "viandaImagen": "URL imagen",
            "precio": 10.00, // Reemplaza con el precio por unidad
            "total": 20.00 // Reemplaza con el total para esta vianda
        },
        {
            "viandaId": 2, // Reemplaza con el ID de la vianda
            "cantidad": 2, // Reemplaza con la cantidad deseada
            "viandaNombre": "arroz con pollo",
            "viandaImagen": "URL imagen",
            "precio": 10.00, // Reemplaza con el precio por unidad
            "total": 20.00 // Reemplaza con el total para esta vianda
        },
        {
            "viandaId": 3, // Reemplaza con el ID de la vianda
            "cantidad": 2, // Reemplaza con la cantidad deseada
            "viandaNombre": "arroz con pollo",
            "viandaImagen": "URL imagen",
            "precio": 10.00, // Reemplaza con el precio por unidad
            "total": 20.00 // Reemplaza con el total para esta vianda
        }
        // Agrega más viandas si es necesario
    ]
}*/