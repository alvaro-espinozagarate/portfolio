import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const OWNER_EMAIL = "alvaro.espinozagarate@gmail.com";
const OWNER_NAME = "Alvaro Espinoza Garate";

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Todos los campos son requeridos." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Email inválido." }, { status: 400 });
    }

    // ── Email 1: notificación al dueño del portafolio ──────────────────
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: OWNER_EMAIL,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          </head>
          <body style="margin:0;padding:0;background:#050a0e;font-family:'Courier New',monospace;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#050a0e;padding:40px 20px;">
              <tr><td align="center">
                <table width="100%" style="max-width:600px;background:#0d1e2e;border:1px solid #1a3a52;border-radius:4px;overflow:hidden;">

                  <!-- Header -->
                  <tr>
                    <td style="background:#0a1520;padding:24px 32px;border-bottom:1px solid #1a3a52;">
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td>
                            <span style="display:inline-block;background:#00ff9d;color:#050a0e;font-size:11px;font-weight:bold;padding:3px 10px;letter-spacing:2px;text-transform:uppercase;">NUEVO MENSAJE</span>
                          </td>
                          <td align="right">
                            <span style="color:#3a6080;font-size:12px;">~/portfolio $ mail --inbox</span>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Body -->
                  <tr>
                    <td style="padding:32px;">
                      <p style="color:#3a6080;font-size:12px;margin:0 0 24px;letter-spacing:1px;">// DETALLES DEL CONTACTO</p>

                      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                        <tr>
                          <td style="padding:10px 0;border-bottom:1px solid #1a3a52;">
                            <span style="color:#3a6080;font-size:12px;display:block;margin-bottom:4px;">NOMBRE</span>
                            <span style="color:#c8dde8;font-size:15px;">${name}</span>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding:10px 0;border-bottom:1px solid #1a3a52;">
                            <span style="color:#3a6080;font-size:12px;display:block;margin-bottom:4px;">EMAIL</span>
                            <a href="mailto:${email}" style="color:#00e5ff;font-size:15px;text-decoration:none;">${email}</a>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding:10px 0;border-bottom:1px solid #1a3a52;">
                            <span style="color:#3a6080;font-size:12px;display:block;margin-bottom:4px;">ASUNTO</span>
                            <span style="color:#c8dde8;font-size:15px;">${subject}</span>
                          </td>
                        </tr>
                      </table>

                      <p style="color:#3a6080;font-size:12px;margin:0 0 12px;letter-spacing:1px;">// MENSAJE</p>
                      <div style="background:#0a1520;border:1px solid #1a3a52;border-left:3px solid #00ff9d;padding:16px 20px;border-radius:2px;">
                        <p style="color:#c8dde8;font-size:14px;line-height:1.7;margin:0;white-space:pre-wrap;">${message}</p>
                      </div>

                      <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:28px;">
                        <tr>
                          <td>
                            <a href="mailto:${email}?subject=Re: ${subject}" style="display:inline-block;background:#00ff9d;color:#050a0e;font-size:12px;font-weight:bold;padding:12px 24px;text-decoration:none;letter-spacing:2px;text-transform:uppercase;">RESPONDER →</a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background:#0a1520;padding:16px 32px;border-top:1px solid #1a3a52;">
                      <p style="color:#3a6080;font-size:11px;margin:0;">
                        <span style="color:#00ff9d;">© 2026</span> ${OWNER_NAME} · Portfolio Contact System
                      </p>
                    </td>
                  </tr>

                </table>
              </td></tr>
            </table>
          </body>
        </html>
      `,
    });

    // ── Email 2: agradecimiento al visitante ───────────────────────────
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: email,
      subject: `¡Gracias por contactarme, ${name}!`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          </head>
          <body style="margin:0;padding:0;background:#050a0e;font-family:'Courier New',monospace;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#050a0e;padding:40px 20px;">
              <tr><td align="center">
                <table width="100%" style="max-width:600px;background:#0d1e2e;border:1px solid #1a3a52;border-radius:4px;overflow:hidden;">

                  <!-- Header -->
                  <tr>
                    <td style="background:#0a1520;padding:32px;border-bottom:1px solid #1a3a52;text-align:center;">
                      <div style="display:inline-block;width:56px;height:56px;background:rgba(0,255,157,0.08);border:2px solid rgba(0,255,157,0.4);border-radius:50%;line-height:56px;text-align:center;font-size:24px;margin-bottom:16px;">✓</div>
                      <h1 style="color:#00ff9d;font-size:22px;margin:0 0 8px;letter-spacing:1px;">Mensaje recibido</h1>
                      <p style="color:#3a6080;font-size:13px;margin:0;">Te responderé en menos de 24 horas</p>
                    </td>
                  </tr>

                  <!-- Body -->
                  <tr>
                    <td style="padding:32px;">
                      <p style="color:#c8dde8;font-size:15px;line-height:1.7;margin:0 0 20px;">
                        Hola <strong style="color:#00ff9d;">${name}</strong>,
                      </p>
                      <p style="color:#c8dde8;font-size:14px;line-height:1.7;margin:0 0 20px;">
                        Gracias por tomarte el tiempo de contactarme. He recibido tu mensaje sobre <strong style="color:#00e5ff;">&quot;${subject}&quot;</strong> y lo revisaré con atención.
                      </p>
                      <p style="color:#c8dde8;font-size:14px;line-height:1.7;margin:0 0 28px;">
                        Me pondré en contacto contigo a la brevedad posible. Si necesitas respuesta urgente, también puedes escribirme directamente a <a href="mailto:${OWNER_EMAIL}" style="color:#00e5ff;text-decoration:none;">${OWNER_EMAIL}</a>.
                      </p>

                      <!-- Resumen del mensaje -->
                      <p style="color:#3a6080;font-size:12px;margin:0 0 12px;letter-spacing:1px;">// TU MENSAJE</p>
                      <div style="background:#0a1520;border:1px solid #1a3a52;border-left:3px solid #00e5ff;padding:16px 20px;border-radius:2px;margin-bottom:28px;">
                        <p style="color:#3a6080;font-size:13px;line-height:1.6;margin:0;white-space:pre-wrap;">${message}</p>
                      </div>

                      <p style="color:#c8dde8;font-size:14px;line-height:1.7;margin:0;">
                        Saludos,<br/>
                        <strong style="color:#00ff9d;">${OWNER_NAME}</strong><br/>
                        <span style="color:#3a6080;font-size:12px;">System Engineer</span>
                      </p>
                    </td>
                  </tr>

                  <!-- Social links -->
                  <tr>
                    <td style="padding:16px 32px;border-top:1px solid #1a3a52;text-align:center;">
                      <a href="https://github.com/alvaro-espinozagarate" style="color:#3a6080;text-decoration:none;font-size:12px;margin:0 12px;">GitHub</a>
                      <span style="color:#1a3a52;">|</span>
                      <a href="https://www.linkedin.com/in/alvaroespinozagarate/" style="color:#3a6080;text-decoration:none;font-size:12px;margin:0 12px;">LinkedIn</a>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background:#0a1520;padding:16px 32px;border-top:1px solid #1a3a52;">
                      <p style="color:#3a6080;font-size:11px;margin:0;text-align:center;">
                        <span style="color:#00ff9d;">©</span> 2026 ${OWNER_NAME} · Este email fue enviado porque completaste el formulario de contacto del portafolio.
                      </p>
                    </td>
                  </tr>

                </table>
              </td></tr>
            </table>
          </body>
        </html>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Email error:", err);
    return NextResponse.json({ error: "Error al enviar el mensaje." }, { status: 500 });
  }
}
