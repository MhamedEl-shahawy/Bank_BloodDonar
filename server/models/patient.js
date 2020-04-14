const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const patientSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    editDate: {
        type: Date,
    },
    patientName: {
        type: String,
        required: true,
    },
    nationalId: {
        type: String,
        require: true
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    donationDay:{
        type:String,
    },
    nextDonationDay:{
        type:String,
        
    },
    address: {
        type: String,
        require: true
    },
    bloodType: {
        type: String
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

module.exports = mongoose.model('Patient', patientSchema);
