"use client"
import { useCarrito } from "@/context/CarritoContext"


    const DeleteFromCart = async (props) => {
        const {id} = props;
        const {quitarVianda}= useCarrito();
        const handleClick = async() => {
             //!esto va en el onchange del select y BORRA el a a ser seleccionado-
            const result = await quitarVianda(id);
        }
    return (
        <>
        <button onClick={handleClick}>Delete</button>
        </>
    )
}

export default DeleteFromCart;