import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";
import { v2 as cloudinary } from "cloudinary";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  let skip = parseInt(searchParams.get("skip"));
  // let take = parseInt(searchParams.get("take"));
  if (!skip) skip = 0;
  const take = 10;

  if (searchParams.toString().length > 0) {
    try {
      const ing1 = searchParams.get("ing1");
      const ing2 = searchParams.get("ing2");
      const ing3 = searchParams.get("ing3");
      const tipo = searchParams.get("tipo");
      let search = searchParams.get("search");
      let campo = searchParams.get("campo");
      let orden = searchParams.get("orden");
      const dia = searchParams.get("dia");
      const descripcion = searchParams.get("descripcion");
      if (!search) search = "";
      if (!orden) orden = "asc";
      if (!campo) campo = "id";

      const whereCondicion = [];
      if (ing1) {
        whereCondicion.push({
          ingredientes: {
            contains: ing1.toLowerCase(),
            mode: "insensitive",
          },
        });
      }
      if (ing2) {
        whereCondicion.push({
          ingredientes: {
            contains: ing2.toLowerCase(),
            mode: "insensitive",
          },
        });
      }
      if (ing3) {
        whereCondicion.push({
          ingredientes: {
            contains: ing3.toLowerCase(),
            mode: "insensitive",
          },
        });
      }
      if (tipo) {
        whereCondicion.push({
          tipo: tipo,
        });
      }
      if (descripcion) {
        whereCondicion.push({
          descripcion: {
            contains: descripcion,
            mode: "insensitive",
          },
        });
      }
      if (dia) {
        switch (dia) {
          case "lunes":
            whereCondicion.push({
              lunes: true,
            });
            break;
          case "martes":
            whereCondicion.push({
              martes: true,
            });
            break;
          case "miercoles":
            whereCondicion.push({
              miercoles: true,
            });
            break;
          case "jueves":
            whereCondicion.push({
              jueves: true,
            });
            break;
          case "viernes":
            whereCondicion.push({
              viernes: true,
            });
            break;
          default:
            break;
        }
      }

      const viandas = await prisma.Vianda.findMany({
        skip: skip,
        take: take,

        where: {
          nombre: {
            contains: search,
            mode: "insensitive",
          },
          AND: whereCondicion,
        },
        orderBy: {
          [campo]: orden,
        },
      });

      if (!viandas || viandas.length === 0) {
        return NextResponse.json(
          "No se encontró una vianda que contenga la información requerida"
        );
      }

      return NextResponse.json(viandas);
    } catch (error) {
      return NextResponse.json({ error: error.message });
    }
  } else {
    try {
      const viandas = await prisma.Vianda.findMany({
        skip: skip,
        take: take,
        orderBy: {
          id: "asc",
        },
      });

      return NextResponse.json(viandas);
    } catch (error) {
      return NextResponse.json(error.message);
    }
  }
}
cloudinary.config({
  cloud_name: "deezwetqk",
  api_key: "893119423458729",
  api_secret: "1euwypKSkGC2FgIGVH30SPmfXFw",
});

//! POST CON CLOUDINARY
export async function POST(request) {
  try {
    const formData = await request.formData();
    // console.log("file: route.js:100  formData:", formData)
    const nombre = formData.get("nombre");
    const tipo = formData.get("tipo");
    const descripcion = formData.get("descripcion");
    const ingredientes = formData.get("ingredientes");
    const imagen = formData.get("imagen");
    const stock = Number(formData.get("stock"));
    const bytes = await imagen.arrayBuffer();
    const buffer = Buffer.from(bytes);
    //*====*
    //* recibiendo y creando el archivo en local(testing- no usar para producccion)
    // *===*
    // const filePath = path.join(process.cwd(), "public/cloudinary", imagen.name)
    // await writeFile(filePath, buffer)
    // const response = await cloudinary.uploader.upload(filePath)
    const response = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({}, (err, result) => {
          err && reject(err);
          resolve(result);
        })
        .end(buffer);
    });
    const imagenToDB = response.secure_url;
    const created = await prisma.Vianda.create({
      data: {
        nombre,
        tipo,
        descripcion,
        ingredientes,
        imagen: imagenToDB,
        stock,
      },
    });
    // console.log("file: route.js:138  created:", created)
    return NextResponse.json("Vianda creada exitosamente!");
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}

 //POST PARA CARGAR DESDE CERO.

 /* export async function POST(request) {
   try {
     const data = await request.json();
     console.log(data);
     await prisma.Vianda.createMany({
       data: data,
     });
     return NextResponse.json("Vianda creada exitosamente!");
   } catch (error) {
     return NextResponse.json({ error: error.message });
   }
 } */

export async function PUT(request) {
  try {
    const formData = await request.formData();
    // console.log("file: route.js:153  formData:", formData)
    const nombre = formData.get("nombre");
    const tipo = formData.get("tipo");
    const descripcion = formData.get("descripcion");
    const ingredientes = formData.get("ingredientes");
    const imagen = formData.get("imagen");
    const stock = Number(formData.get("stock"));
    const id = Number(formData.get("id"));
    let imagenToDB = "";
    if (typeof imagen !== "string") {
      const bytes = await imagen.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const response = await new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream({}, (err, result) => {
            err && reject(err);
            resolve(result);
          })
          .end(buffer);
      });

      imagenToDB = response.secure_url;
    } else {
      imagenToDB = imagen;
    }

    const prismares = await prisma.vianda.update({
      where: { id: id },
      data: {
        nombre,
        tipo,
        descripcion,
        ingredientes,
        imagen: imagenToDB,
        stock,
      },
    });
    // console.log("file: route.js:189  prisma:", prismares)

    return NextResponse.json("Vianda modificada exitosamente!");
  } catch (error) {
    // console.log(error)
    return NextResponse.json({ error: error.message });
  }
}
