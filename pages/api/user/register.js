const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const {
    BASE_URL,
    SERVER_MAIL,
    MAIL_PASSWORD,
} = require("../../../constants/constants");

dotenv.config();

const { MONGODB_URI, MONGODB_DB, SECRETKEY } = process.env;

export default async function handler(req, res) {
    var { name, email, password, mphone, uphone } = req.body;

    if (!email || !password || !name || !mphone || !uphone) {
        return res.status(400).json({ error: "Fill out all fields" });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const client = await MongoClient.connect(MONGODB_URI);

    const db = client.db(MONGODB_DB);

    try {
        const existingUser = await db.collection("users").findOne({ email });

        if (existingUser) {
            return res.status(409).json({ error: "Email already registered" });
        }

        const result = await db.collection("users").insertOne({
            name,
            email,
            password: hashedPassword,
            mphone: mphone,
            uphone: uphone,
            status: false,
        });

        const secretKey = SECRETKEY;
        const payload = { userEmail: email };
        const token = jwt.sign(payload, secretKey, { expiresIn: "2h" });

        let transporter = nodemailer.createTransport({
            service: "Gmail",
            // host: "smtp.gmail.com",
            // port: 587,
            // secure: false,
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
        return res
            .status(200)
            .json({ message: "User registered successfully", data: name });
    } catch (error) {
        console.log("Error registering user:", error);
        return res.status(500).json({ error: "Failed to register user" });
    } finally {
        client.close();
    }
}
