"use server";

import { Resend } from "resend";
import { z } from "zod";
import { site } from "@/lib/site";

const ContactSchema = z.object({
  name: z.string().min(2, "Name is too short").max(120),
  email: z.string().email("Invalid email"),
  phone: z.string().max(40).optional().nullable(),
  service: z.string().min(1, "Please choose a service").max(80),
  location: z.string().max(160).optional().nullable(),
  message: z.string().min(10, "Tell us a bit more").max(4000),
  company: z.string().max(0).optional().nullable(),
});

type Result = { ok: true } | { ok: false; error: string };

export async function submitContact(fd: FormData): Promise<Result> {
  try {
    const parsed = ContactSchema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      service: fd.get("service"),
      location: fd.get("location"),
      message: fd.get("message"),
      company: fd.get("company"),
    });
    if (!parsed.success) {
      return { ok: false, error: parsed.error.issues[0]?.message ?? "Invalid form data" };
    }
    const data = parsed.data;
    if (data.company && data.company.length > 0) return { ok: true };

    const apiKey = process.env.RESEND_API_KEY;
    const fromAddr = process.env.RESEND_FROM || "Stoonex Website <onboarding@resend.dev>";
    const toAddr = process.env.RESEND_TO || site.email;

    if (!apiKey) {
      console.error("[contact] Missing RESEND_API_KEY env var");
      return { ok: false, error: "Email is not configured yet." };
    }

    const resend = new Resend(apiKey);

    const subject = `New quote request — ${data.service} (${data.name})`;
    const text = [
      `New lead from stoonex.com`,
      ``,
      `Name:     ${data.name}`,
      `Email:    ${data.email}`,
      `Phone:    ${data.phone || "—"}`,
      `Service:  ${data.service}`,
      `Location: ${data.location || "—"}`,
      ``,
      `Message:`,
      data.message,
    ].join("\n");

    const html = `
      <!doctype html>
      <html><body style="font-family:Inter,Arial,sans-serif;background:#faf7f2;padding:32px;color:#0f0f0f">
        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:560px;margin:0 auto;background:#fff;border:1px solid #e7dfd2">
          <tr><td style="padding:28px 32px;border-bottom:1px solid #e7dfd2">
            <div style="font:500 11px/1 Inter,Arial,sans-serif;letter-spacing:0.22em;text-transform:uppercase;color:#6b665c">New Quote Request</div>
            <div style="font:400 28px/1.05 Georgia,serif;color:#0f0f0f;margin-top:10px">${escape(data.name)}</div>
            <div style="font-size:13px;color:#6b665c;margin-top:6px">${escape(data.service)}${data.location ? " · " + escape(data.location) : ""}</div>
          </td></tr>
          <tr><td style="padding:24px 32px">
            <div style="font-size:14px;line-height:1.6">
              <div><strong>Email:</strong> <a href="mailto:${escape(data.email)}" style="color:#2f4a36">${escape(data.email)}</a></div>
              ${data.phone ? `<div><strong>Phone:</strong> <a href="tel:${escape(data.phone)}" style="color:#2f4a36">${escape(data.phone)}</a></div>` : ""}
            </div>
            <hr style="border:none;border-top:1px solid #e7dfd2;margin:18px 0">
            <div style="font:500 11px/1 Inter,Arial,sans-serif;letter-spacing:0.22em;text-transform:uppercase;color:#6b665c;margin-bottom:10px">Project</div>
            <div style="font-size:15px;line-height:1.6;white-space:pre-wrap">${escape(data.message)}</div>
          </td></tr>
          <tr><td style="padding:18px 32px;background:#0f0f0f;color:#faf7f2;font-size:12px;letter-spacing:0.1em">
            STOONE<span style="color:#e5ff40">X</span> SERVICES · Saskatoon, SK
          </td></tr>
        </table>
      </body></html>
    `;

    const { error } = await resend.emails.send({
      from: fromAddr,
      to: [toAddr],
      replyTo: data.email,
      subject,
      text,
      html,
    });
    if (error) {
      console.error("[contact] Resend error", error);
      return { ok: false, error: "We couldn't send your request. Please try again or call us." };
    }
    return { ok: true };
  } catch (err) {
    console.error("[contact] unexpected", err);
    return { ok: false, error: "Something went wrong on our end." };
  }
}

function escape(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
