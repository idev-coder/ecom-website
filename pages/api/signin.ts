import signAndSaveTokens from '@/lib/signAndSaveTokens';
import { MongoClient, MongoClientOptions } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from "next";

const options: MongoClientOptions ={
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

export default async function handler(req: NextApiRequest,
    res: NextApiResponse<any>) {
    if (req.method === 'POST') {
        const { data } = req.body;

        const client = new MongoClient(`mongodb+srv://${data.username}:${data.password}@${process.env.MONGODB_HOST}/`, options);

        try {
            const mongo = await client.connect();
            const db = await mongo.db(`${process.env.DATABASE_NAME}`)
            const collection = db.collection('users')
            const userData = await collection.find({ username: data.username }).toArray()
            data.role = userData[0].role
            let token = await signAndSaveTokens(data)
            if (token)
                res.status(200).json({ ...token });
            else{
                res.status(400)
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Something went wrong!' });
        } finally {
            await client.close();
        }
    } else {
        res.status(405).json({ message: 'Method not allowed!' });
    }
}