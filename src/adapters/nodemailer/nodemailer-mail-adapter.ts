import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "10618f1b11d036",
    pass: "f7f806237dbcfa"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail ({ subject, body }: SendMailData) {
    await transport.sendMail({
    from: "Equipe Feedget <oi@feedget.com>",
    to: "José Neto <jose.ribeiro@mirante.com.br>",
    subject,
    html: body,
  });
  };
}