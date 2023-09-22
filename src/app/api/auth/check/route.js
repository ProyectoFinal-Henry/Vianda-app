
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'

export function GET() {
  try {
    const cookieStore = cookies()
    const myToken = cookieStore.get('myToken')
    const data = jwt.verify(myToken.value, 'secret')
    return NextResponse.json({id: data.id, nombre: data.nombre, email: data.email,
       dni: data.dni, direccion: data.direccion, telefono: data.telefono, rol: data.rol},
       {status: 200});

  } catch (error) {
    console.log(error)
    return NextResponse.json({error: 'no token'}, {status: 202})
  }
}
