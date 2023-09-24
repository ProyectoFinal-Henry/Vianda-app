"use client"
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const CarritoContext = createContext();

export const useCarrito = () => {
    const context = useContext(CarritoContext);
    if (!context) {
        throw new Error("Error en el contexto, quizás no esté dentro de un provider.");
    }
    return context;
};

export const CarritoProvider = ({ children }) => {
    const [viandas, setViandas] = useState([]);
    const [cantidadTotal, setCantidadTotal] = useState(0);
    const [precioTotal, setPrecioTotal] = useState(0);
    const [userDataCarrito, setUserDataCarrito] = useState({});
    const [flagLogeed, setFlagLogeed] = useState(false);
    let savedData = [];

    const cargarViandasDesdeLocalStorage = () => {
        const viandasGuardadas = localStorage.getItem("viandas");
        const viandasGuardadasArray = JSON.parse(viandasGuardadas);
        if (viandasGuardadasArray) {
            setViandas(viandasGuardadasArray);
        }
    };

    const actualizarCarrito = () => {
        const contadorCantidad = viandas.reduce((total, producto) => total + producto.cantidad, 0);
        setCantidadTotal(contadorCantidad || 0);
        const contadorPrecio = viandas.reduce(
            (total, producto) => Number(total) + Number(producto.precio) * Number(producto.cantidad), 0);
        setPrecioTotal(contadorPrecio || 0);
        localStorage.setItem("viandas", JSON.stringify(viandas));
        if (flagLogeed === true) {
            const carritoString = JSON.stringify(viandas);
            if (carritoString.length > 1) {
                carritoPUT(carritoString);
            }
        }
    };

    const carritoPUT = async (carritoString) => {
        const carritoCampo = {
            carrito: carritoString,
        };

        try {
            const respuesta = await axios.put(`/api/usuarios/${userDataCarrito.id}`, carritoCampo);
        } catch (error) {
            console.error("Error en la solicitud PUT:", error);
            throw new Error("Algo salió mal en el PUT de la DB");
        }
    };


    const checkSavedData = async () => {
        if (userDataCarrito.id !== 0) {
            const respuesta = await axios.get(`/api/usuarios/${userDataCarrito.id}`);
            const carrito = respuesta.data.carrito;
            if (carrito && carrito.length > 5) {
                const carritoParseado = JSON.parse(carrito);
                savedData = carritoParseado;
                return { success: true, viandas: carritoParseado };
            }
            return { success: false };
        }
    };


    const agregarVianda = async (nuevaVianda) => {
        const busqueda = await viandas.find((vianda) => vianda.id === nuevaVianda.id);
        if (!busqueda) {
            setViandas([...viandas, nuevaVianda]);
        }
    };

    const quitarVianda = async (id) => {
        const busqueda = await viandas.find((vianda) => vianda.id === id);
        if (busqueda) {
            const resultado = viandas.filter((vianda) => vianda.id !== id);
            setViandas(resultado);
            localStorage.setItem("viandas", JSON.stringify(resultado));
        } else {
            throw new Error("No se pudo encontrar la vianda en el carrito de compras.");
        }
        return true;
    };

    const modificarCantidad = (id, valor) => {
        const busqueda = viandas.find((vianda) => vianda.id === id);
        if (busqueda) {
            let contador = cantidadTotal - busqueda.cantidad;
            contador = contador + valor;
            busqueda.cantidad = valor;
            setCantidadTotal(contador);
        } else {
            throw new Error("No se pudo encontrar la vianda en el carrito de compras.");
        }
    };

    useEffect(() => {
        cargarViandasDesdeLocalStorage();
    }, []);

    useEffect(() => {
        actualizarCarrito();
    }, [viandas]);

    useEffect(() => {
        if (flagLogeed === true) {
            checkSavedData().then((result) => {
                console.log("🚀 ~ file: CarritoContext.js:117 ~ checkSavedData ~ result:", result)
                if (result && result.success) {
                    if (result.viandas.length > viandas.length) {
                        setViandas(result.viandas)
                    } else {
                        const carritoString = JSON.stringify(viandas);
                        if (carritoString.length > 1) {
                            carritoPUT(carritoString);
                        }
                    }
                }
                if (result.success === false) {
                    const carritoString = JSON.stringify(viandas);
                    if (carritoString.length > 1) {
                        carritoPUT(carritoString);
                    }
                }
            });
        }
    }, [flagLogeed]);


    return (
        <CarritoContext.Provider
            value={{
                viandas,
                cantidadTotal,
                precioTotal,
                setViandas,
                agregarVianda,
                quitarVianda,
                modificarCantidad,
                setFlagLogeed,
                setUserDataCarrito,
            }}
        >
            {children}
        </CarritoContext.Provider>
    );
};
