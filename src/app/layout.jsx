import "./globals.css"
import { Quicksand } from "next/font/google"
import { CarritoProvider } from "../context/CarritoContext"
import Providers from "./Providers"
const quicksand = Quicksand({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] })

export const metadata = {
  title: "ViandApp",
  description: "",
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="viandapp"
    >
      <body className={quicksand.className}>
        <Providers>
          <CarritoProvider>{children}</CarritoProvider>
        </Providers>
      </body>
    </html>
  )
}
