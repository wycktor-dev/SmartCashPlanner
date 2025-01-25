import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()
const userData: Prisma.UserCreateInput[] = [
    {
      name: 'Alice',
      email: 'alice@prisma.io',
      password: 'password',
    }  ,
    {
      name: 'dfsds',
      email: 'alfsdfsdice@prisma.io',
      password: 'fsdfsd',
    }  ,

    {
      name: 'Alifdsfsdce',
      email: 'alice@psdsrisma.io',
      password: 'sdfds',
    }  
]

export async function main() {
    for (const u of userData) {
      await prisma.user.create({ data: u })
    }
  }
  
  main()