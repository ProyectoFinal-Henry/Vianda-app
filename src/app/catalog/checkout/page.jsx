import CatalogRegisterPage from "@/components/checkout/CatalogRegisterPage";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken"

function page(){
const cookieStore = cookies()
const token = cookieStore.get("myToken")
let tokenData = {}
if(token){
    tokenData = jwt.verify(token.value, "secret")
}

return(
  <>
  <CatalogRegisterPage tokenData={tokenData}/>
  </>
)
}

export default page;