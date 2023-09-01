import { NextResponse } from "next/server"

const DELETE = ({ params }) => {
  try {
    return NextResponse.json()
  } catch (error) {
    return NextResponse.json("deleted", { status: 403 })
  }
}

export default DELETE
