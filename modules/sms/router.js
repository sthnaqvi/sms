/**
 * Created by Tauseef Naqvi on 07-06-2017.
 */
let express = require("express");
let router = express.Router();
let sendSms = require('./controllers/sendSms');

/* update and insert user data in db
accessed at get http://capp-api.okhlee.com/api/sms/send */
router.route('^/send$').get(sendSms.sendSms);
module.exports = router;
