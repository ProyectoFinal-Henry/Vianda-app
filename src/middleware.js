import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request) {
  const token = request.cookies.get("myToken");
  let rol;

  const validateToken = async () => {
    if (token) {
      try {
        const { payload } = await jwtVerify(
          token.value,
          new TextEncoder().encode("secret")
        );

        rol = payload.rol;
      } catch (error) {
        return NextResponse.redirect(new URL("/catalog/login", request.url));
      }
    }
  };

  if (request.nextUrl.pathname.includes("/admin")) {
    await validateToken();
    if (rol === "administrador") {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL("/catalog/login?rol=administrador", request.url)
      );
    }
  }
  if (request.nextUrl.pathname.includes("/cocina")) {
    await validateToken();
    if (rol === "cocina" || rol === "administrador") {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL("/catalog/login?rol=cocina", request.url)
      );
    }
  }
  if (request.nextUrl.pathname.includes("/repartidor")) {
    await validateToken();
    if (rol === "repartidor" || rol === "administrador") {
      return NextResponse.next();
    } else {
      console.log("no es admin");
      return NextResponse.redirect(
        new URL("/catalog/login?rol=repartidor", request.url)
      );
    }
  }

  return NextResponse.next();
}
