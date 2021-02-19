import client from "../../lib/db";

module.exports = async (req, res) => {
  try {
    const db = await client.connect();

    if (req.method == "POST") {

      const data = req.body;
      console.log(data);

      const transactions = db.db(process.env.MONGO_DB).collection("transactions");
      const query = { email: data.email };
      const doc = { $set: data }
      const options = { upsert: true };
      const upserted = await transactions.updateOne(query, doc, options);
      res.send(upserted);

    } else {
      const db = await client.connect();
      const cursor = db.db(process.env.MONGO_DB).collection("transactions").find({});
      const transactions = await cursor.toArray();
      res.send(transactions)
    }

  } catch (e) {
    console.error(e);
    res
      .status(400)
      .send(e);
  }
};
