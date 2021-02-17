module.exports = async (req, res) => {
  try {
    const body = req.body;
    res.send(body);

  } catch (e) {
    console.error(e);
    res
      .status(400)
      .send(e);
  }
};
