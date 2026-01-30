// prisma/seed.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const users = [
    { name: "Alice", email: "alice@example.com", role: "CITIZEN" },
    { name: "Bob", email: "bob@example.com", role: "COLLECTOR" },
    { name: "Charlie", email: "charlie@example.com", role: "ADMIN" },
    {
      name: "Admin",
      email: "admin@example.com",
      role: "ADMIN",
    },
  ];

  for (const user of users) {
    await prisma.user.upsert({
      where: { email: user.email },
      update: user,
      create: user,
    });
  }

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
