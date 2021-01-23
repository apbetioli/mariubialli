import withSession from "lib/session";

export default withSession(async (req, res) => {

  try {
    let user = req.session.get("user");
    if (!user) {
      user = { isLoggedIn: false };
    }

    res.json(user);

  } catch (error) {
    console.error(error);
    const { response: fetchResponse } = error;
    res.status(fetchResponse?.status || 500).json(error.data);
  }


});
