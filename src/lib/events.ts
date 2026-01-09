import { prisma } from "./prisma";

export async function emitEvent(type: string, payload: any) {
  await prisma.event.create({
    data: { type, payload },
  });
}
