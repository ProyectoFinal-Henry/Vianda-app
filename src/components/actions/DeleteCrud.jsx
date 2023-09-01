"use client"
import axios from "axios"
import { useRouter } from "next/navigation"
import { AiOutlineDelete } from "react-icons/ai"
const DeleteCrud = ({ id }) => {
  const router = useRouter()

  const deleter = async () => {
    axios.delete(`${process.env.LOCALHOST}/id`)
    alert(`deleting ${id}`)
    router.refresh()
  }
  return (
    <>
      <AiOutlineDelete
        onClick={deleter}
        className="text-2xl text-warning"
      />
    </>
  )
}

export default DeleteCrud
