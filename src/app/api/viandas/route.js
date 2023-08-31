import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server';

const prisma = new PrismaClient()

export async function GET(){
    try {
        const viandas = await prisma.Vianda.findMany()
        return NextResponse.json(viandas);
    } catch (error) {
        return NextResponse.json('Error al obtener las viandas')
    }
    
}

export async function POST(request){
    try {
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
    } catch (error) {
        return NextResponse.json("No se pudo crear la vianda")
    }
    
}