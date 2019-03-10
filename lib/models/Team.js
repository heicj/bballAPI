const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema ({
    teamName: {
        type: String,
        required: true
    },
    headCoach: {
        type: String
    }
});

module.exports = mongoose.model('Team', schema);