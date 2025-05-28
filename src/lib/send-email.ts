"use server";
import nodemailer from "nodemailer";
const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST;
const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: SMTP_SERVER_HOST,
  port: 587,
  secure: true,
  auth: {
    user: SMTP_SERVER_USERNAME,
    pass: SMTP_SERVER_PASSWORD,
  },
});
export async function sendMail( {
  sendTo,
  invitation,
}: {
  sendTo: string;
  invitation: ArrayBuffer;
}) {
  console.log(sendTo);
  
  try {
    await transporter.verify();
  } catch (error) {
    console.error(
      "Something Went Wrong",
      SMTP_SERVER_USERNAME,
      SMTP_SERVER_PASSWORD,
      error
    );
    return;
  }
  try {
    
    await transporter.sendMail({
      from: process.env.SMTP_SERVER_USERNAME,
      to: sendTo,
      subject: "Invitation",
      html: "<h1>Invitation</h1>",
      attachments: [{
        filename: 'invitation.pdf',
        content: Buffer.from(invitation),
        contentType: 'application/pdf',
      }
      ]
    });
  } catch (error) {
    console.log(error);
    
  }
}

