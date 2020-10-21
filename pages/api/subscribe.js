const mailchimp = require("@mailchimp/mailchimp_marketing");
const md5 = require("md5");

module.exports = async (req, res) => {
  try {
    const lead = req.body;

    const listId = process.env.MAILCHIMP_LIST_ID;

    mailchimp.setConfig({
      apiKey: process.env.MAILCHIMP_API_KEY,
      server: process.env.MAILCHIMP_SERVER,
    });

    let subscriberHash = md5(lead.email.toLowerCase());

    const response = await mailchimp.lists.setListMember(
      listId,
      subscriberHash,
      {
        email_address: lead.email,
        status: "subscribed",
        status_if_new: "subscribed",
      }
    );

    lead.id = response.id;

    await mailchimp.lists.updateListMemberTags(listId, subscriberHash, {
      body: {
        tags: [
          {
            name: lead.tag,
            status: "active",
          },
        ],
      },
    });

    res.send(JSON.stringify(lead));
  } catch (e) {
    console.error(e);

    res
      .status(400)
      .send(
        "Não foi possível completar o cadastro. Tente novamente em alguns minutos."
      );
  }
};
