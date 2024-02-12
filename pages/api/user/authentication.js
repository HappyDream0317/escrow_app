const { MongoClient } = require("mongodb");
import jwt from "jsonwebtoken";
const dotenv = require("dotenv");
dotenv.config();

const { MONGODB_URI, MONGODB_DB, SECRETKEY } = process.env;

export default async function handler(req, res) {
    var { token } = req.body;

    if (!token) {
        return res
            .status(200)
            .json({ success: false, error: "Token required" });
    }

    const client = await MongoClient.connect(MONGODB_URI);
    const db = client.db(MONGODB_DB);
    try {
        const decoded = jwt.verify(token, SECRETKEY);
        var email = decoded.userEmail;
        const existingUser = await db.collection("users").findOne({ email });
        if (existingUser) {
            var return_data = {
                name: existingUser.name,
                email: existingUser.email,
                transaction: 0,
            };
            return res.status(200).json({ success: true, data: return_data });
        } else {
            return res.status(200).json({ success: false });
        }
    } catch (error) {
        if (error.name === "TokenExpiredError") {
            return res.status(200).json({ success: false });
        } else {
            return res.status(200).json({ success: false });
        }
    } finally {
        client.close();
    }
}
