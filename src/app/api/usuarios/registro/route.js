import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
import bcrypt from "bcrypt";

export async function POST(request) {
  const {
    username,
    rol,
    nombreCompleto,
    telefono,
    email,
    dni,
    password,
    direccion,
  } = await request.json();

  try {
    const usernameEncontrado = await prisma.usuario.findUnique({
      where: {
        username: username,
      },
    });
    const emailEncontrado = await prisma.usuario.findUnique({
      where: {
        email: email,
      },
    });

    if (usernameEncontrado) {
      return NextResponse.json(
        `${username} ya existe, por favor ingrese un nombre de usuario diferente`
      );
    }
    if (emailEncontrado) {
      return NextResponse.json(
        `${email} ya existe, por favor ingrese un correo diferente`
      );
    }
    if (
      username &&
      nombreCompleto &&
      telefono &&
      email &&
      dni &&
      password &&
      direccion
    ) {
      //se crea una promesa que devuelve el password hasheado usando bcrypt
      const saltRounds = 10;
      const passwordHashed = await new Promise((resolve, reject) => {
        bcrypt.hash(password, saltRounds, function (err, hash) {
          if (err) {
            console.error(err);
            reject(err);
            return;
          }
          resolve(hash);
        });
      });

      const nuevoUsuario = await prisma.usuario.create({
        data: {
          username,
          rol,
          nombreCompleto,
          telefono,
          email,
          dni,
          password: passwordHashed,
          direccion,
        },
      });
      return NextResponse.json({
        message: "Usuario creado exitosamente",
        data: nuevoUsuario,
      });
    } else {
      return NextResponse.json(
        "Hace falta informacion para la creacion del usuario"
      );
    }
  } catch (error) {
    return NextResponse.json({
      message: "Ocurrio un error creando el usuario, intente nuevamente",
      error: error.message,
    });
  }
}
