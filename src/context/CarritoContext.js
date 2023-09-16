"use client"
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { set } from "react-hook-form";

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
    const [precioTotal, setPrecioTotal] = useState(0);
    const [userId, setUserId] = useState(0);
    const [flagLogeed, setFlagLogeed] = useState(false);
    let savedData = [];

    useEffect(() => {
        const viandasGuardadas = localStorage.getItem("viandas");
        const viandasGuardadasArray = JSON.parse(viandasGuardadas);
        if (viandasGuardadas) {
            setViandas(viandasGuardadasArray);
        }
    }, [])

    useEffect(() => {
        const contadorCantidad = viandas.reduce((total, producto) => total + producto.cantidad, 0);
        setCantidadTotal(contadorCantidad || 0);
        const contadorPrecio = viandas.reduce((total, producto) => Number(total) + (Number(producto.precio) * Number(producto.cantidad)), 0);
        setPrecioTotal(contadorPrecio || 0)
        localStorage.setItem("viandas", JSON.stringify(viandas));
        if (flagLogeed === true) {
            const carritoString = JSON.stringify(viandas);
            if (carritoString.length > 5) {
                carritoPUT(carritoString);
            }
        }
    }, [viandas])



    const carritoPUT = async (carritoString) => {
        const carritoCampo = {
            carrito: carritoString
        }
        try {
            const respuesta = await axios.put(`/api/usuarios/${userId}`, carritoCampo);
        } catch (error) {
            throw new Error("algo salio mal en el put de la DB!")
        }
    }

    useEffect(() => {
        identificacion().then((flag) => {
            if (flag === true) {
                checkSavedData().then((flag) => {
                    if (flag === true) {
                        setViandas(savedData);
                    };
                });
            };
        })
    }, [flagLogeed])

    const identificacion = async () => {
        const usuario = await axios.get("/api/auth/check");
        //setTimeout(() => { }, 8000);
        const id = usuario.data.id;
        setUserId(Number(id));
        if (id) {
            return true;
        }
        return false;
    }

    const checkSavedData = async () => {
        if (userId !== 0) {
            const respuesta = await axios.get(`/api/usuarios/${userId}`);
            //setTimeout(() => { }, 8000);
            const carrito = respuesta.data.carrito;
            if (carrito && carrito.length > 5) {
                const carritoParseado = JSON.parse(carrito);
                savedData = carritoParseado
                return true;
            }
            return false;
        }
    }

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

    return <CarritoContext.Provider value={{ viandas, cantidadTotal, precioTotal, agregarVianda, quitarVianda, modificarCantidad, setFlagLogeed, setUserId }}>{children}</CarritoContext.Provider>
}

