const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
    id_producto:{
        type: Number,
        required: true
    },
    user:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    comment:{
        type: String
    },
    calification:{
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    }
})

module.exports = mongoose.model('user', commentSchema)