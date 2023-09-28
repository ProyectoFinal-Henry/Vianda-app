"use client"
import { BsBox2Heart } from "react-icons/bs"
import { BiSupport } from "react-icons/bi"
import { BsShieldCheck } from "react-icons/bs"
import CardsCheckout from "@/components/checkout/CardsCheckout"
import RowResponsive from "@/components/formaters/RowResponsive"
import axios from "axios"
import Image from "next/image"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { useCarrito } from "@/context/CarritoContext"
import LoadingComponentApp from "@/app/loading"
import pedidosFormater from "@/libs/utils/pedidosFormater"
import { useRouter } from "next/navigation"
import { creation } from "@/app/api/email/templates"
import Swal from 'sweetalert2'


const CatalogRegisterPage = ({tokenData}) => {
  const router = useRouter()
  const { precioTotal, viandas, setViandas, setFlagLogeed, setUserDataCarrito } = useCarrito();
  const [semana, setSemana] = useState([])
  const [ready, setReady] = useState(false)
  const [loader, setLoader] = useState("off")
  let idPedido = 0

  //!-------------------------------------------------
  const metodoPago = "MercadoPago"
  const estado = "pendiente"
  //!-------------------------------------------------

  const semanal = async () => {
    //Esta funcion carga en el array week, 5 arrays de objetos, en el que cada array
    //contiene las 4 viandas asignadas a ese dia.
    const week = []
    const respuestaLunes = await axios.get(`/api/viandas?dia=lunes`);
    const viandasLunes = respuestaLunes.data
    week.push(viandasLunes)

    const respuestaMartes = await axios.get(`/api/viandas?dia=martes`);
    const viandasMartes = respuestaMartes.data
    week.push(viandasMartes)

    const respuestaMiercoles = await axios.get(`/api/viandas?dia=miercoles`);
    const viandasMiercoles = await respuestaMiercoles.data
    week.push(viandasMiercoles)

    const respuestaJueves = await axios.get(`/api/viandas?dia=jueves`);
    const viandasJueves = await respuestaJueves.data
    week.push(viandasJueves)

    const respuestaViernes = await axios.get(`/api/viandas?dia=viernes`);
    const viandasViernes = await respuestaViernes.data

    week.push(viandasViernes)
    setReady(true)
    setSemana(week)
  };

  useEffect(() => {
    semanal()
    if(tokenData.rol === "cliente"){
      setUserDataCarrito(tokenData)
      setFlagLogeed(true)
    }
  }, [])


  const handleClick = async (e) => {
    if(precioTotal !== 0){
      
      setLoader("on");
      if (tokenData.rol !== "cliente") {
        setLoader("off")

        const result = await Swal.fire({
          icon:"info",
          title: 'Ingresa o Registrate para continuar.',
          confirmButtonColor: '#38A169',
          confirmButtonText: 'Aceptar'
        })
        if(result.isConfirmed){
          router.push("/catalog/login")
        }
      
      } else {
          //Desestructuracion de los datos del usuario logueado.
          const usuarioNombre = tokenData.nombre
          const usuarioEmail = tokenData.email
          const fk_usuarioId = tokenData.id
          //Formateo del un objeto para que coincida con el modelo de la DB.
          const nuevoPedido = pedidosFormater(fk_usuarioId, precioTotal, metodoPago, estado, viandas);
          
          try {
              //Creacion del pedido en base de datos.
              const pedidoCreado = await axios.post(`/api/pedidos`, nuevoPedido)
              //Recuperacion y guardado del ID del pedido creado recientemente.
              idPedido = pedidoCreado.data.data.id
              if (idPedido){
                //Vaciado del estado del contexto y del localstorage.
                setViandas([])
                //Vaciado del campo "carrito" en el usuario.
                carritoPUT(fk_usuarioId)       
              }
          } catch (error) {
            window.alert("No se pudo registar el pedido. Intentelo nuevamente en unos minutos. Si el problema persiste pongase en contacto con el administrador.")
            }
          try {
              //Creacion de una orden de Mercado pago. La orden se envia al back de MP con la informacion.
              //Mercado pago responde con un body que tiene un propiedad initPoint que es una url generada para el pago.
              const creacionOrdenMP = await axios.post("/api/pagos", {precioTotal:precioTotal, idPedido:idPedido, usuarioNombre:usuarioNombre, usuarioEmail:usuarioEmail})
              //Se guarda la url obtenida en la respuesta de /api/pagos.
              const linkPago = creacionOrdenMP.data
              //Creacion del objeto para la notificacion.
              const pedidoCreadoMail = {
                  to: usuarioEmail,
                  subject: "Creaste tu pedido!",
                  text: "Version texto",
                  html: creation(usuarioNombre, linkPago),
              }
              //Envio de notificacion.
              const sendMail = await axios.post("/api/email", pedidoCreadoMail)
              //Redireccion al link de pago.
              router.push(`${linkPago}`)                          
          } catch (error) {
              throw new Error(error.message)
            }
        }
    }else{
      Swal.fire({
        icon:"info",
        title: 'No elegiste nada!',
        text: "Se requiere una vianda seleccionada como minimo para proseguir.",
        confirmButtonColor: '#38A169',
        confirmButtonText: 'Volver'
      })
    }
  }

  const carritoPUT = async (id) => {
    const carritoCampo = {
        carrito: "[]",
    }                                           
    try {
        const respuesta = await axios.put(`/api/usuarios/${id}`, carritoCampo)
    } catch (error) {
        console.error("Error en la solicitud PUT:", error)
        throw new Error("Algo salió mal en el PUT de la DB")
      }
  }

  return (
    <>
      {ready ? (
        <RowResponsive>
          <div
            id="checkout"
            className="flex  flex-col md:flex-row min-h-[80vh] items-center  gap-8"
          >
            <main className="md:max-w-[80%] " id="grid">
              
              <h1
                id="title"
                className="font-bold text-lg text-center mx-4
              md:mt-8 md:text-left"
              >
                MIS VIANDAS PARA LA SEMANA DEL:
                <br className="md:hidden" /> 02 AL 06 DE OCTUBRE:
              </h1>
              <div className="divider my-0"></div>

              <div className="flex flex-row justify-center flex-wrap gap-2 items-center">
                <CardsCheckout viandasDia={semana[0]} dia={"lunes"} />
                <CardsCheckout viandasDia={semana[1]} dia={"martes"} />
                <CardsCheckout viandasDia={semana[2]} dia={"miercoles"} />
                <CardsCheckout viandasDia={semana[3]} dia={"jueves"} />
                <CardsCheckout viandasDia={semana[4]} dia={"viernes"} />
              </div>

              <div id="cards" className=""></div>
            </main>

            <div className="min-w-[100%] md:min-w-[20%] flex flex-col justify-start mt-16 ">
              <aside
                className="fixed bottom-0 left-0 md:relative bg-base-100 min-w-[100%]  px-3 flex flex-col border-2 border-slate-900/10 rounded-t-xl pt-2
               md:rounded-xl
              "
                id="detail"
              >
                <h2 className="font-bold text-lg">RESUMEN DE TU PEDIDO</h2>
                <div className="divider my-0"></div>
                <div className="flex flex-row justify-between items-center">
                  <h3 className="font-bold text-lg">TOTAL:</h3>
                  <h3 className="font-bold text-lg text-red-500">
                    $ {precioTotal}
                  </h3>
                </div>
                <div className="divider my-0"></div>
                <div id="btnWrapper" className="min-w-full p-2">
                {loader === "on" && (
                    <div className="flex flex-row justify-center items-center success w-[97%] bg-slate-50/90 absolute top-25 left-0 rounded-md mx-1 mr-8 h-12">
                      <span className="loading loading-infinity loading-lg min-w-[45px] text-accent  "></span>
                    </div>
                  )}
                  <button
                    onClick={handleClick}
                    className="btn  btn-warning btn-wide min-w-full text-white text-xl tracking-wider  "
                  >
                    PROCESAR COMPRA
                  </button>
                  <div className="divider my-0"></div>
                  <Image
                    className="mx-auto my-4 hidden md:block"
                    src={"https://res.cloudinary.com/deezwetqk/image/upload/v1695171791/100seguro_egyiqx.png"}
                    alt="seguro"
                    height={"46"}
                    width={"155"}
                  ></Image>
                  <section className="hidden  md:block">
                    <Link
                      className="flex flex-row gap-x-4 items-center text-neutral-600 my-4 mx-2"
                      href={"#"}
                    >
                      <BsShieldCheck className=" text-3xl " />
                      <span className=" text-lg font-medium">
                        Protección al comprador
                      </span>{" "}
                    </Link>
                    <Link
                      className="flex flex-row gap-x-4 items-center text-neutral-600 my-4 mx-2"
                      href={"#"}
                    >
                      <BiSupport className=" text-3xl " />
                      <span className=" text-lg font-medium">
                        Asesoría telefónica: (54) 484-2222
                      </span>{" "}
                    </Link>
                    <Link
                      className="flex flex-row gap-x-4 items-center text-neutral-600 my-4 mx-2"
                      href={"#"}
                    >
                      <BsBox2Heart className=" text-3xl " />
                      <span className=" text-lg font-medium">
                        Rastrea tu pedido
                      </span>{" "}
                    </Link>
                  </section>
                </div>
              </aside>
            </div>
          </div>
        </RowResponsive>
      ) : (
        <div className="flex min-h-[90vh]">
          <LoadingComponentApp />
        </div>
      )}
    </>
  );
};

export default CatalogRegisterPage;