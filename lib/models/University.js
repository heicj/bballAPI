const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
    universityId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    schoolLong: {
        type: String,
        required: true
    },
    location: {
        type: String
    },
    schoolShort: {
        type: String,
    },
    name: {
        type: String
    },
    conference: {
        type: String
    },
    homeArena: {
        type: String
    },
    mascot: {
        type: String
    }


})