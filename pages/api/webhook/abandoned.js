import client from "../../../lib/db";

module.exports = async (req, res) => {
  try {
    const db = await client.connect();

    if (req.method == "POST") {

      const data = req.body;
      data.date = new Date().toISOString();
      console.log(data);  

      const abandoned = db.db(process.env.MONGO_DB).collection("abandoned");
      const inserted = await abandoned.insertOne(data);
      res.send(inserted);

    } else {
      const db = await client.connect();
      const cursor = db.db(process.env.MONGO_DB).collection("abandoned").find({});
      const abandoned = await cursor.toArray();
      res.send(abandoned)
    }

  } catch (e) {
    console.error(e);
    res
      .status(400)
      .send(e);
  }
};
