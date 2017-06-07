/**
 * Created by Tauseef Naqvi on 07-06-2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    deviceId: {type: String, required: true, unique: true},
    name: {type: String},

});
module.exports = mongoose.model('User', UserSchema);