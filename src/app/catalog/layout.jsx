import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navbar/NavBar";
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'

export const metadata = {
  title: "ViandApp - Comida Saludable",
  description: "",
};

const layoutAdmin = ({ children }) => {
  const cookieStore = cookies()
  const token = cookieStore.get('myToken')
  const tokenData = jwt.verify(token.value, 'secret')  
  return (
    <div>
      <NavBar tokenData={tokenData}/>
      {children}
      <Footer />
    </div>
  );
};

export default layoutAdmin;
