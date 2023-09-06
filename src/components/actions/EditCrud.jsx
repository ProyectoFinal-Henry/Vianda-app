import Link from "next/link"
import { FiEdit2 } from "react-icons/fi"
const EditCrud = ({ route }) => {
  return (
    <>
      <Link href={route}>
        <FiEdit2 className="text-2xl text-cyan-900" />
      </Link>
    </>
  )
}

export default EditCrud
