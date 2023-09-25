import "./globals.css"
import { Quicksand } from "next/font/google"
import { CarritoProvider } from "../context/CarritoContext"
import Providers from "./Providers"
import Script from "next/script"
//import SmartLook from "@/components/tracking/smartlook"
const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata = {
  title: "ViandApp - Bienvenidos",
  description: "",
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="viandapp"
    >
      <body className={quicksand.className}>
        {/* <SmartLook /> */}
        <Providers>
          <CarritoProvider>{children}</CarritoProvider>
        </Providers>
        <Script
          strategy="afterInteractive"
          id="smartLookScript"
        >
          {`window.smartlook ||
              (function (d) {
                var o = (smartlook = function () {
                    o.api.push(arguments)
                  }),
                  h = d.getElementsByTagName("head")[0]
                var c = d.createElement("script")
                o.api = new Array()
                c.async = true
                c.type = "text/javascript"
                c.charset = "utf-8"
                c.src = "https://web-sdk.smartlook.com/recorder.js"
                h.appendChild(c)
              })(document)
            smartlook("init", "4a43f5340890144111d381d81ae9b117774414a1", { region: "eu" })
            `}
        </Script>
      </body>
    </html>
  )
}
