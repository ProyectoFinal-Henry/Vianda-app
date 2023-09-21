import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

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
        where.email = email;
      }
      if (dni) {
        where.dni = dni;
      }

      if (dni || email) {
        const usuario = await prisma.usuario.findFirst({
          where,
        });

        if (usuario) {
          return NextResponse.json(usuario);
        } else {
          return NextResponse.json(
            {
              message: "No se encontró ningún usuario con esa informacion",
            },
            { status: 202 }
          );
        }
      }
      if (nombre) {
        const usuarios = await prisma.usuario.findMany({
          where,
        });
        if (usuarios.length > 0) {
          return NextResponse.json(usuarios);
        } else {
          return NextResponse.json(
            {
              message: "No se encontró ningún usuario con esa informacion",
            },
            { status: 202 }
          );
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
      return NextResponse.json(
        {
          message: "Error obteniendo la lista de usuarios",
          error: error.message,
        },
        { status: 202 }
      );
    }
  }
}
