import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function GET(request) {
  try {
    const token = request.cookies.get('myToken')
    console.log(request.cookies)
      const { payload } = await jwtVerify(
        token.value,
        new TextEncoder().encode("secret")
      );
    return NextResponse.json({id: payload.id, nombre: payload.nombre, email: payload.email,
       dni: payload.dni, direccion: payload.direccion, telefono: payload.telefono, rol: payload.rol},
       {status: 200});

  } catch (error) {
    console.log(error)
    return NextResponse.json({error: 'no token'}, {status: 202})
  }
}
