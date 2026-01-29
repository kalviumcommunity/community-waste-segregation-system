import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    const users = await prisma.user.findMany();
    console.log('Users from DB:', JSON.stringify(users, null, 2));
  } catch (e) {
    console.error('Prisma error:', e);
  } finally {
    await prisma.$disconnect();
  }
}

main();
