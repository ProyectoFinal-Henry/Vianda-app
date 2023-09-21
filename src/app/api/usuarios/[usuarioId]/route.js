import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export async function GET(request, { params }) {
  const { usuarioId } = params;
  try {
    const usuario = await prisma.usuario.findUnique({
      where: {
        id: Number(usuarioId),
      },
    });
    if (!usuario) {
      return NextResponse.json("Usuario no encontrado");
    }

    return NextResponse.json(usuario);
  } catch (error) {
    return NextResponse.json({
      message: "Error encontrando el usuario",
      error: error.message,
    });
  }
}

export async function DELETE(request, { params }) {
  const { usuarioId } = params;
  try {
    const usuario = await prisma.usuario.findUnique({
      where: {
        id: Number(usuarioId),
      },
    });
    if (!usuario) {
      return NextResponse.json("Usuario no encontrado");
    }

    await prisma.usuario.update({
      where: {
        id: Number(usuarioId),
      },
      data: {
        activo: !usuario.activo,
      },
    });

    return NextResponse.json(
      `Usuario con id ${usuarioId} fue actualizado correctamente`
    );
  } catch (error) {
    return NextResponse.json({
      message: "Error al intentar modificar el estado del usuario",
      error: error.message,
    });
  }
}

export async function PUT(request, { params }) {
  const { usuarioId } = params;
  const {
    rol,
    nombreCompleto,
    telefono,
    email,
    dni,
    password,
    direccion,
    carrito,
  } = await request.json();
  try {
    const usuario = await prisma.usuario.findUnique({
      where: {
        id: Number(usuarioId),
      },
    });

    if (!usuario) {
      return NextResponse.json("Usuario no encontrado");
    }
    const usuarioEditado = await prisma.usuario.update({
      where: {
        id: Number(usuarioId),
      },
      data: {
        rol,
        nombreCompleto,
        telefono,
        email,
        dni,
        password,
        direccion,
        carrito,
      },
    });

    return NextResponse.json({
      message: "La informacion del usuario fue editada exitosamente",
      data: usuarioEditado,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error al intentar editar la informacion del usuario",
      error: error.message,
    });
  }
}
