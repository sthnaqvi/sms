/**
 * Created by Tauseef Naqvi on 07-06-2017.
 */
const config = require('../../../config');
const request = require('request');
const querystring = require('querystring');

const sendSms = function (req, res) {
    let authkey = req.query.authkey;
    let mobiles = req.query.mobiles;
    let message = req.query.message;
    let sender = req.query.sender;
    let route = req.query.route;
    let country = req.query.country;
    let response = req.query.response;

    if (authkey && mobiles && message && sender && route && country && response) {
        let query = {
            authkey: authkey,
            mobiles: mobiles,
            message: message,
            sender: sender,
            // unicode: 1,
            route: route,
            country: 91,
            response: 'json'
        };
        let url = 'http://my.msgwow.com/api/sendhttp.php?' + querystring.stringify(query);

        function callback(err, response, body) {
            body =JSON.parse(body);
            if (err)
                res.json({success: false, msg: 'Opps error on sending sms. please try again.', error: err});
            else {
                if (body.type == 'success')
                    res.json({success: true, msg: 'Sms sent successfully with id' + body.message, body: body})
                else
                    res.json({success: false, msg: 'Opps error on sending sms. please try again.', body: body});
            }
        }

        request(url, callback);
    }
    else {
        res.json({success: false, msg: 'Some get query is missing.'})
    }
};
Controller = {
    sendSms: sendSms,
};
module.exports = Controller;