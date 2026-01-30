import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";

// Define a type for request body
interface EmailRequestBody {
  email: string;
  subject: string;
  message: string;
  html?: string; // optional HTML body
}

export async function POST(req: NextRequest) {
  try {
    const body: EmailRequestBody = await req.json();

    // Trim inputs
    const email = body.email?.trim();
    const subject = body.subject?.trim();
    const message = body.message?.trim();
    const html = body.html?.trim();

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
      html, // optional HTML
    });

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (err: any) {
    console.error("API email error:", err?.message || err);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
