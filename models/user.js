const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        required: true,
        trim: true
    },
    mobile: {
        type: Number,
        trim: true
    }
})
module.exports = mongoose.model('User', userSchema)













