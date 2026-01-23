// prisma/seed.ts
import { PrismaClient, Role } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      { name: "Alice", email: "alice@example.com", role: Role.CITIZEN },
      { name: "Bob", email: "bob@example.com", role: Role.COLLECTOR },
      { name: "Charlie", email: "charlie@example.com", role: Role.ADMIN },
    ],
  });

  console.log("Seed data added!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
