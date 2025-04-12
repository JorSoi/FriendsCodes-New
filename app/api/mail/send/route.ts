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
  const authHeader = req.headers.get("authorization");
  const verified =
    authHeader &&
    authHeader.startsWith("Bearer ") &&
    authHeader.split(" ")[1] === process.env.API_ACCESS_TOKEN;
  // Check if bearer token is correct, only then continue
  if (!verified) {
    return Response.json({ message: "Unauthorized" }, { status: 401 });
  }

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
