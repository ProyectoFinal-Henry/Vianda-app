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
        localStorage.setItem("viandas", JSON.stringify(viandas));
        localStorage.setItem("cantidadTotal", cantidadTotal);
    }, [viandas])

    const agregarVianda = async (nuevaVianda) => {
        const busqueda = await viandas.find((vianda) => vianda.id === nuevaVianda.id);
        if (busqueda) {
            busqueda.cantidad++;
            let contador = cantidadTotal + 1;
            setCantidadTotal(contador);
        } else {
            nuevaVianda.cantidad = 1;
            setViandas([...viandas, nuevaVianda]);
            let contador = cantidadTotal + 1;
            setCantidadTotal(contador);
        }
    }

    const quitarVianda = async (id) => {
        const busqueda = await viandas.find((vianda) => vianda.id === id);
        if (busqueda) {
            let contador = cantidadTotal - busqueda.cantidad;
            const resultado = viandas.filter((vianda) => vianda.id !== id);
            setViandas(resultado);
            setCantidadTotal(contador);
            localStorage.setItem("viandas", JSON.stringify(viandas));
            localStorage.setItem("cantidadTotal", cantidadTotal);
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
            setCantidadTotal(contador);
            busqueda.cantidad = valor;
        }
        else {
            throw new Error("No se pudo encontrar la vianda en el carrito de compras.")
        }
    }



    return <CarritoContext.Provider value={{ viandas, cantidadTotal, agregarVianda, quitarVianda, modificarCantidad }}>{children}</CarritoContext.Provider>
}
