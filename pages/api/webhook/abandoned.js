import client from "../../../lib/db";

module.exports = async (req, res) => {
  try {
    const db = await client.connect();
    const abandoned = await db.db(process.env.MONGO_DB).collection("abandoned");

    if (req.method == "POST") {

      const data = req.body;
      data.date = new Date().toISOString();
      console.log(data);

      const inserted = await abandoned.insertOne(data);
      res.send(inserted);

    } else {
      const cursor = abandoned.find({}, { "sort": { "date": -1 } });
      const list = await cursor.toArray();
      res.send(list)
    }

  } catch (e) {
    console.error(e);
    res
      .status(400)
      .send(e);
  }
};
