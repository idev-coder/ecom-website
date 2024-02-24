import jwt from 'jsonwebtoken';
import type { NextApiRequest, NextApiResponse } from "next";

export default async function accessToken(req: NextApiRequest,
    res: NextApiResponse<any>) {
    try {
        const ACCESS_TOKEN_SECRET_KEY: any = process.env.ACCESS_TOKEN_SECRET_KEY
        const authToken: any = req.headers.authorization;
        if (authToken.split(" ")[0].toLocaleLowerCase() === "Bearer".toLocaleLowerCase()) {
            const token = authToken.split(" ")[1]
            const decoded = jwt.verify(token, ACCESS_TOKEN_SECRET_KEY);
            if (decoded) {
                return decoded
            } else {
                return res.status(401)
            }
        } else {
            return res.status(401)
        }
    } catch (err) {
        return res.status(401)
    }
}