import { NextApiRequest, NextApiResponse } from "next";

const translate = {
  AULAS: "zwup52j",
  CLUBE_PERPETUO_CHECKOUT: "8Mu4yOJ",
  CONFIRMED: "aaumQpa",
  DOWNLOAD: "8Mu4wW0",
  youtube: "8Mu4wn",
  instagram: "plue2j6",
  faceads: "d3uPmlL",
  facebook: "kRuOyBd",
  googleads: "aaumwRj",
  telegram: "GLu6woq",
  email: "QXuLw19",
  Facebook_Stories: "lEuepvR",
  Facebook_Feed: "LnuKBr1",
  Facebook_Right_Column: "GLu60Je",
  Instagram_Stories: "2juLxBL",
  Instagram_Feed: "VKuxME5",
};

interface Lead {
  email: string;
  name: string;
  phone: string;
  source: string;
  tag: string;
}

const getParams = (lead: Lead) => {
  const params = new URLSearchParams();

  params.append("email", lead.email);

  if (lead.name) {
    const name = lead.name?.trim().split(" ");
    params.append("first_name", name[0]);
    if (name.length > 0) params.append("first_name", name[0]);
    if (name.length > 1) params.append("last_name", name.slice(1).join(" "));
  }

  if (lead.phone) {
    params.append("phone", lead.phone?.trim());
  }

  return params;
};

const subscribe = async (lead: Lead, tag: string) => {
  if (!tag) return;

  const params = getParams(lead);
  params.append("b_" + tag, "");

  return await fetch("https://handler.klicksend.com.br/subscription/" + tag, {
    method: "POST",
    body: params,
  }).then((res) => {
    if (!res.ok) throw res;
    return res.url;
  });
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const lead = req.body;
  console.log(lead);

  try {
    const result = await Promise.all([
      subscribe(lead, translate[lead.tag]),
      subscribe(lead, translate[lead.source]),
    ]);
    res.send(result);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
}
