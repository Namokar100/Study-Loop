const nodemailer = require("nodemailer");
require('dotenv').config();

const mailSender = async (email, title, body) => {
    try {
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587, // TLS port
            secure: false, // use TLS
            auth: {
                user: process.env.MAIL_USER, // your email
                pass: process.env.MAIL_PASS, // your app password
            },
        });

        let info = await transporter.sendMail({
            from: `"Study Notion" <${process.env.MAIL_USER}>`,
            to: `${email}`,
            subject: `${title}`,
            html: `${body}`,
        });

        console.log("Email sent successfully:", info);
        return info;

    } catch (error) {
        console.error("Error sending email:", error.message);
        return error;
    }
};

module.exports = mailSender;
