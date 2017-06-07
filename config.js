/**
 * Created by Tauseef Naqvi on 07-06-2017.
 */
var config = {
    'port': 84,                                                // set ourport
    'database': 'mongodb://127.0.0.1:27017/capp_api',          // database connection link
    'secret': 'system123',
    'superSecretCustomer': 'Secret',                             // key for generating for customer api token
    'superSecretAdmin': 'Secret',
    'GoogleApiKey': 'Key',
    'transactionKey': 'Key',
    'vendorKey': 'Key'

};
module.exports = config;