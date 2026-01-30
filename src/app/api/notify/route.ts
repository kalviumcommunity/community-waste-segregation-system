import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const { email, subject, message } = await req.json();

    if (!email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: "Missing email, subject, or message" },
        { status: 400 }
      );
    }

    await sendEmail({
      to: email,
      subject,
      text: message,
    });

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (err) {
    console.error("API email error:", err);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
