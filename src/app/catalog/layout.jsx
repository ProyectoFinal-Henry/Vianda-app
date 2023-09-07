import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navbar/NavBar";

const layoutAdmin = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default layoutAdmin;
