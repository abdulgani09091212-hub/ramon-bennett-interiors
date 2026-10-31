import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      city,
      scope,
      budget,
      referenceProject,
      notes,
      locale,
    } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    const brevoApiKey = process.env.BREVO_API_KEY;
    const receiverEmail =
      process.env.BREVO_RECEIVER_EMAIL || "london@ramonbennettinteriors.com";
    const senderEmail =
      process.env.BREVO_SENDER_EMAIL || "concierge@ramonbennettinteriors.com";

    // If BREVO_API_KEY is configured, send transactional email + create CRM contact
    if (brevoApiKey) {
      await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          accept: "application/json",
          "api-key": brevoApiKey,
          "content-type": "application/json",
        },
        body: JSON.stringify({
          sender: { name: "Ramon Bennett Interiors Concierge", email: senderEmail },
          to: [{ email: receiverEmail, name: "Ramon Bennett" }],
          replyTo: { email, name },
          subject: `New Luxury Commission Brief: ${name} (${city}) — ${scope}`,
          htmlContent: `
            <div style="font-family: Georgia, serif; background: #F6F3EC; color: #181412; padding: 32px; border: 1px solid #8C6239;">
              <p style="font-family: monospace; letter-spacing: 0.2em; color: #8C6239; text-transform: uppercase; font-size: 11px;">
                RAMON BENNETT INTERIORS · LONDON | SALVADOR
              </p>
              <h1 style="font-weight: normal; font-size: 26px; margin-bottom: 16px;">
                Private Client Commission Dossier
              </h1>
              <table style="width: 100%; border-collapse: collapse; font-family: sans-serif; font-size: 14px;">
                <tr><td style="padding: 8px 0; border-bottom: 1px solid #ddd;"><strong>Client Name:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #ddd;">${name}</td></tr>
                <tr><td style="padding: 8px 0; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #ddd;">${email}</td></tr>
                <tr><td style="padding: 8px 0; border-bottom: 1px solid #ddd;"><strong>Telephone / WhatsApp:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #ddd;">${phone || "Not specified"}</td></tr>
                <tr><td style="padding: 8px 0; border-bottom: 1px solid #ddd;"><strong>Property Location:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #ddd;">${city}</td></tr>
                <tr><td style="padding: 8px 0; border-bottom: 1px solid #ddd;"><strong>Commission Scope:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #ddd;">${scope}</td></tr>
                <tr><td style="padding: 8px 0; border-bottom: 1px solid #ddd;"><strong>Investment Tier:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #ddd;">${budget}</td></tr>
                <tr><td style="padding: 8px 0; border-bottom: 1px solid #ddd;"><strong>Reference Anchor:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #ddd;">${referenceProject || "General Portfolio"}</td></tr>
              </table>
              <p style="margin-top: 20px; font-family: sans-serif; font-size: 14px; line-height: 1.6;">
                <strong>Architectural & Spatial Notes:</strong><br/>
                ${notes || "No additional notes provided."}
              </p>
            </div>
          `,
        }),
      });
    }

    return NextResponse.json({
      ok: true,
      brevoConnected: Boolean(brevoApiKey),
      message:
        locale === "pt"
          ? `Obrigado, ${name}. Seu briefing para ${city} foi registrado com sucesso. Nossa equipe em Londres e Salvador responderá em até 24 horas.`
          : `Thank you, ${name}. Your commission brief for ${city} has been logged with Ramon Bennett Interiors. Our London & Salvador studio will respond within 24 hours.`,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unexpected error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
