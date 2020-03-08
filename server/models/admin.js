const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const adminSchema = new Schema({
    name: {
        type: String,
        required:true
    },
    adminId: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: Number
    }
});


module.exports = mongoose.model('Admin', adminSchema);