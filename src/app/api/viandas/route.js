import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server';

const prisma = new PrismaClient()

export async function GET(){
    const viandas = await prisma.Vianda.findMany()
    return NextResponse.json(viandas);
}

export async function POST(request){
    const { nombre, tipo, descripcion, ingredientes, imagen, stock } = await request.json()
    await prisma.Vianda.create({
        data: {
            nombre,
            tipo,
            descripcion,
            ingredientes,
            imagen,
            stock
        }
    })
    return NextResponse.json("Vianda creada exitosamente!")
}