import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import EmailProvider, { EmailConfig } from "next-auth/providers/email";
import nodemailer from "nodemailer";
import clientPromise from "../../../lib/mongodb";

export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
      sendVerificationRequest: customSendVerificationRequest,
    }),
  ],
  theme: {
    colorScheme: "light", // "auto" | "dark" | "light"
    brandColor: "#fe6b8b",
    logo: "https://dev.mariubialli.com/logo.webp", // Absolute URL to image
  },
  pages: {
    signIn: "/auth/email-signin",
    verifyRequest: "/auth/verify-request",
  },
});

async function customSendVerificationRequest(params: {
  identifier: string;
  url: string;
  expires: Date;
  provider: EmailConfig;
  token: string;
}) {
  const { identifier: email, url, provider } = params;
  const { from, server } = provider;
  const { host } = new URL(url);
  const transport = nodemailer.createTransport(server);
  await transport.sendMail({
    to: email,
    from,
    subject: `Fazer login no site ${host}`,
    text: text({ url, host }),
    html: html({ url, host, email }),
  });
}

function html({ url, host, email }: Record<"url" | "host" | "email", string>) {
  // Insert invisible space into domains and email address to prevent both the
  // email address and the domain from being turned into a hyperlink by email
  // clients like Outlook and Apple mail, as this is confusing because it seems
  // like they are supposed to click on their email address to sign in.
  const escapedEmail = `${email.replace(/\./g, "&#8203;.")}`;
  const escapedHost = `${host.replace(/\./g, "&#8203;.")}`;

  return `
  <div style="font-family: Arial, Verdana, sans-serif;">
    <div style="max-width: 500px; margin: auto; background-color: #f9f9f9; padding: 20px;">
      <p>Confirme seu email <strong>${escapedEmail}</strong> clicando no botão abaixo. Assim você poderá baixar apostilas e conteúdos exclusivos no site <strong>${escapedHost}</strong> e receberá novidades e avisos por email.</p>
      <a href="${url}" target="_blank" rel="noopener" style="background-color: #fe6b8b; color: white; padding: 10px; border-radius: 5px; text-decoration: none; text-transform: uppercase; font-weight: bold; display: block; margin: 30px auto; width:80%; text-align: center;">Clique aqui para confirmar seu email</a>
      <p>Caso você não tenha cadastrado seu email no site <strong>${escapedHost}</strong>, favor desconsiderar esta mensagem.</p>
    </div>
  </div>
  `;
}

// Email Text body (fallback for email clients that don't render HTML, e.g. feature phones)
function text({ url, host }: Record<"url" | "host", string>) {
  return `Ação necessária: Confirme seu email`;
}
