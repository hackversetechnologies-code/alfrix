import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact";

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { message: "Please check the form and try again." },
      { status: 400 }
    );
  }

  const { RESEND_API_KEY: key, CONTACT_TO_EMAIL: to, CONTACT_FROM_EMAIL: from } = process.env;

  if (!key || !to || !from) {
    return NextResponse.json(
      {
        message:
          "Inquiry delivery is not configured yet. Please contact us directly via email until this is set up.",
      },
      { status: 503 }
    );
  }

  const d = parsed.data;
  const emailBody = [
    `Name: ${d.name}`,
    `Email: ${d.email}`,
    `Company: ${d.company ?? "—"}`,
    `Service: ${d.service}`,
    ``,
    d.message,
  ].join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: d.email,
      subject: `New inquiry: ${d.service} — ${d.name}`,
      text: emailBody,
    }),
  });

  if (res.ok) {
    return NextResponse.json({ message: "Thanks — your inquiry has been sent." });
  }

  return NextResponse.json(
    { message: "Something went wrong sending your inquiry. Please try again." },
    { status: 502 }
  );
}
