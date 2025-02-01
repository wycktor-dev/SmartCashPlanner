import { Pool } from "pg"
import { PrismaPg } from "@prisma/adapter-pg"
import { PrismaClient } from "@prisma/client"

const connectionString = `${process.env.DATABASE_URL}`

const pool = new Pool({ connectionString })
const prisma = new PrismaClient()

export default prisma;