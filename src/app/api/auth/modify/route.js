import jwt from "jsonwebtoken";
import { serialize } from "cookie";

export async function PUT(request) {
  try {
    const { nombreCompleto, email, dni, telefono, direccion } = await request.json();

    const token = jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000) * 3600 * 24 * 30,
        nombre: nombreCompleto,
        email: email,
        dni: dni,
        direccion: direccion,
        telefono: telefono,
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
      JSON.stringify({ message: "success" }),
      {
        status: 200,
        headers: {
          "Set-Cookie": serialized,
        },
      }
    );
  } catch (error) {
    console.log(error)
  }
}
