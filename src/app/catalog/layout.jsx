import Footer from "@/components/footer/Footer"
import NavBar from "@/components/navbar/NavBar"
// import { Toaster, toast } from 'sonner'

const layoutAdmin = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
      {/* <Toaster/> */}
    </div>
  )
}

export default layoutAdmin
