import { NextResponse } from "next/server";
import  { jwtVerify } from 'jose'
import NotAdmin from "./components/adminLayout/NotAdmin";

export async function middleware(request) {
  const token = request.cookies.get("myToken");

  if (request.nextUrl.pathname.includes("/admin") || request.nextUrl.pathname.includes("/mi-cuenta")) {
    if (token === undefined) {
      return NextResponse.redirect(new URL("/catalog/login", request.url));
    }
  }

  if (request.nextUrl.pathname.includes("/login")) {
    if (token !== undefined){
      return NextResponse.redirect(<NotAdmin />);
    }
  }


  return NextResponse.next();
}
