import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  if (searchParams.toString().length > 0) {
    try {
      const nombre = searchParams.get("usuario");
      const email = searchParams.get("email");
      const dni = searchParams.get("dni");
      let where = {};

      if (nombre) {
        where.nombreCompleto = {
          contains: nombre,
          mode: "insensitive",
        };
      }
      if (email) {
        where.email = {
          contains: email,
          mode: "insensitive",
        };
      }
      if (dni) {
        where.dni = {
          contains: dni,
          mode: "insensitive",
        };
      }

      if (dni || email) {
        const usuario = await prisma.usuario.findFirst({
          where,
        });

        if (usuario) {
          return NextResponse.json(usuario);
        } else {
          return NextResponse.json({
            message: "No se encontron ningun usuario con esa informacion",
          });
        }
      }
      if (nombre) {
        const usuarios = await prisma.usuario.findMany({
          where,
        });
        console.log(usuarios);
        if (usuarios) {
          return NextResponse.json(usuarios);
        } else {
          return NextResponse.json({
            message: "No se encontron ningun usuario con esa informacion",
          });
        }
      }
    } catch (error) {
      return NextResponse.json({ error: error.message });
    }
  } else {
    try {
      const usuarios = await prisma.usuario.findMany();
      return NextResponse.json(usuarios);
    } catch (error) {
      return NextResponse.json({
        message: "Error obteniendo la lista de usuarios",
        error: error.message,
      });
    }
  }
}
