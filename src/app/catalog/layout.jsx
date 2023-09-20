import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navbar/NavBar";

export const metadata = {
  title: "ViandApp - Comida Saludable",
  description: "",
};

const layoutAdmin = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default layoutAdmin;
