import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken'

export async function GET(request) {
  try {
    const myToken = request.cookies.get('myToken')
    const data = jwt.verify(myToken.value, 'secret')
    return NextResponse.json(data.username, {status: 200});

  } catch (error) {
    return NextResponse.json({error: 'no token'}, {status: 401})
  }
}
