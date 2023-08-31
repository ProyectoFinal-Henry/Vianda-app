import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server';

const prisma = new PrismaClient()

export async function GET() {
    try {
        const dia = await prisma.Dia.findMany()
        const diaForteado = await formatearDia(dia[0])
        return NextResponse.json(diaForteado);
    } catch (error) {
        return NextResponse.json("Error al obtener el dia.");
    }
}

export async function POST(request) {
    try {
        const { nombreDia, fecha, clasico, sinHarinas, vegetariano, dieta } = await request.json();
        await prisma.Dia.create({
            data: {
                nombreDia,
                fecha,
                clasico,
                sinHarinas,
                vegetariano,
                dieta
            }
        });
        return NextResponse.json("Dia creado correctamente.");
    } catch (error) {
        return NextResponse.json("No ha sido posible crear el dia.");

    }
}

const formatearDia = async function (dia) {
    const { clasico, sinHarinas, vegetariano, dieta } = dia;
    const busquedaclasico = await prisma.Vianda.findUnique({
        where: {
            id: clasico,
        },
    })
    const busquedaSinHarina = await prisma.Vianda.findUnique({
        where: {
            id: sinHarinas,
        },
    })
    const busquedaVegetariano = await prisma.Vianda.findUnique({
        where: {
            id: vegetariano,
        },
    })
    const busquedaDieta = await prisma.Vianda.findUnique({
        where: {
            id: dieta,
        },
    })
    dia.clasico = busquedaclasico;
    dia.sinHarinas = busquedaSinHarina;
    dia.vegetariano = busquedaVegetariano;
    dia.dieta = busquedaDieta;
    return dia
}