import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken'

export async function GET(request) {
  try {
    const myToken = request.cookies.get('myToken')
    
    const data = jwt.verify(myToken.value, 'secret')
    return NextResponse.json({id: data.id, nombre: data.nombre, email: data.email,
       dni: data.dni, direccion: data.direccion, telefono: data.telefono, rol: data.rol},
       {status: 200});

  } catch (error) {
    return NextResponse.json({error: 'no token'}, {status: 401})
  }
}
