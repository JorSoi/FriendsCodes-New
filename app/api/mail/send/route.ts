import verifyAPIRequest from "@/utils/verifyAPIRequest";
import nodemailer from "nodemailer";
import { Options } from "nodemailer/lib/mailer/index";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_SERVER_HOST,
  port: 465,
  auth: {
    user: process.env.SMTP_SERVER_USER,
    pass: process.env.SMTP_SERVER_PASSWORD,
  },
});

export const POST = async (req: Request) => {
  const { verified, details } = verifyAPIRequest(req);
  if (!verified)
    return Response.json(
      { message: `Unauthorized: ${details}` },
      { status: 401 },
    );

  const body: Options = await req.json();

  try {
    const info = await transporter.sendMail({
      from: body.from ?? "FriendsCodes <hello@friendscodes.de>",
      to: body.to,
      subject: body.subject,
      text: body.text ?? "",
      html: body.html,
    });
    return Response.json({ info });
  } catch (error) {
    return Response.json({ error });
  }
};
