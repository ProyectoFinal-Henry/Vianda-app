import jwt from "jsonwebtoken";
import { serialize } from "cookie";
import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function POST(request) {
  const { email, password } = await request.json();
  try {
    const usuario = await prisma.Usuario.findUnique({
      where: {
        email: email,
      },
    });

    if (!usuario) {
      return NextResponse.json("Correo electronico o contraseña incorrectos");
    }

    if (email === usuario.email && password === usuario.password) {
      const token = jwt.sign(
        {
          exp: Math.floor(Date.now() / 1000) * 3600 * 24 * 30,
          email: usuario.email,
          username: usuario.password,
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
      return new Response(JSON.stringify("success"), {
        status: 200,
        headers: {
          "Set-Cookie": serialized,
        },
      });
    }
    return NextResponse.json(
      { error: "usuario o contraseña incorrecta" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({
      message: "Ocurrio un error en el inicio de sesion",
      error: error.message,
    });
  }
}
