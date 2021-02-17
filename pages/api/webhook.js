
module.exports = async (req, res) => {
  try {
    res.send(req.query);

  } catch (e) {
    console.error(e);
    res
      .status(400)
      .send(e);
  }
};
