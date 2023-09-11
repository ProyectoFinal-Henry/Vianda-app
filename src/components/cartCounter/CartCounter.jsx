"use client"
import { useCarrito } from "@/context/CarritoContext";

const CartCounter = ()=>{
const  {cantidadTotal}= useCarrito();

    return(
        <div>
            <button>{`cart: ${cantidadTotal}`}</button>
        </div>
    )
}

export default CartCounter;