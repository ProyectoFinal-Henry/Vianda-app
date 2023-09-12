import NavAdmin from "@/components/adminLayout/NavAdmin"
import Footer from "@/components/footer/Footer"

const layoutAdmin = ({ children }) => {

return (
  <>
      <>
        <NavAdmin />
        {children}
        <Footer />
      </>
  </>
);
}

export default layoutAdmin
