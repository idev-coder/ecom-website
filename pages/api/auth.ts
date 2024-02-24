import accessToken from '@/lib/accessToken';
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse)
     {
        if (req.method === 'GET') {

    try {

        let token:any = await accessToken(req, res)
        res.status(200).json({ ...token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Something went wrong!' });
    }
} else {
    res.status(405).json({ message: 'Method not allowed!' });
}
}