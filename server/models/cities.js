const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const governorateSchema = new Schema({
    governorate:{
        city:String,
        hospital:String,
        address:String,
        phoneNumber:String
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

module.exports = mongoose.model('Governorate',governorateSchema);