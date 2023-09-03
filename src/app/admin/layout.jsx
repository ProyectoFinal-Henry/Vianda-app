import FooterAdmin from "@/components/adminLayout/FooterAdmin"
import NavAdmin from "@/components/adminLayout/NavAdmin"

const layoutAdmin = ({ children }) => {
  return (
    <>
      <NavAdmin />
      {children}
      <FooterAdmin />
    </>
  )
}

export default layoutAdmin
