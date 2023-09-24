import { NextResponse } from "next/server"
import { jwtVerify } from "jose"

export async function middleware(request) {
  const token = request.cookies.get("myToken")
  let rol = null

  if (token) {
    try {
      const { payload } = await jwtVerify(token.value, new TextEncoder().encode("secret"))

      rol = payload.rol
    } catch (error) {
      return NextResponse.redirect(new URL("/catalog/login", request.url))
    }
  }

  if (rol) {
    // si es admin entra a todo si es otro rol y va a otro lado se redirige al login

    if (request.nextUrl.pathname.includes("/admin")) {
      if (rol === "administrador") {
        return NextResponse.next()
      } else {
        return NextResponse.redirect(new URL(`/role-redirect?from=${rol}&to=administrador`, request.url))
      }
    }

    if (request.nextUrl.pathname.includes("/cocina")) {
      if (rol === "cocina" || rol === "administrador") {
        return NextResponse.next()
      } else {
        return NextResponse.redirect(new URL(`/role-redirect?from=${rol}&to=cocina`, request.url))
      }
    }
    if (request.nextUrl.pathname.includes("/repartidor")) {
      if (rol === "repartidor" || rol === "administrador") {
        return NextResponse.next()
      } else {
        return NextResponse.redirect(new URL(`/role-redirect?from=${rol}&to=repartidor`, request.url))
      }
    }
  }

  if (!rol) {
    // si no hay cookie se redirige al login sin mas diciendole como quien se quiere logear
    if (request.nextUrl.pathname.includes("/admin")) {
      return NextResponse.redirect(new URL("/catalog/login?rol=administrador", request.url))
    }
    if (request.nextUrl.pathname.includes("/cocina")) {
      return NextResponse.redirect(new URL("/catalog/login?rol=cocina", request.url))
    }
    if (request.nextUrl.pathname.includes("/repartidor")) {
      return NextResponse.redirect(new URL("/catalog/login?rol=repartidor", request.url))
    }
  }

  return NextResponse.next()
}
