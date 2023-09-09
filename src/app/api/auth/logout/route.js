import { NextResponse } from "next/server";
import { verify } from "jsonwebtoken";
import { serialize } from "cookie";

export async function POST(request) {
    const myToken = request.cookies._parsed.get('myToken').value;

  if (!myToken) {
    return NextResponse.json({error: 'no token'}, {status: 401})
  }
  try {
    verify(myToken, "secret");
    const serialized = serialize('myToken', null, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 0,
      path: "/",
    });
    return new Response(JSON.stringify('logout exitoso'), {
        status: 200,
        headers: {
          'Set-Cookie': serialized,
        },
      });
  } catch (error) {
    return NextResponse.json({error: 'invalid token'}, {status: 401})
  }
}
