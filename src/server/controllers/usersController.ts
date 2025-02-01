import prisma from "../config/prisma";
import { NextRequest, NextResponse } from "next/server";

export const getUsers = async () => {
    const users = await prisma.user.findMany();
    return NextResponse.json({
        message: "OK",
        status: 200,
        users: users
    });
};

export const createUsers = async (req: NextRequest) => {
    const body = await req.json();
    if (!body.name || !body.email) {
        return NextResponse.json({
            message: "Invalid input",
            status: 400,
            error: "Name and email are required"
        });
    }
    try {
        const result = await prisma.user.create({ data: body });
        return NextResponse.json({
            message: "Created",
            status: 201,
            result: result
        });
    } catch (error: any) {
        if (error.code === "P2002") {
            return NextResponse.json({
                message: "Duplicate entry",
                status: 409,
                error: "Email already exists"
            });
        }
        return NextResponse.json({
            message: "Error",
            status: 500,
            error: error
        });
    }
};