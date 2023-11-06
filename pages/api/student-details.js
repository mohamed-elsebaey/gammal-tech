import { MongoClient } from "mongodb";
// /api/student-details

// POST

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://elsebaey95:535199@cluster0.ozqqrmz.mongodb.net/studentDetails?retryWrites=true&w=majority"
    );
    const db = client.db();

    const studentDetailsCollection = db.collection("studentDetails");
    const result = await studentDetailsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "student details inserted " });
  }
}

export default handler;
