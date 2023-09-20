import NavAdmin from "@/components/adminLayout/NavAdmin";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "ViandApp - Administrador",
  description: "",
};

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
};

export default layoutAdmin;
