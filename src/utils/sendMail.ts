import nodemailer from "nodemailer"
import { generateOtpEmailTemplate } from "./mailTemplate";
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for port 465, false for other ports
    auth: {
        user: "hasanmdmahedi193@gmail.com",
        pass: "kkuknmpfjbwgxmsm",
    },
});

export const sendMail = async (to: string, sub: string, msg: string) => {
    try {
        console.log("Sending email to:", to);
        const htmlContent = await generateOtpEmailTemplate(to, "2000", "User Registration");
        const info = await transporter.sendMail({
            to: to,
            subject: sub,
            html: htmlContent,
        });
        console.log("Message sent:", info.messageId);
        return info; // Return the response if needed
    } catch (error) {
        console.error("Error while sending email:", error);
        throw error; // Throw the error for debugging
    }
};