import accessToken from '@/lib/accessToken';
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse

) {
    if (req.method === 'GET') {
        const decoded = await accessToken(req, res)
        try {

            res.status(200).json(decoded);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    } else {
        res.status(405).json({ message: 'Method not allowed!' });
    }
}