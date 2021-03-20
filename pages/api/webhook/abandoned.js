import client from "../../../lib/db";

module.exports = async (req, res) => {
  try {
    const db = await client.connect();
    const abandoned = await db.db(process.env.MONGO_DB).collection("abandoned");

    if (req.method == "POST") {

      const data = req.body;
      if(!data.date)
        data.date = new Date().toISOString();

      const query = { _id: data._id };

      delete data._id;

      const doc = { $set: data }
      const options = { upsert: true };
      const upserted = await abandoned.updateOne(query, doc, options);

      console.log(upserted);

      res.send(upserted);

    } else if (req.method == "DELETE") {

      const query = { _id: req.body._id };
      console.log(query)

      res.send(await abandoned.findOneAndDelete(query));

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
