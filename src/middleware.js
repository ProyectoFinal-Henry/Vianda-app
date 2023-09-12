import { NextResponse } from "next/server";

export async function middleware(request) {
  const jwt = request.cookies.get("myToken");

  if (request.nextUrl.pathname.includes("/admin") || request.nextUrl.pathname.includes("/mi-cuenta")) {
    if (jwt === undefined) {
      return NextResponse.redirect(new URL("/catalog/login", request.url));
    }
  }

  if (request.nextUrl.pathname.includes("/login")) {
    if (jwt !== undefined){
      return NextResponse.redirect(new URL("/catalog/mi-cuenta", request.url));
    }
  }

  return NextResponse.next();
}
