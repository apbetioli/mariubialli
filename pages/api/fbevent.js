'use strict';
const bizSdk = require('facebook-nodejs-business-sdk');
const Content = bizSdk.Content;
const CustomData = bizSdk.CustomData;
const EventRequest = bizSdk.EventRequest;
const UserData = bizSdk.UserData;
const ServerEvent = bizSdk.ServerEvent;

const access_token = process.env.FB_CONVERSION_API_TOKEN;
const pixel_id = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;
const api = bizSdk.FacebookAdsApi.init(access_token);
//api.setDebug(true);

module.exports = async (req, res) => {
    try {
        if (process.env.NODE_ENV == "development" && !process.env.FB_TEST_EVENT_CODE) {
            res.send("OK");
            return;
        }

        console.log(req.body);

        const userData = (new UserData())
            .setClientIpAddress(req.connection.remoteAddress)
            .setClientUserAgent(req.headers['user-agent']);


        if (req.body.fbp)
            userData.setFbp(req.body.fbp)

        if (req.body.fbclid)
            userData.setFbc(req.body.fbclid)

        if (req.body.options.em)
            userData.setEmails([req.body.options.em])

        if (req.body.options.ph)
            userData.setPhones([req.body.options.ph])

        if (req.body.options.fn)
            userData.setName(req.body.options.fn)

        const serverEvent = (new ServerEvent())
            .setEventId(req.body.event_id)
            .setEventName(req.body.event_name)
            .setEventTime(req.body.event_time)
            .setUserData(userData)
            .setActionSource('website');

        if (req.body.url)
            serverEvent.setEventSourceUrl(req.body.url)

        const eventsData = [serverEvent];
        const eventRequest = (new EventRequest(access_token, pixel_id))
            .setEvents(eventsData);

        if (process.env.FB_TEST_EVENT_CODE)
            eventRequest.setTestEventCode(process.env.FB_TEST_EVENT_CODE);

        await eventRequest.execute().then(
            response => {
                res.send(response);
            },
            err => {
                console.error('Error: ', err);
                res.status(400).send(err);
            }
        );
    } catch (e) {
        console.error(e);
        res.status(400).send(e);
    }
};