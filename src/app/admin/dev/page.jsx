"use client"
import { FaAngellist } from "react-icons/fa"

import LoadingComponentApp from "@/app/loading"
import FormResponsiveContainer from "@/components/formaters/FormResponsiveContainer"
import RowResponsive from "@/components/formaters/RowResponsive"
import axios from "axios"
import { useState } from "react"
import { welcome, readyForMessenger } from "@/app/api/email/templates"

const SendMailsAdminDevs = () => {
  const [to, setTo] = useState("")
  const [subject, setSubject] = useState("")
  const [text, setText] = useState("")
  const [html, setHtml] = useState("")
  const [template, setTemplate] = useState("")
  const [loader, setLoader] = useState(false)
  const [showRecipient, setShowRecipient] = useState(false)
  const [recipient, setRecipient] = useState("")

  const templateHandler = (e) => {
    if (e.target.name === "template") {
      setTemplate(e.target.value)

      e.target.value === "nonen" && setShowRecipient(false)
      e.target.value !== "nonen" && setShowRecipient(true)
    }

    if (e.target.name === "recipient") {
      setRecipient(e.target.value)
      if (template === "welcome") {
        setHtml(welcome(e.target.value))
      }
      if (template === "readyForMessenger") {
        setHtml(readyForMessenger(e.target.value))
      }
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      setLoader(true)
      const email = await axios.post(`/api/email`, {
        to,
        subject,
        text,
        html,
      })
      setLoader("success")
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setLoader(false)
      //   email.data.message === "email sent" ? alert("email sent") : alert("email not sent")
    } catch (error) {}
    /* 
    
    {
    "to": "davidalejoms@gmail.com",
    "subject": "Enviando un email personalizado",
    "text": "esta es la version de texto del mensaje",
    "html": "<strong>esta es la version html de este mensaje</strong>"
}
    */
  }

  return (
    <>
      {loader === "success" && (
        <div
          className="toast toast-middle toast-center items-center
         bg-green-500 rounded-lg text-white  text-lg max-w-[] z-30 
         "
        >
          <FaAngellist className=" text-4xl animate-bounce text-black" />
          El e-mail fue enviado exitosamente, <br /> por favor revisar en spam si no se ve de inmediato
        </div>
      )}
      {loader === true && <LoadingComponentApp />}
      <RowResponsive>
        <FormResponsiveContainer>
          <h1 className=" text-lg font-bold min-w-full text-center my-4">Email Sender de pruebas:</h1>
          <form
            onSubmit={handleSubmit}
            className="min-w-full flex flex-col justify-center items-center "
          >
            <div className="min-w-full">
              <label
                htmlFor="to"
                className="block text-gray-700 font-bold mb-2"
              >
                Correo de destino:
              </label>
              <input
                type="email"
                id="to"
                name="to"
                value={to}
                onChange={(event) => setTo(event.target.value)}
                className="textarea textarea-bordered  border border-accent rounded w-full py-2 px-3 text-gray-700 leading-tight "
                required
              />
            </div>
            <div className="min-w-full">
              <label
                htmlFor="subject"
                className="block text-gray-700 font-bold mb-2"
              >
                Asunto
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={subject}
                onChange={(event) => setSubject(event.target.value)}
                className="textarea textarea-bordered  border border-accent rounded w-full py-2 px-3 text-gray-700 leading-tight "
                required
              />
            </div>
            <div className="min-w-full">
              <label
                htmlFor="text"
                className="block text-gray-700 font-bold mb-2"
              >
                Version de texto:
              </label>
              <textarea
                rows={"4"}
                id="text"
                name="text"
                value={text}
                onChange={(event) => setText(event.target.value)}
                className="textarea textarea-bordered  border border-accent rounded w-full py-2 px-3 text-gray-700 leading-tight "
                required
              />
            </div>
            <div className="min-w-full">
              <label
                htmlFor="html"
                className="block text-gray-700 font-bold mb-2"
              >
                Version de HTML:
              </label>
              <textarea
                rows={"4"}
                id="html"
                name="html"
                value={html}
                onChange={(event) => setHtml(event.target.value)}
                className="textarea textarea-bordered  border border-accent rounded w-full py-2 px-3 text-gray-700 leading-tight "
                required
              />
            </div>
            <div className="min-w-full">
              <label
                htmlFor="template"
                className="block text-gray-700 font-bold mb-2"
              >
                Version de template:
              </label>
              <select
                id="template"
                name="template"
                onChange={templateHandler}
                className="textarea textarea-bordered  border border-accent rounded w-full py-2 px-3 text-gray-700 leading-tight "
                required
              >
                <option value="nonen">Escoge un template</option>
                <option value="welcome">Welcome</option>
                <option value="readyForMessenger">Para Mensajero</option>
              </select>
            </div>

            {showRecipient && (
              <div className="min-w-full mt-8">
                <label
                  htmlFor="subject"
                  className="block text-gray-700 font-bold mb-2"
                >
                  {template === "welcome" && "Nombre del usuario:"}
                  {template === "readyForMessenger" && "Nombre del Mensajero"}
                </label>
                <input
                  type="text"
                  id="recipient"
                  name="recipient"
                  value={recipient}
                  onChange={templateHandler}
                  className="textarea textarea-bordered  border border-accent rounded w-full py-2 px-3 text-gray-700 leading-tight "
                  required
                />
              </div>
            )}

            <button
              type="submit"
              className="btn btn-primary btn-block mt-8 text-black font-bold py-2 px-4 rounded focus:outline-none "
            >
              Enviar email
            </button>
          </form>
        </FormResponsiveContainer>
      </RowResponsive>
    </>
  )
}

export default SendMailsAdminDevs
