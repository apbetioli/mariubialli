'use strict';
const bizSdk = require('facebook-nodejs-business-sdk');
const Content = bizSdk.Content;
const CustomData = bizSdk.CustomData;
const DeliveryCategory = bizSdk.DeliveryCategory;
const EventRequest = bizSdk.EventRequest;
const UserData = bizSdk.UserData;
const ServerEvent = bizSdk.ServerEvent;

const access_token = process.env.FB_CONVERSION_API_TOKEN;
const pixel_id = process.env.FB_PIXEL_ID;
const api = bizSdk.FacebookAdsApi.init(access_token);

module.exports = async (req, res) => {
    try {
        console.log(req.body);

        let current_timestamp = Math.floor(new Date() / 1000);

        const userData = (new UserData())
            //.setEmails([req.body.email])
            //.setPhones([req.body.phone])
            // It is recommended to send Client IP and User Agent for Conversions API Events.
            .setClientIpAddress(req.connection.remoteAddress)
            .setClientUserAgent(req.headers['user-agent'])
            //.setFbp('fb.1.1558571054389.1098115397')
            //.setFbc('fb.1.1554763741205.AbCdEfGhIjKlMnOpQrStUvWxYz1234567890')
            ;
        /*
                const content = (new Content())
                    .setId('product123')
                    .setQuantity(1)
                    .setDeliveryCategory(DeliveryCategory.HOME_DELIVERY);
        
                const customData = (new CustomData())
                    .setContents([content])
                    .setCurrency('brl')
                    .setValue(123.45);
        */
        const serverEvent = (new ServerEvent())
            .setEventName('PageView')
            .setEventTime(current_timestamp)
            .setUserData(userData)
            //            .setCustomData(customData)
            .setEventSourceUrl('https://mariubialli.com/joiasraras')
            .setActionSource('website');

        const eventsData = [serverEvent];
        const eventRequest = (new EventRequest(access_token, pixel_id))
            .setEvents(eventsData)
            .setTestEventCode(process.env.FB_TEST_EVENT_CODE);

        eventRequest.execute().then(
            response => {
                console.log('Response: ', response);
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