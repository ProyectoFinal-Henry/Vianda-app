"use client";
import { useCarrito } from "@/context/CarritoContext";

const AddToCart = ({
  id,
  imagen,
  nombre,
  tipo,
  descripcion,
  ingredientes,
  stock,
  precio,
  estado,
  lunes,
  martes,
  miercoles,
  jueves,
  viernes,
  sabado,
  domingo,
}) => {
  const { agregarVianda } = useCarrito();

  const nuevaVianda = {
    id: id,
    imagen: imagen,
    nombre: nombre,
    tipo: tipo,
    descripcion: descripcion,
    ingredientes: ingredientes,
    stock: stock,
    cantidad: 1,
    precio: precio,
    estado: estado,
    lunes: lunes,
    martes: martes,
    miercoles: miercoles,
    jueves: jueves,
    viernes: viernes,
    sabado: sabado,
    domingo: domingo,
  };
  const handleClick = async () => {
    await agregarVianda(nuevaVianda);
  };
  return (
    <>
      <button onClick={handleClick}>Add</button>
    </>
  );
};

export default AddToCart;
