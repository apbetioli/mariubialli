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

    const subscriberHash = md5(lead.email.toLowerCase());

    const member = {
      email_address: lead.email,
      status: "subscribed",
      status_if_new: "subscribed",
      merge_fields: {
        FNAME: lead.name,
        PHONE: lead.phone
      }
    };

    const response = await mailchimp.lists.setListMember(
      listId,
      subscriberHash,
      member
    );

    lead.id = response.id;

    let tags = [
      {
        name: lead.tag,
        status: "active",
      },
    ];

    if (lead.source) {
      tags.push({
        name: lead.source.toUpperCase(),
        status: "active",
      })
    };

    if (lead.tag) {
      await mailchimp.lists.updateListMemberTags(listId, subscriberHash, {
        tags
      });
    }

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
