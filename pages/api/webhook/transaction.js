import client from "../../../lib/db";

module.exports = async (req, res) => {
  try {
    const db = await client.connect();

    if (req.method == "POST") {

      const data = req.body;
      console.log(data);

      const transactions = db.db(process.env.MONGO_DB).collection("transactions");
      const query = { email: data.email };
      const t = await transactions.findOne(query);

      delete data._id;

      if(!t || t.status != "approved" || ["completed", "refunded", "chargeback", "dispute"].includes(data.status)) {
        const doc = { $set: data }
        const options = { upsert: true };
        const upserted = await transactions.updateOne(query, doc, options);
        res.send(upserted);
      } else {
        res.send(t);
      }

    } else {
      const db = await client.connect();
      const cursor = db.db(process.env.MONGO_DB).collection("transactions").find({}, {"sort": "purchase_date" });
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
