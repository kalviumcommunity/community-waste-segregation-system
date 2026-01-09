import { prisma } from "@/lib/prisma";
import { emitEvent } from "@/lib/events";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { description, userId } = await req.json();

  const report = await prisma.wasteReport.create({
    data: { description, userId },
  });

  await emitEvent("WasteReported", report);
  return NextResponse.json(report);
}
