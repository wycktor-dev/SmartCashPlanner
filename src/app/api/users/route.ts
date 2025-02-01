// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextRequest, NextResponse } from "next/server";
import { getUsers, createUsers } from "@/server/controllers/usersController";

export async function GET(req: NextRequest, res: NextResponse) {
    return getUsers();
}

export async function POST(req: NextRequest, res: NextResponse) {
    return createUsers(req);
}