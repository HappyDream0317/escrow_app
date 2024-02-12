const { MongoClient } = require("mongodb");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.MONGODB_DB;
const SECRETKEY = process.env.SECRETKEY;

export default async function handler(req, res) {
    var { email, password } = req.body;

    if (!email || !password) {
        return res
            .status(400)
            .json({ error: "Email and password are required" });
    }

    const client = await MongoClient.connect(MONGODB_URI);
    const db = client.db(MONGODB_DB);

    try {
        const existingUser = await db.collection("users").findOne({ email });
        if (existingUser) {
            const isMatch = await bcrypt.compare(
                password,
                existingUser.password
            );
            if (!isMatch) {
                return res.status(409).json({ error: "Password Incorrect!" });
            } else {
                const secretKey = SECRETKEY;
                const payload = { userEmail: email };
                const token = jwt.sign(payload, secretKey, { expiresIn: "2h" });
                return res.status(200).json({
                    message: "Successfully logged in!",
                    token: token,
                    user: existingUser,
                });
            }
        } else {
            return res.status(409).json({ error: "User can't find." });
        }
    } catch (error) {
        console.log("Error registering user:", error);
        return res.status(500).json({ error: "Failed to register user" });
    } finally {
        client.close();
    }
}
