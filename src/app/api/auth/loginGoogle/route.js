import jwt from "jsonwebtoken";
import { serialize } from "cookie";
import { NextResponse } from "next/server";

export async function POST() {
    try {
        const token = jwt.sign(
        {
          exp: Math.floor(Date.now() / 1000) * 3600 * 24 * 30,
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
      return new Response(JSON.stringify({ message: 'success', rol: 'cliente' }), {
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
  }
}
