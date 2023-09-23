import jwt from "jsonwebtoken";
import { serialize } from "cookie";
import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";
import { compare } from "bcrypt";

export async function POST(request) {
  const { email, password } = await request.json();
  try {
    const usuario = await prisma.Usuario.findUnique({
      where: {
        email: email,
      },
    });

    if (!usuario) {
      return NextResponse.json(
        { error: "Correo electronico incorrecto" },
        { status: 203 }
      );
    }

    // comparacion contraseña ingresada con la almacenada en base de datos
    const passwordMatch = await compare(password, usuario.password);

    //si contraseña coincide se genera el token
    if (passwordMatch) {
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
      const response = NextResponse.json(
        {
          message: "login succesful",
          rol: usuario.rol,
          id: usuario.id,
        },
        { status: 200 }
      );
      response.cookies.set({
        name: "myToken",
        value: token,
        path: "/",
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
      });
      return response;
    } else {
      // Contraseña incorrecta, deniega el acceso
      return NextResponse.json(
        { error: "Contraseña incorrecta" },
        { status: 202 }
      );
    }
  } catch (error) {
    return NextResponse.json({
      message: "Ocurrio un error en el inicio de sesion",
      error: error.message,
    });
  }
}
