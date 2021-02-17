
module.exports = async (req, res) => {
  try {
    console.log(req.body);
    res.send(req.body);

  } catch (e) {
    console.error(e);
    res
      .status(400)
      .send(e);
  }
};
