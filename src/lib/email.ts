import sgMail from "@sendgrid/mail";

// Get environment variables
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const EMAIL_FROM_ENV = process.env.EMAIL_FROM;

// Runtime check
if (!SENDGRID_API_KEY || !EMAIL_FROM_ENV) {
  throw new Error(
    "Missing SendGrid environment variables. Please check .env.local"
  );
}

// TypeScript-safe: now TS knows these are strings
const EMAIL_FROM: string = EMAIL_FROM_ENV;

// Set SendGrid API key
sgMail.setApiKey(SENDGRID_API_KEY);

/**
 * sendEmail - Reusable function to send transactional emails
 * 
 * @param to - Recipient email address
 * @param subject - Email subject
 * @param text - Plain text body (optional)
 * @param html - HTML body (optional)
 */
export const sendEmail = async ({
  to,
  subject,
  text,
  html,
}: {
  to: string;
  subject: string;
  text?: string;
  html?: string;
}) => {
  // Ensure at least text or html is provided
  if (!text && !html) {
    throw new Error("You must provide at least text or html content for the email");
  }

  try {
    await sgMail.send({
      to,
      from: EMAIL_FROM,       // TypeScript now knows this is a string
      subject,
      text: text || "",       // Default to empty string if undefined
      html,                   // Optional HTML
    });
    console.log(`Email sent to ${to}`);
  } catch (error) {
    console.error("Email send error:", error);
    throw new Error("Email sending failed");
  }
};
