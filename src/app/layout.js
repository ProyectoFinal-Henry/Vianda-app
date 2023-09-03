import NavBar from "@/components/navbar/NavBar"
import "./globals.css"
import { Quicksand } from "next/font/google"
import Footer from "@/components/footer/Footer"


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
      <NavBar />
        {children}
      <Footer/>
      </body>

    </html>
  )
}
