import jwt from "jsonwebtoken";
import { serialize } from "cookie";
import { NextResponse } from "next/server";

export async function POST (request) {
 const {email, password} = await request.json()
  if (email === "prueba@gmail.com" && password === "admin123") {
    const token = jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000) * 3600 * 24 * 30,
        email: "prueba@gmail.com",
        username: "prueba",
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
    return new Response(JSON.stringify('success'), {
      status: 200,
      headers: {
        'Set-Cookie': serialized,
      },
    });
  }
  return NextResponse.json({ error: "usuario o contraseña incorrecta" }, { status: 401 });
};
