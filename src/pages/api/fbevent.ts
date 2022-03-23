import {
  EventRequest,
  FacebookAdsApi,
  ServerEvent,
  UserData
} from "facebook-nodejs-business-sdk";
import { NextApiRequest, NextApiResponse } from "next";

const access_token = process.env.FB_CONVERSION_API_TOKEN;
const pixel_id = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;
const api = FacebookAdsApi.init(access_token);
//api.setDebug(true);

export default async function fbevent(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data = req.body;
    console.log(data);

    if (
      process.env.NODE_ENV == "development" &&
      !process.env.FB_TEST_EVENT_CODE
    ) {
      console.log("Ignoring Facebook Conversion API");
      return res.send("OK");
    }

    const userData = new UserData()
      .setClientIpAddress(req.socket.remoteAddress)
      .setClientUserAgent(req.headers["user-agent"]);

    if (data.fbp) userData.setFbp(data.fbp);

    if (data.fbclid) userData.setFbc(data.fbclid);

    if (data.options.em) userData.setEmails([data.options.em]);

    if (data.options.ph) userData.setPhones([data.options.ph]);

    if (data.options.fn) userData.setName(data.options.fn);

    const serverEvent: ServerEvent = new ServerEvent()
      .setEventId(data.event_id)
      .setEventName(data.event_name)
      .setEventTime(data.event_time)
      .setUserData(userData)
      .setActionSource("website");

    if (data.url) serverEvent.setEventSourceUrl(data.url);

    const eventsData = [serverEvent];
    const eventRequest: EventRequest = new EventRequest(
      access_token,
      pixel_id
    ).setEvents(eventsData);

    if (process.env.FB_TEST_EVENT_CODE)
      eventRequest.setTestEventCode(process.env.FB_TEST_EVENT_CODE);

    await eventRequest.execute().then(
      (response) => {
        return res.send(response);
      },
      (err) => {
        console.error("Error: ", err);
        return res.status(400).send(err);
      }
    );
  } catch (e) {
    console.error(e);
    return res.status(400).send(e);
  }
}
