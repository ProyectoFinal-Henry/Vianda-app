import jwt from "jsonwebtoken";
import { serialize } from "cookie";
import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export async function POST(request) {
  const { email } = await request.json();
  try {
    const usuario = await prisma.Usuario.findUnique({
      where: {
        email: email,
      },
    });

    if (!usuario) {
      console.log("202");
      return NextResponse.json(
        { error: "Correo electronico incorrecto" },
        { status: 202 }
      );
    } else {
      console.log("200");
      const token = jwt.sign(
        {
          exp: Math.floor(Date.now() / 1000) * 3600 * 24 * 30,
          email: usuario.email,
          nombre: usuario.nombreCompleto,
          rol: usuario.rol,
          id: usuario.id,
          dni: usuario.dni,
          direccion: usuario.direccion,
          telefono: usuario.telefono,
        },
        "secret"
      );
      const serialized = serialize("myToken", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 1000 * 3600 * 24 * 30,
        path: "/",
      });
      return new Response(
        JSON.stringify({ message: "success", rol: usuario.rol }),
        {
          status: 200,
          headers: {
            "Set-Cookie": serialized,
          },
        }
      );
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Ocurrio un error en el inicio de sesion",
        error: error.message,
      },
      { status: 203 }
    );
  }

  /* try {
      const token = jwt.sign(
        {
          exp: Math.floor(Date.now() / 1000) * 3600 * 24 * 30,
            rol: 'cliente',
            telefono: '',
            direccion: '',
            dni: ''
        },
        "secret"
      );
      const serialized = serialize("myToken", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 1000 * 3600 * 24 * 30,
        path: "/",
      });
      return new Response(JSON.stringify({ message: 'success' }), {
        status: 200,
        headers: {
          "Set-Cookie": serialized,
        },
      });
  } catch (error) {
    return NextResponse.json({
      message: "Ocurrio un error en el inicio de sesion",
      error: error.message,
    });
  } */
}
