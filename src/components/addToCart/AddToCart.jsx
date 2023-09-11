"use client"
import { useCarrito } from "@/context/CarritoContext"
import { useState } from "react";


    const AddToCart = async ({ id, imagen, nombre, tipo, descripcion, ingredientes, stock }) => {
        const {agregarVianda}= useCarrito();
        
        const nuevaVianda ={
            id:id,
            imagen:imagen,
            nombre:nombre,
            tipo: tipo,
            descripcion: descripcion,
            ingredientes: ingredientes,
            stock:stock,
            cantidad:1,
        }
        const handleClick = async() => {
            //!esto va en el onchange del select y agrega el va a ser seleccionado-
            //await quitarVianda(id);
            await agregarVianda(nuevaVianda);
        }
    return (
        <>
        <button onClick={handleClick}>Add</button>
        </>
    )
}

export default AddToCart;