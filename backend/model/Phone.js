const mongoose = require('mongoose')
const PhoneSchema = new mongoose.Schema({
    phoneCode: {
        type: String,
        required: true
    },
    phoneModel: {
        type: String,
        required: true
    },
    phoneDescription: {
        type: String,
        required: true
    },
    phonePrice: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Phone',PhoneSchema);