let mongoose = require('mongoose');

let BtsSchema = new mongoose.Schema({
    radio: String, //Radio type
    mcc: Number,
    mnc: Number, //MNC
    lac: Number, //LAC
    cid: Number, //CID
    lon: Number,
    lat: Number,
    range: Number,
    samples: Number,
    changeable: Number,
    created: Number,
    updated: Number
});

let Bts = mongoose.model('bts', BtsSchema);

module.exports = Bts;