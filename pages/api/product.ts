import { MongoClient } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "POST") {
    const { data } = req.body;

    const client = new MongoClient(
      `mongodb+srv://TestUser:O123456@${process.env.MONGODB_HOST}/`
    );

    try {
      const mongo = await client.connect();
      const db = await mongo.db(`${process.env.DATABASE_NAME}`);
      const collection = db.collection("products");
      const insertResult = await collection.insertOne({
        name: data.name,
        price: data.price,
        description: data.description,
        imageURL: data.imageURL,
      });
      if (insertResult) {
        res.status(200).json("Add product successfully" + data.imageURL);
      } else {
        res.status(500).json("upload to mongodb failed");
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: `some thing went wrong ${error}` });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ message: "Method not allowed!" });
  }
}
