const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const {
    BASE_URL,
    SERVER_MAIL,
    MAIL_PASSWORD,
} = require("../../../constants/constants");

dotenv.config();

const { SECRETKEY } = process.env;

export default async function handler(req, res) {
    var { email } = req.body;

    if (!email) {
        return res.status(400).json({ error: "Email Required" });
    }

    const secretKey = SECRETKEY;
    const payload = { userEmail: email };
    const token = jwt.sign(payload, secretKey, { expiresIn: "2h" });
    let transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: SERVER_MAIL,
            pass: MAIL_PASSWORD,
        },
    });

    let mailOptions = {
        from: SERVER_MAIL,
        to: email,
        subject: "Verify Your Email Address",
        text: `<p>Click <a href="${BASE_URL}/verify-email?token=${token}">here</a> to verify your email address.</p>`,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Verify link successfully sent" });
}
