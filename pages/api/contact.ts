import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type Data = {
    name: string;
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env['SMTP_EMAIL_USER_NAME'],
            pass: process.env['SMTP_EMAIL_APP_PASSWORD'],
        },
    });

    const mailOptions = {
        from: process.env['SMTP_EMAIL_USER_NAME'],
        to: 'levente.uj.development@gmail.com',
        subject: 'Hello from Next.js and TypeScript',
        text: 'This is a test email sent from Next.js and TypeScript',
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
        } else {
            console.log(`Email sent: ${info.response}`);
        }
    });

    res.status(200).json({ name: 'John Doe' });
}
