import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type Data = {
    status: string;
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { name, message, replyTo } = req.body;
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
        to: 'levente.uj.development@gmail.com',
        subject: `Message from ${replyTo}, name: ${name}`,
        text: message,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(502).json({ status: 'failure' });
        } else {
            console.log(`Email sent: ${info.response}`);
            res.status(200).json({ status: 'success' });
        }
    });
}
