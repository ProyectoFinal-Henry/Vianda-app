import { NextResponse } from "next/server";

export async function middleware(request) {
  const jwt = request.cookies.get("myToken");

  if (request.nextUrl.pathname.includes("/admin")) {
    if (jwt === undefined) {
      return NextResponse.redirect(new URL("/catalog/login", request.url));
    }
  }
  return NextResponse.next();
}
