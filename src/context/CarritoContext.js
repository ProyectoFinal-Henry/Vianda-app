"use client"
import { createContext, useContext, useEffect, useState } from "react";

export const CarritoContext = createContext();

export const useCarrito = () => {
    const context = useContext(CarritoContext);
    if (!context) {
        throw new Error("Error en el contexto, quizas no este dentro de un provider.")
    }
    return context;
}
let precioTotal = 0;

export const CarritoProvider = ({ children }) => {
    const [viandas, setViandas] = useState([]);
    const [cantidadTotal, setCantidadTotal] = useState(0);


    useEffect(() => {
        const viandasGuardadas = localStorage.getItem("viandas");
        const viandasGuardadasArray = JSON.parse(viandasGuardadas)
        const cantidadTotalGuardada = localStorage.getItem("cantidadTotal")
        const cantidadTotalNumber = Number(cantidadTotalGuardada);
        if (viandasGuardadasArray && cantidadTotalNumber) {
            setViandas(viandasGuardadasArray);
            setCantidadTotal(cantidadTotalNumber);
        }
    }, [])


    useEffect(() => {
        const contadorCantidad = viandas.reduce((total, producto) => total + producto.cantidad, 0);
        setCantidadTotal(contadorCantidad);
        const contadorPrecio = viandas.reduce((total, producto) => Number(total) + (Number(producto.precio) * Number(producto.cantidad)), 0);
        precioTotal = contadorPrecio
        localStorage.setItem("viandas", JSON.stringify(viandas));
        localStorage.setItem("cantidadTotal", contadorCantidad);
    }, [viandas])

    const agregarVianda = async (nuevaVianda) => {
        const busqueda = await viandas.find((vianda) => vianda.id === nuevaVianda.id);
        if (!busqueda) {
            setViandas([...viandas, nuevaVianda]);
        }
    }

    const quitarVianda = async (id) => {
        const busqueda = await viandas.find((vianda) => vianda.id === id);
        if (busqueda) {
            const resultado = viandas.filter((vianda) => vianda.id !== id);
            setViandas(resultado);
            localStorage.setItem("viandas", JSON.stringify(viandas));
        } else {
            throw new Error("No se pudo encontrar la vianda en el carrito de compras.")
        }
        return true;
    }

    const modificarCantidad = (id, valor) => {
        const busqueda = viandas.find((vianda) => vianda.id === id);
        if (busqueda) {
            let contador = cantidadTotal - busqueda.cantidad;
            contador = contador + valor;
            busqueda.cantidad = valor;
            setCantidadTotal(contador);
        }
        else {
            throw new Error("No se pudo encontrar la vianda en el carrito de compras.")
        }
    }
    
    return <CarritoContext.Provider value={{ viandas, cantidadTotal, precioTotal, agregarVianda, quitarVianda, modificarCantidad }}>{children}</CarritoContext.Provider>
}
