import withSession from "lib/session";

export default withSession(async (req, res) => {
  try {
    const { email, source } = await req.body;
    const user = { isLoggedIn: true, email, source };
    req.session.set("user", user);
    await req.session.save();
    res.json(user);
  } catch (error) {
    console.error(error);
    const { response: fetchResponse } = error;
    res.status(fetchResponse?.status || 500).json(error.data);
  }
});
